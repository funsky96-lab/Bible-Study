const fs = require("fs");
const path = require("path");

const root = __dirname;
const dataDir = path.join(root, "data");
const cnXml = fs.readFileSync(path.join(dataDir, "chi-cuv-simp.usfx.xml"), "utf8");
const enXml = fs.readFileSync(path.join(dataDir, "eng-kjv.osis.xml"), "utf8");

const bookCodes = [
  ["gen", "GEN", "Gen"], ["exo", "EXO", "Exod"], ["lev", "LEV", "Lev"], ["num", "NUM", "Num"], ["deu", "DEU", "Deut"],
  ["jos", "JOS", "Josh"], ["jdg", "JDG", "Judg"], ["rut", "RUT", "Ruth"], ["1sa", "1SA", "1Sam"], ["2sa", "2SA", "2Sam"],
  ["1ki", "1KI", "1Kgs"], ["2ki", "2KI", "2Kgs"], ["1ch", "1CH", "1Chr"], ["2ch", "2CH", "2Chr"], ["ezr", "EZR", "Ezra"],
  ["neh", "NEH", "Neh"], ["est", "EST", "Esth"], ["job", "JOB", "Job"], ["psa", "PSA", "Ps"], ["pro", "PRO", "Prov"],
  ["ecc", "ECC", "Eccl"], ["sng", "SNG", "Song"], ["isa", "ISA", "Isa"], ["jer", "JER", "Jer"], ["lam", "LAM", "Lam"],
  ["ezk", "EZK", "Ezek"], ["dan", "DAN", "Dan"], ["hos", "HOS", "Hos"], ["jol", "JOL", "Joel"], ["amo", "AMO", "Amos"],
  ["oba", "OBA", "Obad"], ["jon", "JON", "Jonah"], ["mic", "MIC", "Mic"], ["nam", "NAM", "Nah"], ["hab", "HAB", "Hab"],
  ["zep", "ZEP", "Zeph"], ["hag", "HAG", "Hag"], ["zec", "ZEC", "Zech"], ["mal", "MAL", "Mal"], ["mat", "MAT", "Matt"],
  ["mrk", "MRK", "Mark"], ["luk", "LUK", "Luke"], ["jhn", "JHN", "John"], ["act", "ACT", "Acts"], ["rom", "ROM", "Rom"],
  ["1co", "1CO", "1Cor"], ["2co", "2CO", "2Cor"], ["gal", "GAL", "Gal"], ["eph", "EPH", "Eph"], ["php", "PHP", "Phil"],
  ["col", "COL", "Col"], ["1th", "1TH", "1Thess"], ["2th", "2TH", "2Thess"], ["1ti", "1TI", "1Tim"], ["2ti", "2TI", "2Tim"],
  ["tit", "TIT", "Titus"], ["phm", "PHM", "Phlm"], ["heb", "HEB", "Heb"], ["jas", "JAS", "Jas"], ["1pe", "1PE", "1Pet"],
  ["2pe", "2PE", "2Pet"], ["1jn", "1JN", "1John"], ["2jn", "2JN", "2John"], ["3jn", "3JN", "3John"], ["jud", "JUD", "Jude"], ["rev", "REV", "Rev"]
];

const usfxToId = new Map(bookCodes.map(([id, usfx]) => [usfx, id]));
const osisToId = new Map(bookCodes.map(([id, , osis]) => [osis, id]));
const canonicalIds = new Set(bookCodes.map(([id]) => id));

function cleanText(text) {
  return text
    .replace(/<[^>]+>/g, "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function parseChinese(xml) {
  const result = {};
  let bookId = null;
  let chapter = null;
  let verse = null;
  let markerEnd = 0;
  const markerPattern = /<book\s+id="([^"]+)"[^>]*>|<c\s+id="(\d+)"\s*\/>|<v\s+id="(\d+)"\s*\/>|<ve\s*\/>/g;

  function collectText(until) {
    if (bookId && chapter && verse && until > markerEnd) {
      const key = `${bookId}-${chapter}`;
      const text = cleanText(xml.slice(markerEnd, until));
      if (text) {
        if (!result[key]) result[key] = [];
        result[key][Number(verse) - 1] = text;
      }
    }
  }

  function resetVerse() {
    if (!bookId || !chapter || !verse) return;
    verse = null;
  }

  let match;
  while ((match = markerPattern.exec(xml))) {
    collectText(match.index);
    if (match[1]) {
      resetVerse();
      bookId = usfxToId.get(match[1]) || null;
      chapter = null;
      verse = null;
    } else if (match[2]) {
      resetVerse();
      chapter = Number(match[2]);
      verse = null;
    } else if (match[3]) {
      verse = Number(match[3]);
    } else {
      resetVerse();
    }
    markerEnd = markerPattern.lastIndex;
  }
  collectText(xml.length);
  return result;
}

function parseEnglish(xml) {
  const result = {};
  const versePattern = /<verse\s+(?:osisID|eID)="([^"]+)"[^>]*\/>/g;
  let current = null;
  let markerEnd = 0;
  let match;

  function commit(until) {
    if (!current) return;
    const text = cleanText(xml.slice(markerEnd, until));
    if (!text) return;
    const key = `${current.bookId}-${current.chapter}`;
    if (!result[key]) result[key] = [];
    result[key][current.verse - 1] = text;
  }

  while ((match = versePattern.exec(xml))) {
    commit(match.index);
    const fullTag = match[0];
    if (fullTag.includes("osisID=")) {
      const parts = match[1].split(".");
      const bookId = osisToId.get(parts[0]);
      current = bookId && canonicalIds.has(bookId)
        ? { bookId, chapter: Number(parts[1]), verse: Number(parts[2]) }
        : null;
    } else {
      current = null;
    }
    markerEnd = versePattern.lastIndex;
  }
  commit(xml.length);
  return result;
}

const cn = parseChinese(cnXml);
const en = parseEnglish(enXml);
const combined = {};
for (const [id] of bookCodes) {
  const chapterNumbers = new Set();
  for (const key of Object.keys(cn)) if (key.startsWith(`${id}-`)) chapterNumbers.add(Number(key.split("-")[1]));
  for (const key of Object.keys(en)) if (key.startsWith(`${id}-`)) chapterNumbers.add(Number(key.split("-")[1]));
  for (const chapter of [...chapterNumbers].sort((a, b) => a - b)) {
    const key = `${id}-${chapter}`;
    combined[key] = {
      cn: cn[key] || [],
      en: en[key] || []
    };
  }
}

const output = `window.BIBLE_TEXT = ${JSON.stringify(combined)};\n`;
fs.writeFileSync(path.join(dataDir, "bible-data.js"), output, "utf8");
console.log(JSON.stringify({ chapters: Object.keys(combined).length, sample: combined["gen-1"]?.cn?.[0], sampleEn: combined["gen-1"]?.en?.[0] }, null, 2));

const books = [
  { id: "gen", testament: "old", cn: "创世记", en: "Genesis", chapters: 50 },
  { id: "exo", testament: "old", cn: "出埃及记", en: "Exodus", chapters: 40 },
  { id: "lev", testament: "old", cn: "利未记", en: "Leviticus", chapters: 27 },
  { id: "num", testament: "old", cn: "民数记", en: "Numbers", chapters: 36 },
  { id: "deu", testament: "old", cn: "申命记", en: "Deuteronomy", chapters: 34 },
  { id: "jos", testament: "old", cn: "约书亚记", en: "Joshua", chapters: 24 },
  { id: "jdg", testament: "old", cn: "士师记", en: "Judges", chapters: 21 },
  { id: "rut", testament: "old", cn: "路得记", en: "Ruth", chapters: 4 },
  { id: "1sa", testament: "old", cn: "撒母耳记上", en: "1 Samuel", chapters: 31 },
  { id: "2sa", testament: "old", cn: "撒母耳记下", en: "2 Samuel", chapters: 24 },
  { id: "1ki", testament: "old", cn: "列王纪上", en: "1 Kings", chapters: 22 },
  { id: "2ki", testament: "old", cn: "列王纪下", en: "2 Kings", chapters: 25 },
  { id: "1ch", testament: "old", cn: "历代志上", en: "1 Chronicles", chapters: 29 },
  { id: "2ch", testament: "old", cn: "历代志下", en: "2 Chronicles", chapters: 36 },
  { id: "ezr", testament: "old", cn: "以斯拉记", en: "Ezra", chapters: 10 },
  { id: "neh", testament: "old", cn: "尼希米记", en: "Nehemiah", chapters: 13 },
  { id: "est", testament: "old", cn: "以斯帖记", en: "Esther", chapters: 10 },
  { id: "job", testament: "old", cn: "约伯记", en: "Job", chapters: 42 },
  { id: "psa", testament: "old", cn: "诗篇", en: "Psalms", chapters: 150 },
  { id: "pro", testament: "old", cn: "箴言", en: "Proverbs", chapters: 31 },
  { id: "ecc", testament: "old", cn: "传道书", en: "Ecclesiastes", chapters: 12 },
  { id: "sng", testament: "old", cn: "雅歌", en: "Song of Songs", chapters: 8 },
  { id: "isa", testament: "old", cn: "以赛亚书", en: "Isaiah", chapters: 66 },
  { id: "jer", testament: "old", cn: "耶利米书", en: "Jeremiah", chapters: 52 },
  { id: "lam", testament: "old", cn: "耶利米哀歌", en: "Lamentations", chapters: 5 },
  { id: "ezk", testament: "old", cn: "以西结书", en: "Ezekiel", chapters: 48 },
  { id: "dan", testament: "old", cn: "但以理书", en: "Daniel", chapters: 12 },
  { id: "hos", testament: "old", cn: "何西阿书", en: "Hosea", chapters: 14 },
  { id: "jol", testament: "old", cn: "约珥书", en: "Joel", chapters: 3 },
  { id: "amo", testament: "old", cn: "阿摩司书", en: "Amos", chapters: 9 },
  { id: "oba", testament: "old", cn: "俄巴底亚书", en: "Obadiah", chapters: 1 },
  { id: "jon", testament: "old", cn: "约拿书", en: "Jonah", chapters: 4 },
  { id: "mic", testament: "old", cn: "弥迦书", en: "Micah", chapters: 7 },
  { id: "nam", testament: "old", cn: "那鸿书", en: "Nahum", chapters: 3 },
  { id: "hab", testament: "old", cn: "哈巴谷书", en: "Habakkuk", chapters: 3 },
  { id: "zep", testament: "old", cn: "西番雅书", en: "Zephaniah", chapters: 3 },
  { id: "hag", testament: "old", cn: "哈该书", en: "Haggai", chapters: 2 },
  { id: "zec", testament: "old", cn: "撒迦利亚书", en: "Zechariah", chapters: 14 },
  { id: "mal", testament: "old", cn: "玛拉基书", en: "Malachi", chapters: 4 },
  { id: "mat", testament: "new", cn: "马太福音", en: "Matthew", chapters: 28 },
  { id: "mrk", testament: "new", cn: "马可福音", en: "Mark", chapters: 16 },
  { id: "luk", testament: "new", cn: "路加福音", en: "Luke", chapters: 24 },
  { id: "jhn", testament: "new", cn: "约翰福音", en: "John", chapters: 21 },
  { id: "act", testament: "new", cn: "使徒行传", en: "Acts", chapters: 28 },
  { id: "rom", testament: "new", cn: "罗马书", en: "Romans", chapters: 16 },
  { id: "1co", testament: "new", cn: "哥林多前书", en: "1 Corinthians", chapters: 16 },
  { id: "2co", testament: "new", cn: "哥林多后书", en: "2 Corinthians", chapters: 13 },
  { id: "gal", testament: "new", cn: "加拉太书", en: "Galatians", chapters: 6 },
  { id: "eph", testament: "new", cn: "以弗所书", en: "Ephesians", chapters: 6 },
  { id: "php", testament: "new", cn: "腓立比书", en: "Philippians", chapters: 4 },
  { id: "col", testament: "new", cn: "歌罗西书", en: "Colossians", chapters: 4 },
  { id: "1th", testament: "new", cn: "帖撒罗尼迦前书", en: "1 Thessalonians", chapters: 5 },
  { id: "2th", testament: "new", cn: "帖撒罗尼迦后书", en: "2 Thessalonians", chapters: 3 },
  { id: "1ti", testament: "new", cn: "提摩太前书", en: "1 Timothy", chapters: 6 },
  { id: "2ti", testament: "new", cn: "提摩太后书", en: "2 Timothy", chapters: 4 },
  { id: "tit", testament: "new", cn: "提多书", en: "Titus", chapters: 3 },
  { id: "phm", testament: "new", cn: "腓利门书", en: "Philemon", chapters: 1 },
  { id: "heb", testament: "new", cn: "希伯来书", en: "Hebrews", chapters: 13 },
  { id: "jas", testament: "new", cn: "雅各书", en: "James", chapters: 5 },
  { id: "1pe", testament: "new", cn: "彼得前书", en: "1 Peter", chapters: 5 },
  { id: "2pe", testament: "new", cn: "彼得后书", en: "2 Peter", chapters: 3 },
  { id: "1jn", testament: "new", cn: "约翰一书", en: "1 John", chapters: 5 },
  { id: "2jn", testament: "new", cn: "约翰二书", en: "2 John", chapters: 1 },
  { id: "3jn", testament: "new", cn: "约翰三书", en: "3 John", chapters: 1 },
  { id: "jud", testament: "new", cn: "犹大书", en: "Jude", chapters: 1 },
  { id: "rev", testament: "new", cn: "启示录", en: "Revelation", chapters: 22 }
];

const bibleText = window.BIBLE_TEXT || {};

const state = {
  bookId: "gen",
  chapter: 1,
  filter: "all",
  search: "",
  mobileLanguage: "cn"
};

const bookList = document.querySelector("#bookList");
const testamentFilter = document.querySelector("#testamentFilter");
const bookSearch = document.querySelector("#bookSearch");
const chapterSelectCn = document.querySelector("#chapterSelectCn");
const chapterSelectEn = document.querySelector("#chapterSelectEn");
const cnTitle = document.querySelector("#cnTitle");
const enTitle = document.querySelector("#enTitle");
const cnVerses = document.querySelector("#cnVerses");
const enVerses = document.querySelector("#enVerses");
const prevChapterButton = document.querySelector("#prevChapter");
const nextChapterButton = document.querySelector("#nextChapter");
const mobilePrevChapterButton = document.querySelector("#mobilePrevChapter");
const mobileNextChapterButton = document.querySelector("#mobileNextChapter");
const googleSearchLink = document.querySelector("#googleSearchLink");
const modernTime = document.querySelector("#modernTime");
const christianTime = document.querySelector("#christianTime");
const languageToggleButtons = document.querySelectorAll(".language-toggle");
const chinesePanel = document.querySelector(".scripture-panel--cn");
const englishPanel = document.querySelector(".scripture-panel--en");

function getSelectedBook() {
  return books.find((book) => book.id === state.bookId) || books[0];
}

function getBookIndex(bookId) {
  return books.findIndex((book) => book.id === bookId);
}

function getAdjacentChapter(direction) {
  const book = getSelectedBook();
  const bookIndex = getBookIndex(book.id);

  if (direction === "previous") {
    if (state.chapter > 1) {
      return { bookId: book.id, chapter: state.chapter - 1 };
    }

    const previousBook = books[bookIndex - 1];
    return previousBook ? { bookId: previousBook.id, chapter: previousBook.chapters } : null;
  }

  if (state.chapter < book.chapters) {
    return { bookId: book.id, chapter: state.chapter + 1 };
  }

  const nextBook = books[bookIndex + 1];
  return nextBook ? { bookId: nextBook.id, chapter: 1 } : null;
}

function goToChapter(target) {
  if (!target) return;
  state.bookId = target.bookId;
  state.chapter = target.chapter;
  renderAll();
}

function renderChapterNavigation() {
  const previous = getAdjacentChapter("previous");
  const next = getAdjacentChapter("next");
  const previousBook = previous ? books[getBookIndex(previous.bookId)] : null;
  const nextBook = next ? books[getBookIndex(next.bookId)] : null;

  [prevChapterButton, mobilePrevChapterButton].forEach((button) => {
    button.disabled = !previous;
    button.textContent = previousBook ? `上一章 ${previousBook.cn} ${previous.chapter}` : "上一章";
  });
  [nextChapterButton, mobileNextChapterButton].forEach((button) => {
    button.disabled = !next;
    button.textContent = nextBook ? `下一章 ${nextBook.cn} ${next.chapter}` : "下一章";
  });
}

function renderStudyLinks() {
  const book = getSelectedBook();
  const query = encodeURIComponent(`${book.cn} ${book.en} ${state.chapter} Bible commentary 解经`);
  googleSearchLink.href = `https://www.google.com/search?q=${query}`;
  googleSearchLink.textContent = "Google";
}

function renderMobileLanguage() {
  languageToggleButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.language === state.mobileLanguage);
  });
  chinesePanel.classList.toggle("is-mobile-hidden", state.mobileLanguage !== "cn");
  englishPanel.classList.toggle("is-mobile-hidden", state.mobileLanguage !== "en");
}

function scrollToReaderOnMobile() {
  if (!window.matchMedia("(max-width: 820px)").matches) return;
  const panel = state.mobileLanguage === "cn" ? chinesePanel : englishPanel;
  panel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderBookList() {
  const query = state.search.trim().toLowerCase();
  const visibleBooks = books.filter((book) => {
    const matchesTestament = state.filter === "all" || book.testament === state.filter;
    const matchesSearch = !query || book.cn.toLowerCase().includes(query) || book.en.toLowerCase().includes(query);
    return matchesTestament && matchesSearch;
  });

  bookList.innerHTML = "";
  let currentTestament = "";

  visibleBooks.forEach((book) => {
    if (book.testament !== currentTestament) {
      currentTestament = book.testament;
      const title = document.createElement("div");
      title.className = "book-group-title";
      title.textContent = currentTestament === "old" ? "旧约 Old Testament" : "新约 New Testament";
      bookList.append(title);
    }

    const button = document.createElement("button");
    button.className = `book-button${book.id === state.bookId ? " is-active" : ""}`;
    button.type = "button";
    button.innerHTML = `<span>${book.cn}<br><small>${book.en}</small></span><small>${book.chapters}章</small>`;
    button.addEventListener("click", () => {
      state.bookId = book.id;
      state.chapter = 1;
      renderAll();
      scrollToReaderOnMobile();
    });
    bookList.append(button);
  });
}

function renderChapterSelects() {
  const book = getSelectedBook();
  const cnOptions = Array.from({ length: book.chapters }, (_, index) => {
    const chapter = index + 1;
    return `<option value="${chapter}"${chapter === state.chapter ? " selected" : ""}>第 ${chapter} 章</option>`;
  }).join("");
  const enOptions = Array.from({ length: book.chapters }, (_, index) => {
    const chapter = index + 1;
    return `<option value="${chapter}"${chapter === state.chapter ? " selected" : ""}>Chapter ${chapter}</option>`;
  }).join("");

  chapterSelectCn.innerHTML = cnOptions;
  chapterSelectEn.innerHTML = enOptions;
}

function renderVerses(target, verses, language) {
  target.innerHTML = "";

  if (!verses) {
    const note = document.createElement("div");
    note.className = "empty-note";
    note.textContent = language === "cn"
      ? "这一章暂时没有找到中文经文数据，请检查本地 Bible data。"
      : "Text for this chapter was not found in the local Bible data.";
    target.append(note);
    return;
  }

  verses.forEach((text, index) => {
    const verse = document.createElement("section");
    verse.className = "verse";
    verse.innerHTML = `<span class="verse-number">${index + 1}</span><p>${text}</p>`;
    target.append(verse);
  });
}

function renderReader() {
  const book = getSelectedBook();
  const key = `${book.id}-${state.chapter}`;
  const chapterText = bibleText[key];

  cnTitle.textContent = `${book.cn} ${state.chapter}`;
  enTitle.textContent = `${book.en} ${state.chapter}`;
  renderChapterSelects();
  renderChapterNavigation();
  renderStudyLinks();
  renderMobileLanguage();
  renderVerses(cnVerses, chapterText?.cn, "cn");
  renderVerses(enVerses, chapterText?.en, "en");
}

function renderAll() {
  renderBookList();
  renderReader();
}

function syncChapter(value) {
  state.chapter = Number(value);
  renderReader();
}

testamentFilter.addEventListener("change", (event) => {
  state.filter = event.target.value;
  renderBookList();
});

bookSearch.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderBookList();
});

chapterSelectCn.addEventListener("change", (event) => syncChapter(event.target.value));
chapterSelectEn.addEventListener("change", (event) => syncChapter(event.target.value));
prevChapterButton.addEventListener("click", () => goToChapter(getAdjacentChapter("previous")));
nextChapterButton.addEventListener("click", () => goToChapter(getAdjacentChapter("next")));
mobilePrevChapterButton.addEventListener("click", () => goToChapter(getAdjacentChapter("previous")));
mobileNextChapterButton.addEventListener("click", () => goToChapter(getAdjacentChapter("next")));
languageToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.mobileLanguage = button.dataset.language;
    renderMobileLanguage();
  });
});

function renderTime() {
  const now = new Date();
  const modern = new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(now);
  const year = now.getFullYear();
  const monthDay = new Intl.DateTimeFormat("zh-CN", {
    month: "long",
    day: "numeric",
    weekday: "short"
  }).format(now);

  modernTime.textContent = modern;
  christianTime.textContent = `主后 ${year} 年 / Anno Domini ${year} · ${monthDay}`;
}

renderAll();
renderTime();
setInterval(renderTime, 1000);




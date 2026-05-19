# Bible Study

A static bilingual Bible reader prototype.

- Left column: full Old Testament and New Testament book catalog with search and testament filter.
- Middle column: Chinese scripture reading panel.
- Right column: English scripture reading panel.
- Bottom of the Chinese panel: previous/next chapter controls that keep Chinese and English in sync.
- Top hero: generated local Bible study image in `assets/bible-hero.png`.
- Study links: Google search for the current chapter, CCBibleStudy, and Our Daily Bread Chinese.

Bible text data is generated from Public Domain sources in `data/`:

- `chi-cuv-simp.usfx.xml`: Chinese Union Version Simplified
- `eng-kjv.osis.xml`: King James Version
- `bible-data.js`: generated browser data used by the page

Run `node convert-bible-data.cjs` after replacing or updating the XML files.

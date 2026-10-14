# Static Academic Journal Website (HTML/CSS/JS)

## Open the website
1. Extract `veethika_static_journal_site.zip`.
2. Open `index.html` in Chrome or Edge.
3. Search/filter sample papers and click a title or “View article details”.
4. The link opens `articles/<article-id>.html`, a separate article metadata page.

## Customize
- Journal name, ISSN, navigation, about text and contact email: edit `index.html`.
- Colors and layout: edit `styles.css`.
- Article metadata: edit `sampleArticles` in `app.js`.
- Each article has a corresponding file in `articles/`. Duplicate `sample-article-1.html` for each new article and name it to match the article's unique `id` in `app.js`.
- Add the real PDF file under `pdfs/` and set the matching article's `pdf` field, e.g. `pdf: "../pdfs/paper-001.pdf"` from an article page. (From an article page, `../pdfs/...` is the correct relative path.)
- Add only DOI identifiers that are genuinely assigned/registered. The DOI link is generated from the `doi` field.

## Important limitations
This is a static HTML/CSS/JS website. It has no admin dashboard, database, author login, or automatic publication workflow. To add or edit articles, you edit files and upload the updated website to hosting. For a production journal, use real metadata, verified DOI records, correct publication ethics statements and working PDF links. If the goal is DOI registration, each DOI should resolve to the permanent URL of that article's landing page.

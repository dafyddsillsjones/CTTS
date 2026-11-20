# CTTSS 2026 — Retrospective Archive

Static, responsive GitHub Pages website for the Creative Technology and Transformative Storytelling Symposium & Showcase 2026.

## Deploy on GitHub Pages

1. Create a public GitHub repository, e.g. `cttss-2026-archive`.
2. Upload **the contents of this folder** to the repository root (including `index.html`, `styles.css`, `app.js`, `presentations.js`, and the `presentations`, `previews`, and `assets` directories).
3. In repository **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. The site will appear at `https://YOUR-USERNAME.github.io/cttss-2026-archive/` after deployment.

No build system, server, database, or API key is needed.

## Add presentations

1. Obtain written permission from the presenter to publish their presentation and associated media.
2. Put the original `.pptx` in `presentations/` (use a URL-safe filename).
3. Export a PDF reading copy to `previews/` (recommended, because browsers cannot reliably display PPTX files natively).
4. Optionally add a JPEG cover image to `assets/`.
5. Add an object to the array in `presentations.js` with `id`, `title`, `presenter`, `affiliation`, `description`, `keywords`, `status: 'available'`, `image`, `powerpoint`, and `pdf`.
6. Commit and push. GitHub Pages will update automatically.

To list an item before the files arrive, use `status: 'pending'` and omit the download and preview paths. The site will clearly label it 'Awaiting deposit'. Do not add unverified titles or speakers.

## Important archival notes

- The original Google Sheets programme is **linked**, not imported. It could not be read during construction; do not imply the full programme has been archived locally. To make the site self-contained, export the verified programme as a PDF and add it to the repository, then update the programme section.
- The Swinburne original event page is linked for provenance.
- The sample presentation was converted to PDF with LibreOffice for browser viewing; inspect the PDF for slide fidelity, fonts, embedded video, and animation (PDF cannot preserve animation).
- The sample PPTX is approximately 44 MB and the PDF approximately 21 MB. Both are below GitHub's 100 MB single-file hard limit, but large downloads may be slow. GitHub Pages also has published-site size and bandwidth limits; check current GitHub documentation if you add many large decks. For a substantial archive, store large files in an institutional repository or external object storage and link to them from `presentations.js`.
- Public GitHub Pages means presentation files are publicly downloadable. Verify copyright, permissions, sensitive data and third-party images before publishing.
- Google Fonts are loaded externally; the website otherwise has no external JavaScript dependencies.

## Files

- `index.html` — site content and semantic structure
- `styles.css` — responsive styling
- `app.js` — search, filters, presentation viewer
- `presentations.js` — editable archive metadata
- `presentations/` — downloadable original PowerPoint files
- `previews/` — PDF reading copies
- `assets/` — cover images

## Source records

Original event: https://transformativemedia.swinburne.edu.au/event/creative-technology-and-transformative-storytelling-symposium-2026-cttss-26/

Original schedule: https://docs.google.com/spreadsheets/d/1K1t2OAAQhwbPTbLozx_XFKFbfeRiFxvlwk656opxIGY/edit?gid=201063467#gid=201063467

## Original conference branding

The site uses `assets/conference-hero.png`, supplied by the symposium organiser, as the full-width original hero artwork. The accompanying palette uses midnight navy, violet, muted pink and warm gold. Replace that image only with an authorised conference asset.

## Revised design (November 2026)

The archive now uses a more balanced, accessible typography scale throughout and removes the standalone “About the Archive” section. Attribution and permissions are retained in the footer.

## Revision — streamlined layout

Removed the redundant Historical Record section. The original programme is accessible from the top navigation and the archive banner. The symposium overview and presentation library are unchanged.

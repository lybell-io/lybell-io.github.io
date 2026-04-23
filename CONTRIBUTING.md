# Developer & Contributor Notes

Internal reference for anyone working on this repository.

---

## Repository Structure

```
lybell-io.github.io/
│
├── index.html              # Main website pages (root = graphchain.org)
├── about.html
├── docs.html
├── privacy_policy.html
├── testnet_info.html
│
├── css/styles.css          # Stylesheet for main website
├── js/script.js            # JavaScript for main website
├── img/                    # Logos & favicons
├── assets/                 # Static assets (e.g. whitepaper PDF)
│
├── docs/                   # Documentation source & build config
│   ├── mkdocs.yml          # MkDocs config (site_dir → ../site/docs)
│   └── docs/               # Markdown source files
│       ├── index.md
│       ├── getting-started.md
│       ├── validators.md
│       ├── tokens.md
│       ├── testnet.md
│       ├── mainnet.md
│       ├── governance.md
│       ├── wallets.md
│       ├── roadmap.md
│       ├── resources.md
│       └── faq.md
│
├── site/docs/              # ✅ ACTIVE — generated docs output (served at /docs/)
│
└── docs/site/              # ⚠️ LEGACY — old build artifact, not served, safe to delete
```

**Two sites, one repo:**
- `graphchain.org/` → root HTML pages + css/js/img/assets
- `graphchain.org/docs/` → MkDocs-generated output in `site/docs/`

---

## Setup

```bash
pip install -r requirements.txt
```

---

## Developing the Docs

Edit the Markdown files in `docs/docs/`. Then rebuild:

```bash
cd docs
python -m mkdocs build
```

Output goes to `site/docs/` (configured via `site_dir: ../site/docs` in `docs/mkdocs.yml`).

To preview locally with live reload:

```bash
cd docs
python -m mkdocs serve
# Open http://127.0.0.1:8000
```

---

## Deploying

Both the main site and docs are deployed via GitHub Pages from the `main` branch root.

1. Build the docs:
   ```bash
   cd docs
   python -m mkdocs build
   ```
2. Commit and push to `main`. GitHub Pages will serve everything from the repo root.

---

## Cleanup Note

`docs/site/` is a legacy build artifact from an earlier `site_dir` configuration. It is **not** served by GitHub Pages and can be safely deleted:

```bash
rm -rf docs/site
```

The active docs output is `site/docs/` only.

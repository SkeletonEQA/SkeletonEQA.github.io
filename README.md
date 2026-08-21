# Skeleton-Based Exercise Quality Assessment Under Domain Shift — Project Page

Static academic project page for:

> **Skeleton-Based Exercise Quality Assessment Under Domain Shift: A Benchmark Study of Cross-Domain Failure Modes**
> Monica Vahdati, Kamran Gholizadeh HamlAbadi, Ali Etemad, Abdulmotaleb El Saddik
> MCHM '26 — The 3rd International Workshop on Multimedia Computing for Health and Medicine, co-located with ACM Multimedia 2026, Rio de Janeiro, Brazil
> DOI: [10.1145/3840471.3842592](https://doi.org/10.1145/3840471.3842592)

Design pattern (centered layout, figure-first presentation, compact resource buttons, author/affiliation styling) is adapted from the [Perceptually Accurate 3D Talking Head Generation](https://perceptual-3d-talking-head.github.io/) project page, itself built on the [Nerfies](https://github.com/nerfies/nerfies.github.io) academic template. No content, text, or imagery from that project is reused — only the structural/visual conventions.

## Structure

```text
index.html
static/
├── css/
│   └── index.css        # design tokens + layout
├── js/
│   └── index.js         # resource-link config + BibTeX copy button
└── images/
    ├── pipeline.png          # Figure 1, extracted directly from the paper PDF
    ├── collapse.png          # FC / PC / OK breakdown (141 / 13 / 44 of 198)
    ├── model_collapse_rate.png   # collapse rate per model (Table 4)
    └── model_results.png         # mean OOD macro-F1 per model (Table 7)
README.md
```

No build step, no backend — this is a plain static site suitable for GitHub Pages.

## Editing the resource links

Open `static/js/index.js` and update the four constants at the top:

```js
const PAPER_URL = "ACM_PAPER_URL";     // → link to the ACM digital library page
const ARXIV_URL = "ARXIV_URL";         // → arXiv preprint, once posted
const CODE_URL  = "GITHUB_CODE_URL";   // → GitHub repository
const MODEL_URL = "HUGGINGFACE_URL";   // → Hugging Face model / checkpoints
```

The DOI badge under the buttons is wired to `10.1145/3840471.3842592` already and does not need editing unless the DOI changes.

## Deploying to GitHub Pages

1. Push this folder to a repository, e.g. `<org>/<org>.github.io` for a user/org page, or any repo with Pages enabled for a project page.
2. In the repo settings, enable **GitHub Pages** and point it at the branch/folder containing `index.html` (root, or `/docs` if you move it there).
3. The site will be live at `https://<organization>.github.io/` (or `https://<organization>.github.io/<repo>/` for a project page — in that case, image and asset paths in `index.html` are already relative, so no changes are needed).

## Regenerating the result charts

The three chart images are produced from a small matplotlib script (not included here, since it's a one-off build artifact) using the exact per-model numbers reported in the paper's Table 4 (collapse rate) and Table 7 (mean OOD macro-F1). If the numbers change in a future revision, regenerate the charts and drop the new PNGs into `static/images/` with the same filenames — no HTML/CSS changes needed.

## License

Content © the authors. Website code is provided under the same Creative Commons Attribution-ShareAlike 4.0 terms as the Nerfies template it is structurally based on, unless you choose otherwise.

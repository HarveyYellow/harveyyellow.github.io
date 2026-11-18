# Jingyuan Huang's academic homepage

Published at https://harveyyellow.github.io/ using GitHub Pages from the `main` branch.

The homepage uses the static HTML version of [Minimal Light](https://github.com/yaoyao-liu/minimal-light), adapted with an orange palette, responsive sidebar, and the author's research and publications. No build step is required.

## Editing

- `index.html`: profile, research interests, four featured papers, and eight additional publications.
- `assets/css/orange.css`: site-specific layout and color overrides. Change `--accent` and related variables at the top to adjust the palette.
- `assets/css/minimal-light.css` and `assets/css/publications.css`: upstream Minimal Light styles.
- `hjy.jpg` and `cv.pdf`: portrait and CV.
- `assets/js/avatar.js` and `assets/img/avatar-alt.jpg`: click-to-toggle alternate avatar, with an opacity crossfade defined in `orange.css`.
- `assets/img/`: favicon and publication figures.

Preview locally with `python3 -m http.server 8765 --bind 127.0.0.1`.

## Credits and sources

Minimal Light by Yaoyao Liu, source commit `dd114c3fef2d97adc1c6b6d46901e0d96ab83a7c`. The upstream theme is dedicated under CC0 1.0; its license is preserved in `licenses/minimal-light-CC0.txt`. That dedication applies to the theme, not the personal content, portrait, CV, or research figures.

Publication metadata was initially checked on November 1, 2026 against [Google Scholar](https://scholar.google.com/citations?user=MfoZS_AAAAAJ&hl=en), arXiv, and ACL Anthology. Recursive Synthesis for Long-Horizon Terminal Tasks (RST) was added on November 18, 2026 using the title, full author list, and revision dates from [arXiv v4](https://arxiv.org/abs/2608.05466v4). RST is a separate paper from Self-Supervised Scaling of Terminal Environments for Scientific Domains (arXiv:2610.02710), which remains in More Publications. The four featured figures are from the linked papers, with author credits shown alongside each figure:

- `train4merge.svg`: Figure 1, [Train4Merge, arXiv v3](https://arxiv.org/html/2609.32303v3), [original figure](https://arxiv.org/html/2609.32303v3/train4merge_teaser_dualpanel_bottom_labels.svg).
- `gui-grounding.svg`: Figure 1, [Trust the Right Teacher, arXiv v3](https://arxiv.org/html/2606.18101v3), [original figure](https://arxiv.org/html/2606.18101v3/method_overview.svg). The paper is licensed CC BY 4.0.
- `rst-overview.png`: Figure 2, [Recursive Synthesis for Long-Horizon Terminal Tasks, arXiv v4](https://arxiv.org/html/2608.05466v4), [original figure](https://arxiv.org/html/2608.05466v4/loop_figure_v5.png). Original PNG preserved without modification; the overview shows recursive task synthesis, validation, reseeding, and downstream RL/SFT training. Rights remain with the paper's authors; the theme's CC0 license does not apply to this figure.
- `fairlocator.jpg`: Figure 1, [AI Sees Your Location, arXiv v3](https://arxiv.org/html/2502.11163v3), [original figure](https://arxiv.org/html/2502.11163v3/cover.png). Resized and JPEG-compressed for the homepage; figure content is unchanged.

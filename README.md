# LeftPhoneAlert website

Product, support and privacy website for LeftPhoneAlert by Navarro Studios.

## Preview

Open `dist/index.html` in a browser. All images, styles and scripts are included.
For a local server, run `python3 -m http.server 8765 --directory dist` and open
http://localhost:8765/.

## Pages

- `dist/index.html` — product website
- `dist/support.html` — support and contact information
- `dist/privacy.html` — privacy policy

The original phone and Watch screenshots are preserved. The assets include both
the original Navarro Studios logo and the refined book/N logo.

## Cloudflare Pages

Connect this repository to Cloudflare Pages when ready to publish.
Use no framework, no build command, and `dist` as the output directory.
The publisher approved the privacy policy and support-message handling on 10 October 2026.
The app is available on the App Store: https://apps.apple.com/app/id6783860401.
US price verified on 13 October 2026: $4.99, one-time purchase.

## Promotional film

The homepage embeds the publisher-selected `LeftPhoneAlert.mp4` export as a
35-second film with native playback controls, inline mobile playback and no
autoplay. `preload="none"` avoids loading the movie before the visitor plays it.
The web copy in `dist/assets/video/leftphonealert-trailer.mp4` retains the
1080×1920 dimensions, full duration and audio, compressed to about 17.5 MB for
Cloudflare Pages' per-file limit. The original in Google Drive is unchanged.

## Contact

leftphonealert.support@gmail.com

This repository contains website files only; the iPhone and Watch app source is
maintained separately. Live website: https://leftphonealert-website.pages.dev

Cloudflare Pages deploys `codex/website-initial` automatically with no build
command and `dist` as the output directory.

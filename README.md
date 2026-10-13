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
The active web copy in `dist/assets/video/leftphonealert-trailer-web.mp4` uses
720×1280 dimensions and is about 5.8 MB for faster loading. It retains the full
duration and audio. The earlier 1080×1920 web copy and the original in Google
Drive are preserved. A prominent Play/Pause/Replay button starts playback from
a visitor's click and resets the movie after it ends. A direct video link is
available if embedded playback is unavailable.

## Contact

leftphonealert.support@gmail.com

This repository contains website files only; the iPhone and Watch app source is
maintained separately. Live website: https://leftphonealert-website.pages.dev

Cloudflare Pages deploys `codex/website-initial` automatically with no build
command and `dist` as the output directory.

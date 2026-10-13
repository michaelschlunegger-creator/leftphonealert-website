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

## Search and sharing

The App Store QR code appears in the hero, below the video player, and in the
final download section. Each code also links directly to the App Store listing.
The original verified QR asset is reused unchanged, with its white quiet zone
preserved. Display sizes are 135px and 180px (whole multiples of the 45-module
symbol including its border). Native barcode decoding checks passed at both
display sizes. Direct App Store buttons remain available for phone visitors.

All three public pages have unique titles/descriptions, canonical URLs, social
sharing metadata and a 1200×630 sharing image. The homepage includes JSON-LD
for the website, app, publisher and promotional film. No ratings or reviews
are invented. `robots.txt` advertises `sitemap.xml`, which lists the homepage,
support and privacy pages at their Cloudflare canonical URLs. `404.html`
prevents nonexistent URLs from falling back to an indexable homepage.

Displayed screenshots and the studio logo use lossless WebP copies under
`dist/assets/web`; originals remain unchanged. The image payload decreases
from 9,270,194 to 2,467,878 bytes (73%). The video remains click-to-play.

Next external step: verify this URL-prefix property in Google Search Console
and submit `https://leftphonealert-website.pages.dev/sitemap.xml`. Verification
and submission have not been completed. Indexing and rankings take time and
are not guaranteed. If adding a custom domain later, update canonical URLs,
sitemap and JSON-LD together and redirect the old domain to the new one.

This repository contains website files only; the iPhone and Watch app source is
maintained separately. Live website: https://leftphonealert-website.pages.dev

Cloudflare Pages deploys `codex/website-initial` automatically with no build
command and `dist` as the output directory.

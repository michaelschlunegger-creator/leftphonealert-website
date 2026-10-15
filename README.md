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

## Setup and secure pairing guide — 14 October 2026

The existing Support page now covers installation on iPhone and Watch, automatic
reconnection, More → Open Setup Wizard, permissions, Protection → Watch & Pairing
→ Pair Apple Watch, and the alternative Watch Manage Guard → Phone Pairing route.
Code confirmation belongs on the iPhone; pairing completion is kept separate from
active Guard/Protected status. Recovery advice avoids unnecessary revocation or
unpairing the Apple Watch. Existing alert timing/privacy/diagnostics FAQs remain.

Button labels and flows were checked against the preserved App Store 1.0(72)
source, whose 285 archive inputs match `iphone-only72/input-sha256.json`. The app
source is backed up separately at PhoneGuard2 commit
`f5ace9a4b151f209f14670af0ca7edfa03480b31`. Xcode27.0 simulator Release builds
used version/build overrides1.0/72 without production edits. Genuine entry/setup
screens were captured; verification-code and completed physical Bluetooth pairing
are described from unchanged production UI/source, not represented by fabricated
success screenshots. Simulator is not alarm/background/Bluetooth proof.

Four screenshots under `dist/assets/support/` are resized/lossless WebP copies of
original simulator captures. Each opens at larger size on click. The page identifies
simulator/status limitations. Its stylesheet is isolated from product/privacy pages.
Local checks cover asset/link/anchor references, structured metadata, desktop and
390px mobile layout, screenshot loading and manual-pairing navigation.

Support and Privacy have an explicit Home link. Their navigation remains visible
while scrolling, and Support section links leave room below that header.

## Digital app card and one-tap sharing — 15 October 2026

`/share` is a mobile sharing page with a native Share action for a short app
introduction and the homepage URL. Where file sharing is available, a second
action shares the app card as a JPG. The file is fetched before the tap so the
share action retains iPhone user activation. Cancelling does not show an error.
Browsers without native sharing offer copy-to-clipboard; direct image/download
links and a visible website address remain available without JavaScript. No
messages are sent automatically, no contacts are read and no tracking was added.

The page includes a Safari Add to Home Screen explanation, dedicated shortcut
icons and `share.webmanifest`. The shortcut opens `/share`; no service worker or
offline guarantee is included. Saving the image to Photos/Favourites is the
alternative for showing the card or sharing through WhatsApp/Messages/AirDrop.

The 1080×1350 card uses the existing icon, genuine phone and Watch screenshots,
and the unchanged App Store QR asset. Editable layout: `design/share-card.html`.
Exports: `dist/assets/share/leftphonealert-digital-card.jpg` and `.png`. Browser
capture is re-encoded to actual PNG/JPEG, with formats/dimensions verified.
Native Vision QR decoding checks passed for both exports and 390px/540px-wide
JPEG copies at quality80. Each decoded `https://apps.apple.com/app/id6783860401`.
`design/check-share-qr.swift` is the artifact check.

The public page is linked from the homepage footer and listed in the sitemap.
Checks cover script syntax, asset/link/manifest references, complete image loads,
native-share/file-share control availability, 390px layout without overflow and
desktop layout. No physical iPhone sharing or recipient delivery is claimed.

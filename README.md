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

The homepage embeds the publisher-approved **Clip 1 — V2**, approved on
30 October 2026: the café film with the “Find My ALERT / 4 MINUTES. / FAR TOO LATE.”
opening overlay and the LeftPhoneAlert icon and download prompt below the footage.
The approved original is preserved in Google Drive:
https://drive.google.com/file/d/173sEfnrdkwErVs1XPBKE9LMe71d9iMF7/view

The active website asset is `dist/assets/video/leftphonealert-clip-1-v2.mp4`:
12.4 seconds, 720×1280, 30 fps, with the approved visuals and audio. This web copy
is about 2.4 MB and is optimized for progressive playback. Its matching first-frame
poster is `leftphonealert-clip-1-v2-poster.jpg`. The video metadata, embedded player
and direct video link all reference this version. Previous video assets and the
original Drive movie are preserved.

Native controls, inline mobile playback, click-to-play behavior and
`preload="none"` are retained. The Play/Pause/Replay button starts playback from a
visitor's click, and the direct video link remains available as a fallback.

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

Google Search Console ownership for the URL-prefix property uses
`dist/googleb8c2ad38ef279feb.html`, downloaded from Google for the
`leftphonealert.support@gmail.com` account. Keep this file published to retain
verification. The sitemap is `https://leftphonealert-website.pages.dev/sitemap.xml`.
Current verification, submission and indexing results are recorded in the
project's Google Drive folder under `06_Free_Promotion/SEO`. Indexing and rankings
take time and are not guaranteed. If adding a custom domain later, update canonical URLs,
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

The sharing introduction includes the direct App Store URL
`https://apps.apple.com/app/id6783860401`, the YouTube trailer
`https://www.youtube.com/shorts/2Ys0Il14no8`, and the website. This applies
to native link sharing, the image-card caption and copy-to-clipboard fallback.
The flyer image and QR artwork are unchanged by this copy update.

## Clip 1 V2 and Find My positioning — 30 October 2026

The homepage now leads with “Find My ALERT. 4 minutes. Far too late.”, the two
original app icons and a direct App Store action. A compact context line identifies
the four-minute figure as the publisher-reported test result; the new FAQ answers
why someone with Find My would use LeftPhoneAlert and retains the existing total
alert-timing limits. The video section repeats the first-seconds message.

The approved 1080×1920 original is also preserved as
`dist/assets/video/leftphonealert-clip-1-v2-1080.mp4` for the authorized Metricool
publication. It matches the approved Drive file bytes. The embedded 720×1280
web copy is approximately 2.4 MB; the player remains click-to-play.

## V2 marketing pack and paired-Watch qualification — 30 October 2026

A prominent “Requires iPhone + paired Apple Watch” label appears before the main
download action. The current film adds that requirement on its opening and end
card; its new `leftphonealert-clip-1-v2-watch-required` files preserve all prior
video assets. The sharing page uses the new V2 flyer/card and introduction.
The website’s video section replaces the older YouTube link in sharing copy until
the new Short is public. Social previews now use the V2 campaign graphic.
All prior card and video files remain in the repository and on their original URLs.


## Coffee Shop and Taxi use cases — 6 November 2026

The homepage now shows both use cases, with separate accessible players and direct video links.
The existing Coffee Shop video is retained without changing its file or URL. The Taxi player uses
the exact user-supplied `1106.mp4`, copied as `dist/assets/video/leftphonealert-taxi-2026-11-06.mp4`
(SHA-256 `2587674fee4cd2ac73b15d808756a6cf03f2a9bf0cd678959fb7df4a903e0a5b`).
Its poster is extracted from that video. Both players load only when requested; starting either
player pauses the other. Native controls and direct links remain available without JavaScript.
Both use cases have VideoObject metadata, and the layout stacks on mobile.

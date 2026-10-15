(() => {
  const homeURL = 'https://leftphonealert-website.pages.dev/';
  const text = 'LeftPhoneAlert: quick Apple Watch alerts, movement-aware protection and personal Safe Zones to help keep your iPhone close. For iPhone + Apple Watch. One-time purchase. No subscription.';
  const imageURL = new URL('assets/share/leftphonealert-digital-card.jpg', document.currentScript.src);
  const linkButton = document.getElementById('share-link');
  const imageButton = document.getElementById('share-image');
  const status = document.getElementById('share-status');
  let imageFile;
  const say = (message) => { status.textContent = message; };
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(text + '\n' + homeURL);
      say('App introduction and website copied. Paste into WhatsApp, Messages or an email.');
    } catch (_) {
      say('Copy the website address below, or open the card to save and share it.');
    }
  };
  if (navigator.share || navigator.clipboard?.writeText) {
    linkButton.hidden = false;
    if (!navigator.share) linkButton.querySelector('span').textContent = 'Copy app introduction & link';
  }
  linkButton.addEventListener('click', () => {
    say('');
    if (!navigator.share) { void copyLink(); return; }
    navigator.share({ title: 'LeftPhoneAlert', text, url: homeURL }).catch((error) => {
      if (error.name !== 'AbortError') say('Sharing is unavailable here. Open this page in Safari, or copy the website address below.');
    });
  });
  if (navigator.share && navigator.canShare && typeof File === 'function') {
    fetch(imageURL).then((response) => {
      if (!response.ok) throw new Error('Card unavailable');
      return response.blob();
    }).then((blob) => {
      imageFile = new File([blob], 'LeftPhoneAlert.jpg', { type: 'image/jpeg' });
      if (navigator.canShare({ files: [imageFile] })) imageButton.hidden = false;
    }).catch(() => { /* The direct image link remains available. */ });
  }
  imageButton.addEventListener('click', () => {
    if (!imageFile) return;
    say('');
    const data = { files: [imageFile], title: 'LeftPhoneAlert', text: text + '\n' + homeURL };
    // Keep the native share call within the tap. The file is prepared before the tap.
    navigator.share(navigator.canShare(data) ? data : { files: [imageFile] }).catch((error) => {
      if (error.name !== 'AbortError') say('Open the image below, save it to Photos, then share it from there.');
    });
  });
})();

const screens = {
  protected: {file:'01-watch-protected.png', alt:'Watch dashboard: Protected, phone link verified', caption:'Protected dashboard — the actual Watch interface.'},
  alert: {file:'02-watch-alarm.png', alt:'Actual Phone Lost notification on Apple Watch, with Snooze and Mark Safe actions', caption:'Phone Lost alert — an actual notification example.'},
  map: {file:'03-watch-map.png', alt:'Actual Apple Watch map displaying two saved Safe Zones', caption:'Safe Zone map — your saved places on the Watch.'}
};
document.querySelectorAll('[data-screen]').forEach(button => {
  button.addEventListener('click', () => {
    const screen = screens[button.dataset.screen];
    if (!screen) return;
    const image = document.querySelector('#watch-image');
    image.src = 'assets/' + screen.file;
    image.alt = screen.alt;
    document.querySelector('#watch-caption').textContent = screen.caption;
    document.querySelectorAll('[data-screen]').forEach(option => {
      const selected = option === button;
      option.classList.toggle('selected', selected);
      option.setAttribute('aria-pressed', String(selected));
    });
  });
});

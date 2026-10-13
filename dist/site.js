const screens = {
  protected: {file:'01-watch-protected.webp', alt:'Watch dashboard: Protected, phone link verified', caption:'Protected dashboard — the actual Watch interface.'},
  alert: {file:'02-watch-alarm.webp', alt:'Actual Phone Lost notification on Apple Watch, with Snooze and Mark Safe actions', caption:'Phone Lost alert — an actual notification example.'},
  map: {file:'03-watch-map.webp', alt:'Actual Apple Watch map displaying two saved Safe Zones', caption:'Safe Zone map — your saved places on the Watch.'}
};
document.querySelectorAll('[data-screen]').forEach(button => {
  button.addEventListener('click', () => {
    const screen = screens[button.dataset.screen];
    if (!screen) return;
    const image = document.querySelector('#watch-image');
    image.src = 'assets/web/' + screen.file;
    image.alt = screen.alt;
    document.querySelector('#watch-caption').textContent = screen.caption;
    document.querySelectorAll('[data-screen]').forEach(option => {
      const selected = option === button;
      option.classList.toggle('selected', selected);
      option.setAttribute('aria-pressed', String(selected));
    });
  });
});

const trailer = document.querySelector('#trailer-video');
const trailerPlay = document.querySelector('#trailer-play');
const trailerStatus = document.querySelector('#trailer-status');
if (trailer && trailerPlay && trailerStatus) {
  trailerPlay.hidden = false;
  trailerPlay.addEventListener('click', () => {
    if (!trailer.paused && !trailer.ended) {
      trailer.pause();
      return;
    }
    if (trailer.ended) trailer.currentTime = 0;
    trailerStatus.textContent = 'Loading demo…';
    trailer.play().catch(() => {
      trailerStatus.textContent = 'Unable to start here. Try “Open video directly” below.';
    });
  });
  trailer.addEventListener('playing', () => {
    trailerPlay.textContent = '❚❚ Pause demo';
    trailerStatus.textContent = '';
  });
  trailer.addEventListener('pause', () => {
    trailerPlay.textContent = trailer.ended ? '↻ Replay demo' : '▶ Continue demo';
    trailerStatus.textContent = '';
  });
  trailer.addEventListener('ended', () => {
    trailerPlay.textContent = '↻ Replay demo';
    trailerStatus.textContent = '';
  });
  trailer.addEventListener('waiting', () => {
    trailerStatus.textContent = 'Loading demo…';
  });
  trailer.addEventListener('error', () => {
    trailerStatus.textContent = 'Unable to load here. Try “Open video directly” below.';
  });
}

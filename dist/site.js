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
    trailerStatus.textContent = 'Loading film…';
    trailer.play().catch(() => {
      trailerStatus.textContent = 'Unable to start here. Try “Open video directly” below.';
    });
  });
  trailer.addEventListener('playing', () => {
    trailerPlay.textContent = '❚❚ Pause film';
    trailerStatus.textContent = '';
  });
  trailer.addEventListener('pause', () => {
    trailerPlay.textContent = trailer.ended ? '↻ Replay short film' : '▶ Continue film';
    trailerStatus.textContent = '';
  });
  trailer.addEventListener('ended', () => {
    trailerPlay.textContent = '↻ Replay short film';
    trailerStatus.textContent = '';
  });
  trailer.addEventListener('waiting', () => {
    trailerStatus.textContent = 'Loading film…';
  });
  trailer.addEventListener('error', () => {
    trailerStatus.textContent = 'Unable to load here. Try “Open video directly” below.';
  });
}

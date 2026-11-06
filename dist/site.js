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

document.querySelectorAll('[data-video-demo]').forEach(demo => {
  const video = demo.querySelector('video');
  const playButton = demo.querySelector('[data-video-play]');
  const status = demo.querySelector('[data-video-status]');
  if (!video || !playButton || !status) return;
  const title = demo.querySelector('h3').textContent;
  playButton.hidden = false;
  playButton.addEventListener('click', () => {
    if (!video.paused && !video.ended) {
      video.pause();
      return;
    }
    if (video.ended) video.currentTime = 0;
    status.textContent = 'Loading video…';
    video.play().catch(() => {
      status.textContent = 'Unable to start here. Try the direct video link below.';
    });
  });
  video.addEventListener('play', () => {
    if (video.paused) return;
    document.querySelectorAll('[data-video-demo] video').forEach(other => {
      if (other !== video) other.pause();
    });
  });
  video.addEventListener('playing', () => {
    if (video.paused) return;
    playButton.textContent = '❚❚ Pause ' + title;
    status.textContent = '';
  });
  video.addEventListener('pause', () => {
    playButton.textContent = (video.ended ? '↻ Replay ' : '▶ Continue ') + title;
    status.textContent = '';
  });
  video.addEventListener('ended', () => {
    playButton.textContent = '↻ Replay ' + title;
    status.textContent = '';
  });
  video.addEventListener('waiting', () => {
    status.textContent = 'Loading video…';
  });
  video.addEventListener('error', () => {
    status.textContent = 'Unable to load here. Try the direct video link below.';
  });
});

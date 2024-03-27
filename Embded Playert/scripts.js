const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause-button');
const volumeSlider = document.getElementById('volume-slider');

// Play/pause functionality
playPauseButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.textContent = 'Pause';
  } else {
    audioPlayer.pause();
    playPauseButton.textContent = 'Play';
  }
});

// Volume control
volumeSlider.addEventListener('input', () => {
  audioPlayer.volume = volumeSlider.value / 100;
});

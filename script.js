const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
const video = document.getElementById('myVideo');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');

// Add click event listeners to the play and pause buttons
playButton.addEventListener('click', () => {
  video.play();
});

pauseButton.addEventListener('click', () => {
  video.pause();
});
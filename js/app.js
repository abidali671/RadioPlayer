var radio = document.getElementById("radio");

var playBtn = document.getElementById("play-btn");
var pauseBtn = document.getElementById("pause-btn");

// Vollume Control Function
var volumeControl = document.getElementById("volume-bar");
volumeControl.addEventListener("mousemove", function () {
  radio.volume = volumeControl.value / 100;
});

//

var playPromise = radio.play();

if (playPromise !== undefined) {
  playPromise
    .then((_) => {
      // Automatic playback started!
      // Show playing UI.
      // We can now safely pause video...
      pauseBtn.addEventListener("click", function () {
        radio.pause();
        pauseBtn.style.display = "none";
        playBtn.style.display = "block";
      });
      playBtn.addEventListener("click", function () {
        radio.play();
        playBtn.style.display = "none";
        pauseBtn.style.display = "block";
      });
      radio.pause();
    })
    .catch((error) => {
      // Auto-play was prevented
      // Show paused UI.
    });
}

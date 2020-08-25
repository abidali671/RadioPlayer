var radio = document.getElementById("radio");

var playBtn = document.getElementById("play-btn");
var pauseBtn = document.getElementById("pause-btn");

playBtn.addEventListener("click", function () {
  radio.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
});

pauseBtn.addEventListener("click", function () {
  radio.pause();
  pauseBtn.style.display = "none";
  playBtn.style.display = "block";
});

// Vollume Control Function
var volumeControl = document.getElementById("volume-bar");
volumeControl.addEventListener("mousemove", function () {
  radio.volume = volumeControl.value / 100;
});

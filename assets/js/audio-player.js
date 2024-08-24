import { audioPeaks } from "./audiopeaks.js";

let isPlaying = false;
let wavesurfer;

function initWaveSurfer() {
  if (!wavesurfer) {
    const playButton = document.getElementById("play-button");
    const pauseButton = document.getElementById("pause-button");
    wavesurfer = window.WaveSurfer.create({
      container: "#waveform",
      height: 80,
      waveColor: "#926b8d",
      progressColor: "#FFD700",
      // Set a bar width
      barWidth: 2,
      // Optionally, specify the spacing between bars
      barGap: 1,
      // And the bar radius
      barRadius: 2,
      // TODO update audio, peaks and duration
      url: "/assets/audio/no-dither.mp3",
      peaks: audioPeaks,
      duration: 1408.626939,
    });
    wavesurfer.on("click", () => {
      wavesurfer.play();
    });
    wavesurfer.on("play", () => {
      isPlaying = true;
      playButton.style.display = "none";
      pauseButton.style.display = "block";
    });
    wavesurfer.on("pause", () => {
      isPlaying = false;
      playButton.style.display = "block";
      pauseButton.style.display = "none";
    });
    playButton.addEventListener("click", () => {
      wavesurfer.play();
    });
    pauseButton.addEventListener("click", () => {
      wavesurfer.pause();
    });
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }
}

function showWaveformContainer() {
  document.getElementById("waveform-container").style.display = "block";
  initWaveSurfer();
}

function startPlayback() {
  showWaveformContainer();
  initWaveSurfer();
  setTimeout(() => {
    wavesurfer.play();
  }, 200);
}

export { isPlaying, startPlayback, showWaveformContainer };

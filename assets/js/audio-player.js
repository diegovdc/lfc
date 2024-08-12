function isAudioPlaying(audioElement) {
  return (
    !audioElement.paused && audioElement.currentTime > 0 && !audioElement.ended
  );
}

function startPlayback() {
  const audioElement = document.getElementById("audio-player");
  console.log("🚀 ~ startPlayback ~ audioElement:", audioElement);

  if (!isAudioPlaying(audioElement)) {
    audioElement.play();
  }
  audioElement.play();
}

export { startPlayback };

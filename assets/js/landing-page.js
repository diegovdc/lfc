let hydra;

export function init() {
  hydra = new window.Hydra({
    canvas: document.getElementById("hydra-canvas"),
    detectAudio: false,
  });
  s0.initImage("/assets/images/la-fabrica-colapsada.jpg");
  src(s0)
    .modulate(src(o0).scale(1.2), 0.05)
    // .blend(o0)
    .modulate(voronoi(4, 0.1), 0.2)
    .contrast()
    .blend(s0, 0.7)
    .out();
}

export function stop() {
  if (hydra) {
    hydra.canvas.remove();
    hydra = null;
  }
}

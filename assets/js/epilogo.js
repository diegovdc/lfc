let hydra;

export function init() {
  hydra = new window.Hydra({ detectAudio: false });
  noise(4, 0.1, 1.2)
    .modulate(src(o0))
    .add(
      shape(66).color(1, 0, [0, 1].smooth()).repeat(10, 10).modulate(noise())
    )
    .add(
      shape(66).color(1, [1, 1, 0].smooth(), 0).repeat(9, 9).modulate(noise())
    )
    .kaleid(5)
    .modulate(src(o0), 0.05)
    .modulate(voronoi())
    .out();
  console.log("🚀 ~ init ~ hydra:", hydra);
}

export function stop() {
  if (hydra) {
    hydra.canvas.remove();
    hydra = null;
  }
}

// taken from https://hyper-hydra.glitch.me/hydra-src.js by Geikha
function srcMask(tex) {
  return src(tex).mask(shape(4, 1, 0));
}

export function srcRelMask(canvas, tex) {
  if (!tex.hasOwnProperty("src")) return src(tex);
  const w = () =>
    tex.src?.width
      ? tex.src?.width / tex.src?.height
      : tex.src?.videoWidth
      ? tex.src?.videoWidth / tex.src?.videoHeight
      : 0;
  const h = () =>
    tex.src?.height
      ? tex.src?.height / tex.src?.width
      : tex.src?.videoHeight
      ? tex.src?.videoHeight / tex.src?.videoWidth
      : 0;
  const cw = () => canvas.clientWidth / canvas.clientHeight;
  const ch = () => canvas.clientHeight / canvas.clientWidth;
  return srcMask(tex).scale(
    1,
    () => {
      const _cw = cw();
      const _w = w();
      return _cw > _w ? _w / _cw : 1;
    },
    () => {
      const _ch = ch();
      const _h = h();
      return _ch > _h ? _h / _ch : 1;
    }
  );
}

export function srcRel(canvas, tex) {
  if (!tex.hasOwnProperty("src")) return src(tex);
  const w = () =>
    tex.src?.width
      ? tex.src?.width / tex.src?.height
      : tex.src?.videoWidth
      ? tex.src?.videoWidth / tex.src?.videoHeight
      : 0;
  const h = () =>
    tex.src?.height
      ? tex.src?.height / tex.src?.width
      : tex.src?.videoHeight
      ? tex.src?.videoHeight / tex.src?.videoWidth
      : 0;
  const cw = () => canvas.clientWidth / canvas.clientHeight;
  const ch = () => canvas.clientHeight / canvas.clientWidth;
  return src(tex).scale(
    1,
    () => {
      const _cw = cw();
      const _w = w();
      return _cw > _w ? _w / _cw : 1;
    },
    () => {
      const _ch = ch();
      const _h = h();
      return _ch > _h ? _h / _ch : 1;
    }
  );
}

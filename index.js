let frame

let x
let px
let y
let py
let vh
let pvh
let vw
let pvw

const fns = []

function raf (t) {
  x = window.pageXOffset
  y = window.pageYOffset
  vh = window.innerHeight
  vw = window.innerWidth

  if (
    y !== py ||
    x !== px ||
    vh !== pvh ||
    vw !== pvw
  ) {
    run(t)

    px = x
    py = y
    pvh = vh
    pvw = vw
  }
  return requestAnimationFrame(raf)
}

function run (t) {
  for (let i = 0; i < fns.length; i++) {
    fns[i]({ x, y, px, py, vh, pvh, vw, pvw }, t)
  }
}

export default function srraf (fn) {
  fns.indexOf(fn) < 0 && fns.push(fn)
  frame = frame || raf(performance.now())
  return () => fns.splice(fns.indexOf(fn), 1)
}

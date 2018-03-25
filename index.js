let scroll = null
let resize = null

let { x: prevX, y: prevY } = pos()

const fns = []

function pos () {
  if (typeof window === 'undefined') return {}
  return {
    x: window.innerWidth,
    y: window.pageYOffset
  }
}

function handler (e) {
  requestAnimationFrame(() => {
    const { x, y } = pos()
    for (let i = 0; i < fns.length; i++) {
      fns[i]({ y, prevY, x, prevX }, e)
    }
    prevY = y
    prevX = x
  })
}

export default function srraf (fn) {
  if (!scroll) window.addEventListener('scroll', handler)
  if (!resize) window.addEventListener('resize', handler)

  if (fns.indexOf(fn) < 0) fns.push(fn)

  return {
    destroy () {
      fns.splice(fns.indexOf(fn), 1)
    },
    update () {
      const { x, y } = pos()
      fn({ y, prevY, x, prevX }, null)
      prevY = y
      prevX = x
      return this
    }
  }
}

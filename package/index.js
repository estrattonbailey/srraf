let scrollInstance = null
let resizeInstance = null

class Listener {
  constructor(type){
    this.type = type
    this.pool = 0
    this.queue = []
    this.curr = this.position()
    this.prev = this.position()
    this.ticking = false

    window.addEventListener(type, this.requestFrame.bind(this))
  }

  position () {
    return this.type === 'scroll' ? (
      window.scrollY || window.pageYOffset
    ) : (
      window.innerWidth
    )
  }

  requestFrame (e) {
    this.e = e
    this.curr = this.position()

    if (!this.ticking) {
      window.requestAnimationFrame(this.run.bind(this))
      this.ticking = true
    }
  }

  run () {
    this.queue.forEach(q => q[1]({ curr: this.curr, prev: this.prev }, this.e))
    this.prev = this.curr
    this.ticking = false
  }

  use (cb) {
    const self = this

    let index = self.pool++

    self.queue.push([index, cb])

    return {
      destroy () {
        self.queue.forEach((q, i) => {
          if (q[0] === index) {
            self.queue.splice(i, 1)
          }
        })
        return this
      },
      update () {
        cb({ curr: self.curr, prev: self.prev }, self.e)
        return this
      }
    }
  }

  update () {
    this.run()
  }
}

export default typeof window !== 'undefined' ? ({
  get scroll(){
    if (!scrollInstance) scrollInstance = new Listener('scroll')
    return scrollInstance
  },
  get resize(){
    if (!resizeInstance) resizeInstance = new Listener('resize')
    return resizeInstance
  },
  use(cb) {
    const { curr: currY, prev: prevY } = this.scroll
    const { curr: currX, prev: prevX } = this.resize

    let position = { currY, prevY, currX, prevX }

    const scroller = this.scroll.use(({ curr, prev }, e) => {
      position.currY = curr
      position.prevY = prev

      cb(position, e)
    })

    const resizer = this.resize.use(({ curr, prev }, e) => {
      position.currX = curr
      position.prevX = prev

      cb(position, e)
    })

    return {
      destroy () {
        scroller.destroy()
        resizer.destroy()
        return this
      },
      update () {
        scroller.update()
        resizer.update()
        return this
      }
    }
  }
}) : null

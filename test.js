import test from 'ava'
import srraf from './dist/srraf.js'

global.performance = {
  now () {}
}
global.requestAnimationFrame = () => {}
global.window = {}

test('init', t => {
  t.plan(2)

  // calls update AND returns this
  const scroller = srraf(() => {
    t.pass()
  }).update()

  scroller.update() // fires again
  scroller.destroy() // kill it
  scroller.update() // shouldn't fire
})

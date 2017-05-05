import srraf from '../package/index.js'

window.srraf = {
  // one: srraf.scroll.use(({ curr, prev }) => console.log('one')),
  // two: srraf.scroll.use(({ curr, prev }) => console.log('two')),
  // three: srraf.scroll.use(({ curr, prev }) => console.log('three')),
}

window.test = Object.create(srraf.scroll.use(({ curr, prev }) => console.log('test')))

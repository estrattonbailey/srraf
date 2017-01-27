import srraf from '../package/index.js'

// srraf.use((position, e) => console.log(position, e))
// srraf.scroll.use(({ curr, prev }) => console.log(curr, prev))
srraf.resize.use(({ curr, prev }, e) => console.log(e))

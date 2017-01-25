import srraf from '../package/index.js'

srraf.use(position => console.log(position))
srraf.scroll.use((curr, prev) => console.log(curr, prev))
srraf.resize.use((curr, prev) => console.log(curr, prev))

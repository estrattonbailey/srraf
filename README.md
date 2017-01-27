# srraf
Better scroll and resize listeners using `requestAnimationFrame`.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

**Features:**

1. Listeners are *lazy*, and only instantiated when you make your first instance
2. Only one `scroll` and one `resize` listener handle all callbacks
3. Simple API
4. *~900 bytes* gzipped

## Install 
```bash
npm i srraf --save
```

## Usage
All callbacks are fired with a position object and the native scroll event.
```javascript
import srraf from 'srraf'

/**
 * Scroll only
 */
const scroller = srraf.scroll.use(({ curr, prev }, event) => { /* handler */ })

/**
 * Resize only
 */
const resizer = srraf.resize.use(({ curr, prev }, event) => { /* handler */ })

/**
 * Both
 */
const listener = srraf.use(({ currY, prevY, currX, prevX }, event) => { /* handler */ })
```

All instances return `update()` and `destroy()` methods.
```javascript
scroller.update() // check position and fire single listener
resizer.update() // check position and fire single listener
listener.update() // check position and fire single listener

scroller.destroy() // remove listener
resizer.destroy() // remove listener
listener.destroy() // remove listener

/**
 * Optionally, you can also update all scroll or resize
 * listeners independently
 */
srraf.scroll.update() // check position and fire all scroll listeners
srraf.resize.update() // check position and fire all resize listeners
```

## Example
To run the example, clone this repo, then:
```bash
# move into example dir
cd srraf/example
# install deps
npm i
# compile JS
npm run js:build # or js:watch
# serve index.html and update with changes
live-server 
```

MIT License

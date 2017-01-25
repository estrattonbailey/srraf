# srraf
Better scroll and resize listeners using `requestAnimationFrame`.

**Features:**

1. Listeners are *lazy*, and only instantiated when you make your first instance
2. Only one `scroll` and one `resize` listener handle all callbacks
3. Simple API
4. *882 bytes* gzipped

## Usage
```javascript
import srraf from 'srraf'

/**
 * Scroll only
 */
const scroller = srraf.scroll.use((currY, prevY) => { /* handler */ })

/**
 * Resize only
 */
const resizer = srraf.resize.use((currX, prevX) => { /* handler */ })

/**
 * Both
 */
const listener = srraf.use(({ currY, prevY, currX, prevX }) => { /* handler */ })
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

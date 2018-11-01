# srraf
Monitor scrolling and resizing without event listeners. **300 bytes gzipped.**

## Install 
```bash
npm i srraf --save
```

# Usage
```javascript
import srraf from 'srraf'

const scroller = srraf(({ x, px, y, py, vh, pvh, vw, pvw }, timestamp) => {
  // ...
})

scroller.update() // check position
scroller.destroy() // destroy listener
```

Note: values prefixed with `p` denote *previous* values.

## License
MIT License © [Eric Bailey](https://estrattonbailey.com)

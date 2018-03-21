# srraf
Simple `scroll` and `resize` listeners. **300 bytes gzipped.**

## Install 
```bash
npm i srraf --save
```

# Usage
```javascript
import srraf from 'srraf'

const scroller = srraf(({ x, prevX, y, prevY }, e) => {
  // ...
})

scroller.update() // fire handler at position

scroller.destroy() // 
```

## License
MIT License © [Eric Bailey](https://estrattonbailey.com)

Image optimization instructions

This project contains public images with spaces in filenames and some large images.

Quick steps to optimize images locally before deployment:

1. Install sharp: `npm i -D sharp` in the `frontend` folder.
2. Run a small Node script to convert and resize images to webp/avif in `public/optimized`.

Example script (create `scripts/optimize-images.js` in the frontend folder):

```js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'public');
const out = path.join(src, 'optimized');
if (!fs.existsSync(out)) fs.mkdirSync(out);

const files = fs.readdirSync(src).filter(f => /\.(jpg|jpeg|png|avif)$/i.test(f));
Promise.all(files.map(async file => {
  const input = path.join(src, file);
  const name = path.parse(file).name.replace(/\s+/g, '_');
  await sharp(input).resize(800).toFile(path.join(out, name + '.webp'));
  await sharp(input).resize(1200).toFile(path.join(out, name + '.avif'));
}))
.then(()=>console.log('done'))
.catch(e=>console.error(e));
```

Then update components to use `/optimized/<name>.webp` or `.avif` with `next/image`.

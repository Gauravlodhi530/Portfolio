Image filename and optimization notes

Please rename files that contain spaces to use underscores (e.g. `profile photo.jpg` -> `profile_photo.jpg`).
This makes paths more reliable on case-sensitive hosts and prevents issues with URLs.

Recommended files to rename in this repo:
- `profile photo.jpg` -> `profile_photo.jpg`
- `javascript .jpg` -> `javascript.jpg`
- `node js.png` -> `node_js.png`

After renaming, generate optimized variants (webp/avif) in `public/optimized` using `sharp` or an image tool.

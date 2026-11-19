# My Portfolio

Personal portfolio of Abbas Meghani, Senior Data Scientist. Live at https://abbasmeghani.com/

## Stack

- Static site: HTML, SCSS and vanilla JS, bundled with [Parcel](https://parceljs.org/)
- No runtime dependencies: icons are inline SVG, scroll reveal uses `IntersectionObserver`
- Light/dark theme (light by default) with a Toronto day/night hero
- Hosted on **Cloudflare Pages** (free plan): every push to `master` builds and deploys
- Security headers live in `src/_headers`, which the build copies into `dist/`
- A Dockerfile + `nginx.conf` are kept for running a production-like copy locally

## Run locally

With Node 20:

```sh
npm install
npm start          # dev server on http://localhost:8080
```

Or exactly as production, with Docker:

```sh
docker build -t my-portfolio .
docker run --rm -p 8080:8080 my-portfolio
```

## Deploy

Push to `master`. Cloudflare Pages runs `npm run build` (Node 20) and publishes `dist/`.

Pages settings: framework preset *None*, build command `npm run build`, output directory `dist`, env var `NODE_VERSION=20`.

DNS and email (me@abbasmeghani.com → Gmail via Email Routing) are managed in the same Cloudflare account.

## Project layout

```
src/
  index.html          page content
  index.js            entry: theme, nav, scroll reveal
  scripts/            small JS modules (theme-init.js runs before paint)
  styles.scss         Sass entry
  styles/             tokens, base, components, layout, sections
  assets/             images and PDFs, including resume.pdf
  _headers            Cloudflare Pages security headers
nginx.conf            local Docker only: headers, caching, gzip
Dockerfile            local Docker only: build + serve
```

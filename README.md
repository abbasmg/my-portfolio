# My Portfolio

Personal portfolio of Abbas Meghani, Senior Data Scientist. Live at https://abbasmeghani.com/

## Stack

- Static site: HTML, SCSS and vanilla JS, bundled with [Parcel](https://parceljs.org/)
- No runtime dependencies: icons are inline SVG, scroll reveal uses `IntersectionObserver`
- Light/dark theme (light by default) with a Toronto day/night hero
- Docker multi-stage build: Node builds `dist/`, then `nginx:alpine` serves it on port 8080
- Hosted on Google Cloud Run (scale to zero, max 3 instances)

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

## Deploy to Cloud Run

Run these in **Google Cloud Shell** (the `>_` icon at the top right of the GCP console), or anywhere `gcloud` is installed:

```sh
git clone https://github.com/abbasmg/my-portfolio.git   # or: cd my-portfolio && git pull
cd my-portfolio

gcloud config set project my-portfolio-412007

gcloud run deploy my-portfolio \
  --source . \
  --region us-central1 \
  --port 8080 \
  --allow-unauthenticated \
  --max-instances 3
```

`--source .` sends the code to Cloud Build, which builds the `Dockerfile` and stores the image in Artifact Registry, then rolls out a new revision. The first time, `gcloud` may ask to enable the Cloud Build and Artifact Registry APIs; answer yes. The custom domain mapping stays on the service, so abbasmeghani.com picks up the new revision automatically.

> Use the same service name and region as the existing service (check the Cloud Run console). Deploying under a different name creates a second service instead of updating the live one.

## Project layout

```
src/
  index.html          page content
  index.js            entry: theme, nav, scroll reveal
  scripts/            small JS modules (theme-init.js runs before paint)
  styles.scss         Sass entry
  styles/             tokens, base, components, layout, sections
  assets/             images and PDFs, including resume.pdf
nginx.conf            security headers, caching, gzip
Dockerfile            build + serve
```

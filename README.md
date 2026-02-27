# My Portfolio

Welcome to my GitHub portfolio! 🚀 Explore my projects, learn about my experiences, and get in touch.

Currently, live at https://abbasmeghani.com/

## TODOs

- [X] **Get Template**
  - Find a suitable GitHub Portfolio Template

- [X] **Modify existing sections**
  - [X] Update Title
  - [X] Update About
  - [X] Update Projects
  - [X] Update Contact

- [X] **Change CSS and js to accommodate more sections**
  - [X] Update Education
  - [X] Update Experience.

- [X] **Containerize using Docker**
  - Multi-stage build: Node/Parcel builds `dist/` → nginx:alpine serves it
- [X] **Deploy**
  - Deploy on Google Cloud Run (scale-to-zero, max 3 instances, budget alerts at $5/$10)

- [X] **Dark Mode**
  - Toggle button (fixed top-right, moon/sun icon swap)
  - CSS custom properties on `:root` / `[data-theme="dark"]`
  - Default: light mode (falls back to `'light'` if no localStorage preference)

- [X] **Theme-aware Hero Background**
  - Light: Toronto day image · Dark: Toronto night image
  - Images compressed with sharp-cli (mozjpeg q75, max 1920px) — ~290KB each
  - Frosted glass panel with `backdrop-filter: blur(16px)`

- [X] **Security Headers**
  - `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `HSTS`, `CSP`, `Permissions-Policy` in nginx.conf
  - `server_tokens off`

- [X] **Frosted Glass Card Style**
  - Project cards use `backdrop-filter: blur(8px)`, `var(--card-bg)`, `border-radius: 1.2rem`

- [ ] **Add More Projects**
  - Include additional projects and update the Projects section.

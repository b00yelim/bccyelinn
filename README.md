# Clap Trap

A single-page mosquito-catching game. Clap near the microphone, or use click/spacebar for testing.

## Local Preview

```sh
npm run dev
```

Open `http://127.0.0.1:4173/index.html`.

## Build

```sh
npm run build
```

The deployable site is written to `dist/`.

## Deploy

This app is a static site and works well on Netlify, Vercel, or GitHub Pages.

- Netlify: connect the repo. Build command: `npm run build`. Publish directory: `dist`.
- Vercel: connect the repo. The included `vercel.json` uses `npm run build` and `dist`.
- GitHub Pages: run `npm run build`, then publish the `dist/` folder, or use a Pages workflow.

Microphone clap detection requires HTTPS in production. Netlify, Vercel, and GitHub Pages provide HTTPS by default.

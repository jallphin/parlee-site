# Robert Parlee Website

Static website prototype for Robert Parlee. The site is plain HTML, CSS, and JavaScript so it can run locally without a build step and deploy cleanly to GitHub Pages.

## Local Demo

```bash
npm start
```

Open `http://localhost:8080`.

No `npm install` is required for the local server script. It uses Python's built-in static file server.

## Project Structure

- `site/` - public website files served by GitHub Pages
- `docs/` - planning, style guide, and content checklist
- `.github/workflows/deploy.yml` - GitHub Pages deployment workflow

## GitHub Pages

The deploy workflow publishes the `site/` directory on every push to `main`. In GitHub repository settings, enable Pages with GitHub Actions as the source.

Expected preview URL after publishing from `jallphin/parlee-site`:

`https://jallphin.github.io/parlee-site/`

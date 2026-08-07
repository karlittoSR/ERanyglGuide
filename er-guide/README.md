# Elden Ring Speedrun Guides

Source for the guide site published at `https://karlittoSR.github.io/ERanyglGuide/`.

## Layout

    docs/
      index.md                  EN home
      guide/                    EN guides   <-- source of truth
      changelog.md              EN changelog
      fr/
        index.md                FR home
        guide/                  FR guides   <-- translations
        changelog.md
      public/                   images, downloads
      .vitepress/config.mts     nav, sidebar, locales

## Local development

    npm install
    npm run dev        # http://localhost:5173

## Rules

1. **English is the source of truth.** Edit `docs/guide/` first, always.
2. Every FR page carries `source_rev` and `source_date` in its frontmatter.
   Bump both when you sync a translation.
3. CI opens an issue whenever `docs/guide/` changes without `docs/fr/guide/`.
   Close it when the translation catches up.
4. Volatile content (route steps, patch numbers, FPS values) belongs in the
   route sheet, not in these pages. Link to it.
5. Log every meaningful change in `docs/changelog.md` — the Chinese
   maintainer works from that.

## Deployment

Push to `main`. The `Deploy site` workflow builds and publishes to GitHub Pages.
Enable it once under **Settings > Pages > Source: GitHub Actions**.

## Before first push

- Set `base` in `docs/.vitepress/config.mts` to `/<repo-name>/`
- Replace `USER/REPO` in the `editLink` patterns and in this README
- Run `npm install` and commit `package-lock.json` (the workflow uses `npm ci`)

# Home Content Toggle

This project currently hides these home page sections on purpose:

- Recent Videos
- Featured Podcast
- Recent Podcasts

They are commented out in `pages/index.vue`.

## How to Re-enable

1. Open `pages/index.vue`.
2. In the `<script setup>` block, uncomment the two `useAsyncData` queries:
   - `videos-home`
   - `podcasts-home`
3. In the `<template>` block, uncomment the three section blocks:
   - `recent-videos`
   - `featured-podcast`
   - `recent-podcasts`
4. Save and run:

```bash
npm run dev
```

5. Verify on the home page:
   - Recent Videos displays latest video entries from `content/videos/*.md`
   - Featured Podcast displays the featured podcast card
   - Recent Podcasts displays latest podcast entries from `content/podcasts/*.md`

## Content Prerequisites

- Add/update video markdown files in `content/videos/`.
- Add/update podcast markdown files in `content/podcasts/`.
- For a featured podcast, set `featured: true` in the podcast frontmatter you want featured.

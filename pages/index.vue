<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

const { data: articles } = await useAsyncData('articles-home', () =>
  queryCollection('blog').order('date', 'DESC').limit(6).all())

// Temporarily disabled on home page.
// Re-enable these when you have fresh video/podcast content.
// const { data: videos } = await useAsyncData('videos-home', () =>
//   queryCollection('videos').order('date', 'DESC').limit(5).all())
//
// const { data: podcasts } = await useAsyncData('podcasts-home', () =>
//   queryCollection('podcasts').order('date', 'DESC').limit(2).all())

let observer: IntersectionObserver | null = null

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const sections = document.querySelectorAll<HTMLElement>('.animated-section')

  if (prefersReducedMotion) {
    sections.forEach(section => section.classList.add('fade-in'))
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in')
          observer?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )

  sections.forEach((section) => {
    observer?.observe(section)
  })
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div>
    <CreativeHero />
    <div class="pt-4 pb-12 px-6 sm:px-8 lg:px-12 bg-transparent">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          <!--
            Temporarily hidden:
            - Recent Videos
            - Featured Podcast
            - Recent Podcasts
            See HOME_CONTENT_README.md for re-enable steps.
          -->
          <!--
          <section
            aria-labelledby="recent-videos"
            class="animated-section lg:col-span-2"
          >
            <NuxtLink to="/videos">
              <AppSubtitle id="recent-videos">
                Recent Videos
              </AppSubtitle>
            </NuxtLink>
            <FeaturedVideoSection v-if="videos" :list="videos" />
          </section>

          <section
            aria-labelledby="featured-podcast"
            class="animated-section"
          >
            <AppSubtitle id="featured-podcast">
              Featured Podcast
            </AppSubtitle>
            <FeaturedPodcast />
          </section>

          <section
            aria-labelledby="recent-podcasts"
            class="animated-section"
          >
            <NuxtLink to="/podcasts">
              <AppSubtitle id="recent-podcasts">
                Recent Podcasts
              </AppSubtitle>
            </NuxtLink>
            <CardList v-if="podcasts" :list="podcasts" section="podcasts" :stacked="true" />
          </section>
          -->

          <section
            aria-labelledby="recent-posts"
            class="lg:col-span-2 animated-section"
          >
            <NuxtLink to="/blog">
              <AppSubtitle id="recent-posts">
                Recent Blog Posts
              </AppSubtitle>
            </NuxtLink>
            <BlogPostList v-if="articles" :list="articles" />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animated-section {
  opacity: 0;
  transform: translateY(26px) scale(0.985);
  filter: blur(6px);
  transition:
    opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.75s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.75s cubic-bezier(0.22, 1, 0.36, 1);
}

.animated-section.fade-in {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}

@media (prefers-reduced-motion: reduce) {
  .animated-section {
    opacity: 1;
    transform: none;
    filter: none;
    transition: none;
  }
}
</style>

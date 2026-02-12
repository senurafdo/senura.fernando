<template>
  <footer class="w-full bg-[#09637E] border-t border-[#088395] py-12 overflow-hidden sm:px-6 lg:px-8 mt-12">
    <ul class="-mx-5 -my-2 flex flex-wrap justify-center text-[#EBF4F6] px-6">
      <li
        v-for="(nav, index) in NavLinks"
        :key="index"
        class="pb-6 lg:pb-0 pr-6"
      >
        <NuxtLink :to="nav.url" class="hover:no-underline hover:text-[#7AB2B2] transition-colors">
          {{ nav.link }}
        </NuxtLink>
      </li>
    </ul>

    <ul class="mt-8 flex flex-wrap justify-center space-x-6 mb-6 px-6">
      <li>
        <a
          href="https://x.com/senura_"
          target="_blank"
          rel="noopener"
          aria-label="x"
          class="
            text-[#EBF4F6]
            transition
            hover:text-[#7AB2B2]
          "
        >
          <IconX class="h-10 w-10 mb-6" />
        </a>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/in/senura-fernando"
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="LinkedIn"
          class="
            text-[#EBF4F6]
            transition
            hover:text-[#7AB2B2]
          "
        >
          <IconLinkedIn class="h-10 w-10" />
        </a>
      </li>

      <li>
        <a
          href="https://www.youtube.com/@TestingMonkey"
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="YouTube"
          class="
            text-[#EBF4F6]
            transition
            hover:text-[#7AB2B2]
          "
        >
          <IconYouTube class="h-10 w-10" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/senurafdo"
          aria-label="GitHub"
          target="_blank"
          rel="nofollow noopener noreferrer"
          class="
            text-[#EBF4F6]
            transition
            hover:text-[#7AB2B2]
          "
        >
          <IconGitHub class="h-10 w-10" />
        </a>
      </li>

      <li>
        <a
          href="https://buymeacoffee.com/senura"
          aria-label="buy me a coffee"
          target="_blank"
          rel="nofollow noopener noreferrer"
          class="text-[#EBF4F6] transition hover:text-[#7AB2B2]"
        >
          <IconCoffee class="h-10 w-10" />
        </a>
      </li>
    </ul>
    <p class="mt-8 text-center text-[#7AB2B2]">
      &copy; Senura Fernando, Germany
    </p>
  </footer>
</template>

<style scoped>
.github {
  width: 2.25rem;
}
</style>

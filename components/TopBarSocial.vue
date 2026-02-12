<script setup lang="ts">
import IconLinkedIn from '~/components/icon/IconLinkedIn.vue'
import IconX from '~/components/icon/IconX.vue'
import IconYouTube from '~/components/icon/IconYouTube.vue'
</script>

<template>
  <ul class="flex gap-6 lg:gap-3 justify-center text-[#EBF4F6] mr-2 items-center">
    <li>
      <a
        href="https://x.com/senura_"
        target="_blank"
        rel="noopener"
        aria-label="x"
        class="text-[#EBF4F6] hover:text-[#7AB2B2] transition duration-300"
      ><IconX class="w-7 h-7 lg:h-4 lg:w-4" /></a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/senura-fernando/"
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label="linkedIn"
        class="text-[#EBF4F6] hover:text-[#7AB2B2] transition duration-300"
      ><IconLinkedIn class="w-7 h-7 lg:h-4 lg:w-4" /></a>
    </li>
    <li>
      <a
        href="https://github.com/senurafdo"
        aria-label="github"
        target="_blank"
        rel="nofollow noopener noreferrer"
        class="text-[#EBF4F6] hover:text-[#7AB2B2] transition duration-300"
      ><IconGitHub class="w-7 h-7 lg:h-4 lg:w-4" /></a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/@TestingMonkey"
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label="youtube"
        class="text-[#EBF4F6] hover:text-[#7AB2B2] transition duration-300"
      ><IconYouTube class="w-7 h-7 lg:h-5 lg:w-5" /></a>
    </li>
    <li><ColorMode /></li>
  </ul>
</template>

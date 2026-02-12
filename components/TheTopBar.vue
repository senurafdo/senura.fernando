<script setup lang="ts">
const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div>
    <header class="w-full fixed top-0 left-0 z-50 bg-[#09637E]/95 py-3 border-b border-[#088395] backdrop-blur-md">
      <div class="container mx-auto">
        <div class="w-100 h-auto items-center flex justify-between px-4 sm:px-6 lg:px-3">
          <div class="w-auto text-[#EBF4F6]">
            <NuxtLink to="/" class="hover:no-underline flex">
              <NuxtImg
                class="rounded-full mr-4 profile-pic border border-[#7AB2B2]"
                src="/images/profile.jpg"
                alt="Senura Fernando"
                width="100"
                height="auto"
                quality="80"
                
              />
              <span class="self-center text-[#EBF4F6] font-semibold"> Senura Fernando </span>
            </NuxtLink>
          </div>
          <div class="text-[#EBF4F6] hidden lg:block">
            <TheNavigation class="text-[#EBF4F6] hidden lg:block" />
          </div>
          <div class="inline-flex justify-between hidden lg:block">
            <TopBarSocial />
          </div>

          <button
            class="block lg:hidden"
            aria-label="open menu"
            type="button"
            @click="toggle"
          >
            <ul v-if="!isOpen" class="hamburger text-[#EBF4F6]">
              <li class="bg-[#EBF4F6]" />
              <li class="bg-[#EBF4F6]" />
              <li class="bg-[#EBF4F6]" />
            </ul>
            <span
              v-if="isOpen"
              class="text-[#EBF4F6] text-2xl"
              aria-label="close menu"
            >
              X
            </span>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Menu Overlay - Outside header for proper z-index stacking -->
    <Teleport to="body">
      <div
        v-show="isOpen"
        class="fixed inset-0 text-[#EBF4F6] w-full px-10 pt-6 text-center lg:hidden bg-[#09637E]"
        style="z-index: 9999;"
      >
        <button
          class="absolute top-4 right-4 text-[#EBF4F6] text-3xl font-bold p-2 hover:text-[#7AB2B2]"
          aria-label="close menu"
          type="button"
          @click="isOpen = false"
        >
          ✕
        </button>
        <div class="mt-16">
          <TheNavigation @navigate="isOpen = false" />
          <TopBarSocial />
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.hamburger li {
  width: 35px;
  height: 5px;
  margin: 6px 0;
}
.profile-pic {
  height: 50px;
  width: 50px;
}
</style>

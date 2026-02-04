<script setup lang="ts">
const { data: about } = await useAsyncData('about', () => queryCollection('about').first())

const title = ref('About Senura Fernando')
const description = ref(
  'BEng (Hons) Software Engineering, Master in Business Administration (Merit)',
)
const awards = ref([
  
  {
    name: 'BEng (Hons) Software Engineering',
   // url: '',
    about:
      'I hold a BEng (Hons) in Software Engineering (2:1) from IIT Sri Lanka, affiliated with The University of Westminster, UK. The program grounded me in strong engineering principles, problem-solving, and real-world software development practices. It shaped the way I design, build, and think about scalable, reliable systems.',
  },
  {
    name: 'Master in Business Administration (Merit)',
   // url: '',
    about:
      'I completed my Master in Business Administration (Merit) at ANC Sri Lanka, affiliated with University of West London. The program strengthened my understanding of strategy, leadership, and data-driven decision-making. It complements my technical background by bridging business insight with execution.',
  },
  {
    name: 'ISTQB CTFL certification -  82.50%.',
   // url: '',
    about:
      'Earned the ISTQB CTFL certification from International Software Testing Qualifications Board (Certificate No. 24-CTFL 4-200-12) to strengthen core software testing fundamentals and validate QA expertise.',
  },
  {
    name: 'ISTQB CTFL-AT certification - 87.5%',
    about: 'Earned the ISTQB CTFL-AT certification from International Software Testing Qualifications Board (Certificate No. 25-CTFL-AT-00201-USA) to deepen expertise in agile testing methodologies and adaptive QA strategies.'
  },
  {
    name: 'International Services Director (Volunteer) - Rotaract Club',
    about: 'Led a multinational online collaboration initiative via Twitter that connected over 20 clubs across 6 countries. The #WeTalk project gained recognition as one of the most successful international service projects in the network, fostering cross-cultural dialogue and cooperation.'
  }
])

useHead({
  title: title.value,
  meta: [
    {
      name: 'description',
      content: description.value,
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://debbie.codes/about',
    },
  ],
})
</script>

<template>
  <main class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-600/5 dark:from-primary/10 dark:to-blue-600/10" />
      <div class="container mx-auto px-4 sm:px-6 py-16 sm:py-24 relative">
        <div class="max-w-4xl mx-auto text-center">
          <div class="mb-8">
            <p class="font-Saira mb-4 text-primary text-xl font-medium tracking-wide animate-fade-in" aria-label="Greeting">
              👋 Hello There!
            </p>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              I'm
              <span class="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
               Senura Fernando
              </span>
            </h1>
            <div class="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-8 rounded-full" />
          </div>

          <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div class="prose prose-lg dark:prose-invert max-w-none text-center">
              <ContentRenderer v-if="about" :value="about" class="text-gray-700 dark:text-gray-200 leading-relaxed" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Awards Section -->
    <section class="py-16 sm:py-24">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Awards &
              <span class="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <div class="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full" />
            <p class="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Recognition and certifications that reflect my journey in technology and community contribution.
            </p>
          </div>

          <section aria-labelledby="awards-heading">
            <div class="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3" role="list">
              <article
                v-for="(award, index) in awards"
                :key="award.name"
                class="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
                :style="`animation-delay: ${index * 100}ms`"
              >
                <!-- Card Background Gradient -->
                <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-600/5 dark:from-primary/10 dark:to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div class="relative z-10">
                  <div class="mb-6">
                    <!-- Award Icon -->
                    <div class="w-12 h-12 bg-gradient-to-r from-primary to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </div>

                    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                      <a
                        :href="award.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 rounded-lg"
                        :aria-label="`Learn more about ${award.name} (opens in new tab)`"
                      >
                        {{ award.name }}
                        <svg class="inline-block w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </a>
                    </h3>
                  </div>

                  <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    {{ award.about }}
                  </p>

                  <!-- Learn More Button -->
                  <!-- <div class="mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                    <a
                      :href="award.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center text-primary hover:text-blue-600 font-medium text-sm transition-colors duration-300"
                      :aria-label="`Learn more about ${award.name} (opens in new tab)`"
                    >
                      Learn More
                      <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </div> -->
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.float-animation {
  animation: float 6s ease-in-out infinite;
}

/* Staggered animation for cards */
.grid > article:nth-child(1) { animation: fade-in 0.6s ease-out 0.1s both; }
.grid > article:nth-child(2) { animation: fade-in 0.6s ease-out 0.2s both; }
.grid > article:nth-child(3) { animation: fade-in 0.6s ease-out 0.3s both; }
.grid > article:nth-child(4) { animation: fade-in 0.6s ease-out 0.4s both; }
.grid > article:nth-child(5) { animation: fade-in 0.6s ease-out 0.5s both; }
.grid > article:nth-child(6) { animation: fade-in 0.6s ease-out 0.6s both; }
.grid > article:nth-child(7) { animation: fade-in 0.6s ease-out 0.7s both; }
.grid > article:nth-child(8) { animation: fade-in 0.6s ease-out 0.8s both; }

/* Enhanced hover effects */
article:hover .float-animation {
  animation-play-state: paused;
}
</style>

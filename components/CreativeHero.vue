<template>
  <section class="hero-container relative overflow-hidden rounded-2xl border border-[#7AB2B2]/60">
    <div class="absolute inset-0 hero-bg" aria-hidden="true" />
    <div class="absolute inset-0 hero-grid" aria-hidden="true" />

    <div class="absolute -top-16 -left-10 orb orb-a" aria-hidden="true" />
    <div class="absolute top-10 -right-20 orb orb-b" aria-hidden="true" />
    <div class="absolute -bottom-20 left-1/3 orb orb-c" aria-hidden="true" />

    <div class="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
      <h1 class="hero-title text-5xl md:text-7xl font-bold tracking-wide text-[#09637E] uppercase">
        Senura <span class="text-primary">Fernando</span>
      </h1>
      <p class="mt-4 text-lg md:text-xl text-[#088395] max-w-2xl hero-subtitle">
        Senior Quality Engineer
      </p>
    </div>
  </section>
</template>

<style scoped>
.hero-container {
  height: 50vh;
  min-height: 300px;
}

.hero-bg {
  background: radial-gradient(circle at 15% 20%, rgba(122, 178, 178, 0.36), transparent 32%),
    radial-gradient(circle at 82% 14%, rgba(8, 131, 149, 0.24), transparent 28%),
    linear-gradient(135deg, #ebf4f6 0%, #f8fcfd 55%, #e5f1f3 100%);
}

.hero-grid {
  background-image:
    linear-gradient(rgba(9, 99, 126, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(9, 99, 126, 0.1) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: radial-gradient(circle at center, black 32%, transparent 88%);
  opacity: 0.25;
  animation: grid-drift 18s linear infinite;
}

.orb {
  width: 20rem;
  height: 20rem;
  border-radius: 9999px;
  filter: blur(34px);
  opacity: 0.42;
}

.orb-a {
  background: #7ab2b2;
  animation: float-a 9s ease-in-out infinite;
}

.orb-b {
  background: #088395;
  animation: float-b 11s ease-in-out infinite;
}

.orb-c {
  background: #09637e;
  animation: float-c 13s ease-in-out infinite;
}

.hero-title {
  animation: rise-in 0.9s ease-out both;
}

.hero-subtitle {
  animation: rise-in 1.1s ease-out both;
}

@keyframes rise-in {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes grid-drift {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(32px, 32px);
  }
}

@keyframes float-a {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(35px, 22px) scale(1.08);
  }
}

@keyframes float-b {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-28px, 26px) scale(1.06);
  }
}

@keyframes float-c {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(22px, -20px) scale(1.05);
  }
}
</style>

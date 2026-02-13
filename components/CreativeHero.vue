<template>
  <section
    class="hero-container relative isolate overflow-hidden rounded-[2rem] border border-[#7AB2B2]/55"
    aria-labelledby="home-hero-title"
  >
    <div class="absolute inset-0 hero-bg pointer-events-none" aria-hidden="true" />
    <div class="absolute inset-0 hero-grid pointer-events-none" aria-hidden="true" />
    <div class="absolute inset-0 hero-vignette pointer-events-none" aria-hidden="true" />

    <div class="absolute -top-20 -left-12 orb orb-a pointer-events-none" aria-hidden="true" />
    <div class="absolute top-8 -right-20 orb orb-b pointer-events-none" aria-hidden="true" />
    <div class="absolute -bottom-24 left-1/3 orb orb-c pointer-events-none" aria-hidden="true" />
    <div class="absolute left-1/4 -top-24 beam beam-a pointer-events-none" aria-hidden="true" />
    <div class="absolute right-1/4 -bottom-24 beam beam-b pointer-events-none" aria-hidden="true" />

    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <span class="tech-pill pill-a">Playwright</span>
      <span class="tech-pill pill-b">Web Performance</span>
      <span class="tech-pill pill-c">Testing Strategy</span>
      <span class="tech-pill pill-d">Developer Experience</span>
      <span class="tech-pill pill-e">Regression Testing</span>
      <span class="tech-pill pill-f">CI Quality Gates</span>
    </div>

    <div class="relative z-20 h-full">
      <div class="mx-auto flex h-full max-w-6xl items-center px-6 py-10 sm:px-10">
        <div class="hero-content max-w-3xl">
          <p class="hero-kicker reveal-1">
            Engineering Blog | Quality Leadership | Modern Web
          </p>
          <h1 id="home-hero-title" class="hero-title reveal-2">
            Senura <span>Fernando</span>
          </h1>
          <p class="hero-subtitle reveal-3">
            Senior Quality Engineer
          </p>
          <p class="hero-description reveal-4">
            Building reliable products with pragmatic test architecture, automation, and
            hands-on engineering insights for modern teams.
          </p>
          <p class="terminal-line reveal-5" aria-hidden="true">
            <span>npx ship --with-confidence</span>
          </p>
          <div class="hero-actions reveal-6">
            <NuxtLink to="/blog" class="cta cta-primary">
              Read Blog
            </NuxtLink>
            <NuxtLink to="/about" class="cta cta-secondary">
              About Me
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-container {
  height: clamp(25rem, 58vh, 38rem);
  min-height: 24rem;
  background: linear-gradient(128deg, rgba(246, 252, 255, 0.98), rgba(200, 230, 241, 0.94));
  border-color: rgba(74, 150, 169, 0.62);
  box-shadow:
    0 28px 70px rgba(8, 84, 104, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.55),
    inset 0 -1px 0 rgba(7, 76, 93, 0.26);
}

.hero-bg {
  background:
    radial-gradient(circle at 14% 22%, rgba(251, 255, 255, 0.92), transparent 42%),
    radial-gradient(circle at 82% 18%, rgba(6, 119, 145, 0.33), transparent 42%),
    radial-gradient(circle at 52% 95%, rgba(8, 123, 150, 0.3), transparent 46%),
    linear-gradient(130deg, #f4fbff 0%, #eaf6fb 54%, #c7e8f4 100%);
  animation: background-pan 20s ease-in-out infinite alternate;
}

.hero-grid {
  background-image:
    linear-gradient(rgba(9, 99, 126, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(9, 99, 126, 0.08) 1px, transparent 1px);
  background-size: 30px 30px;
  -webkit-mask-image: radial-gradient(circle at center, black 34%, transparent 90%);
  mask-image: radial-gradient(circle at center, black 34%, transparent 90%);
  opacity: 0.38;
  animation: grid-drift 26s linear infinite;
}

.hero-vignette {
  background:
    linear-gradient(100deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.06) 38%, rgba(5, 73, 91, 0.34) 100%),
    radial-gradient(circle at 86% 42%, rgba(5, 86, 108, 0.28), transparent 52%);
}

.orb {
  width: 20rem;
  height: 20rem;
  border-radius: 9999px;
  filter: blur(42px);
  opacity: 0.45;
}

.orb-a {
  background: #7ab2b2;
  animation: float-a 11s ease-in-out infinite;
}

.orb-b {
  background: #088395;
  animation: float-b 12s ease-in-out infinite;
}

.orb-c {
  background: #09637e;
  animation: float-c 14s ease-in-out infinite;
}

.beam {
  width: 12rem;
  height: 34rem;
  border-radius: 9999px;
  filter: blur(20px);
  opacity: 0.2;
  transform: rotate(25deg);
}

.beam-a {
  background: linear-gradient(180deg, rgba(8, 131, 149, 0.15), rgba(8, 131, 149, 0.85), transparent);
  animation: beam-sweep-a 16s ease-in-out infinite;
}

.beam-b {
  background: linear-gradient(180deg, transparent, rgba(122, 178, 178, 0.9), rgba(122, 178, 178, 0.15));
  animation: beam-sweep-b 17s ease-in-out infinite;
}

.tech-pill {
  position: absolute;
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  border: 1px solid rgba(9, 99, 126, 0.35);
  padding: 0.3rem 0.8rem;
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0a5368;
  background: rgba(248, 252, 253, 0.85);
  backdrop-filter: blur(6px);
}

.pill-a {
  top: 16%;
  left: 63%;
  animation: pill-float 8s ease-in-out infinite;
}

.pill-b {
  top: 33%;
  left: 78%;
  animation: pill-float 9s ease-in-out infinite 0.7s;
}

.pill-c {
  bottom: 30%;
  right: 8%;
  animation: pill-float 10s ease-in-out infinite 1s;
}

.pill-d {
  bottom: 12%;
  left: 58%;
  animation: pill-float 9.5s ease-in-out infinite 1.3s;
}

.pill-e {
  top: 53%;
  left: 65%;
  animation: pill-float 10.8s ease-in-out infinite 1.5s;
}

.pill-f {
  bottom: 9%;
  right: 7%;
  animation: pill-float 11.2s ease-in-out infinite 1.8s;
}

.hero-content > * {
  opacity: 0;
  transform: translateY(16px);
  animation: content-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.reveal-1 {
  animation-delay: 0.12s;
}

.reveal-2 {
  animation-delay: 0.24s;
}

.reveal-3 {
  animation-delay: 0.38s;
}

.reveal-4 {
  animation-delay: 0.52s;
}

.reveal-5 {
  animation-delay: 0.64s;
}

.reveal-6 {
  animation-delay: 0.76s;
}

.hero-kicker {
  margin-bottom: 0.8rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(8, 131, 149, 0.9);
}

.hero-title {
  margin: 0;
  font-size: clamp(2.6rem, 8vw, 5.2rem);
  line-height: 0.95;
  font-weight: 800;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #085a71;
  text-shadow: 0 6px 24px rgba(8, 131, 149, 0.16);
}

.hero-title span {
  display: inline-block;
  background: linear-gradient(90deg, #088395 0%, #09637e 42%, #7ab2b2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: shimmer 9s linear infinite;
}

.hero-subtitle {
  margin-top: 0.95rem;
  margin-bottom: 0;
  font-size: clamp(1.05rem, 2vw, 1.35rem);
  font-weight: 600;
  color: #0a5d75;
}

.hero-description {
  margin-top: 1rem;
  margin-bottom: 0;
  max-width: 46ch;
  font-size: clamp(0.98rem, 1.8vw, 1.1rem);
  line-height: 1.7;
  color: rgba(9, 63, 80, 0.92);
}

.terminal-line {
  margin-top: 1.2rem;
  margin-bottom: 0;
}

.terminal-line span {
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid rgba(8, 131, 149, 0.75);
  padding: 0.34rem 0.62rem;
  border-radius: 0.5rem;
  background: rgba(6, 33, 46, 0.82);
  box-shadow: inset 0 0 0 1px rgba(122, 178, 178, 0.35);
  color: #d4edf2;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.86rem;
  width: 0;
  animation:
    type-line 3s steps(30, end) 1.2s forwards,
    caret-blink 0.9s step-end infinite;
}

.hero-actions {
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

.cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  padding: 0.68rem 1.2rem;
  font-size: 0.92rem;
  font-weight: 700;
  line-height: 1;
  transition: transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease, color 180ms ease;
}

.cta:hover {
  transform: translateY(-2px);
}

.cta-primary {
  background: linear-gradient(135deg, #088395, #0a6f87);
  color: #ecf8fa;
  box-shadow: 0 10px 25px rgba(9, 99, 126, 0.24);
}

.cta-primary:hover {
  box-shadow: 0 14px 32px rgba(9, 99, 126, 0.3);
}

.cta-secondary {
  border: 1px solid rgba(9, 99, 126, 0.35);
  color: #0a5770;
  background: rgba(248, 252, 253, 0.85);
}

.cta-secondary:hover {
  background: rgba(239, 249, 251, 0.95);
}

@keyframes content-rise {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes background-pan {
  0% {
    transform: scale(1) translate3d(0, 0, 0);
  }
  100% {
    transform: scale(1.06) translate3d(-1.6%, 1.8%, 0);
  }
}

@keyframes grid-drift {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(30px, 30px);
  }
}

@keyframes shimmer {
  0% {
    background-position: 0 50%;
  }
  100% {
    background-position: 220% 50%;
  }
}

@keyframes type-line {
  from {
    width: 0;
  }
  to {
    width: 30ch;
  }
}

@keyframes caret-blink {
  0%,
  49% {
    border-right-color: rgba(8, 131, 149, 0.8);
  }
  50%,
  100% {
    border-right-color: transparent;
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
    transform: translate(24px, -20px) scale(1.05);
  }
}

@keyframes beam-sweep-a {
  0%,
  100% {
    transform: rotate(20deg) translate3d(0, 0, 0);
    opacity: 0.15;
  }
  50% {
    transform: rotate(24deg) translate3d(28px, 18px, 0);
    opacity: 0.28;
  }
}

@keyframes beam-sweep-b {
  0%,
  100% {
    transform: rotate(20deg) translate3d(0, 0, 0);
    opacity: 0.14;
  }
  50% {
    transform: rotate(16deg) translate3d(-34px, -18px, 0);
    opacity: 0.25;
  }
}

@keyframes pill-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@media (max-width: 1024px) {
  .tech-pill {
    font-size: 0.68rem;
    letter-spacing: 0.06em;
    padding: 0.27rem 0.64rem;
  }

  .pill-a {
    top: 12%;
    left: 59%;
  }

  .pill-b {
    top: 31%;
    left: 72%;
  }

  .pill-c {
    bottom: 26%;
    right: 4%;
  }

  .pill-d {
    bottom: 7%;
    left: 52%;
  }

  .pill-e {
    top: 53%;
    left: 60%;
  }

  .pill-f {
    bottom: 7%;
    right: 3%;
  }
}

@media (max-width: 768px) {
  .hero-container {
    height: clamp(24rem, 65vh, 34rem);
  }

  .hero-title {
    line-height: 1;
  }

  .hero-kicker {
    letter-spacing: 0.11em;
  }

  .terminal-line span {
    font-size: 0.8rem;
  }

  .pill-b,
  .pill-d,
  .pill-f,
  .beam {
    display: none;
  }

  .pill-a {
    top: 10%;
    left: 52%;
  }

  .pill-c {
    right: 6%;
    bottom: 16%;
  }

  .pill-e {
    top: 52%;
    left: 54%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-content > * {
    opacity: 1;
    transform: none;
    animation: none;
  }

  .hero-bg,
  .hero-grid,
  .hero-title span,
  .orb,
  .beam,
  .tech-pill,
  .terminal-line span {
    animation: none;
  }

  .terminal-line span {
    width: auto;
    border-right-color: transparent;
  }

  .cta {
    transition: none;
  }
}

.dark .hero-container {
  border-color: rgba(122, 178, 178, 0.34);
  background: linear-gradient(125deg, rgba(6, 23, 33, 0.98), rgba(6, 29, 42, 0.97));
  box-shadow:
    0 30px 74px rgba(0, 0, 0, 0.52),
    inset 0 1px 0 rgba(155, 225, 233, 0.12),
    inset 0 -1px 0 rgba(1, 9, 12, 0.45);
}

.dark .hero-bg {
  background:
    radial-gradient(circle at 18% 20%, rgba(8, 131, 149, 0.32), transparent 36%),
    radial-gradient(circle at 82% 16%, rgba(122, 178, 178, 0.2), transparent 38%),
    radial-gradient(circle at 50% 90%, rgba(8, 131, 149, 0.22), transparent 40%),
    linear-gradient(130deg, #061824 0%, #0a2332 55%, #0b2837 100%);
}

.dark .hero-grid {
  background-image:
    linear-gradient(rgba(122, 178, 178, 0.12) 1px, transparent 1px),
    linear-gradient(90deg, rgba(122, 178, 178, 0.12) 1px, transparent 1px);
  opacity: 0.36;
}

.dark .hero-vignette {
  background: radial-gradient(circle at 50% 50%, transparent 30%, rgba(0, 6, 9, 0.42) 125%);
}

.dark .hero-kicker {
  color: rgba(167, 220, 227, 0.9);
}

.dark .hero-title {
  color: #bfeef3;
  text-shadow: 0 8px 24px rgba(0, 0, 0, 0.42);
}

.dark .hero-title span {
  background: linear-gradient(90deg, #7ad4df 0%, #4cb8c7 40%, #8fe5db 100%);
  -webkit-background-clip: text;
  background-clip: text;
}

.dark .hero-subtitle {
  color: #9bd8e0;
}

.dark .hero-description {
  color: rgba(217, 244, 247, 0.82);
}

.dark .tech-pill {
  border-color: rgba(122, 178, 178, 0.4);
  color: #cef1f6;
  background: rgba(7, 29, 41, 0.72);
}

.dark .cta-secondary {
  border-color: rgba(122, 178, 178, 0.45);
  color: #c2edf3;
  background: rgba(9, 44, 61, 0.6);
}

.dark .cta-secondary:hover {
  background: rgba(9, 52, 73, 0.72);
}
</style>

<template>
  <section
    id="about"
    class="py-20 px-4 lg:px-40 bg-transparent relative overflow-hidden"
  >
    <!-- Blur Background Effects -->
    <div
      class="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl"
    ></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Video Section -->
        <div class="relative order-2 lg:order-1">
          <!-- Glow Effect Behind Video -->
          <div
            class="absolute -inset-4 bg-gradient-to-br from-green-500/20 to-orange-500/20 rounded-3xl blur-3xl opacity-60"
          ></div>

          <div
            class="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 hover:border-accent transition-all duration-300"
          >
            <video
              class="w-full h-[330px] object-cover"
              autoplay
              loop
              muted
              playsinline
            >
              <source src="/img/AboutVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="pt-6 flex items-center gap-4">
            <img src="/img/rahman.png" alt="Signature" class="h-16 opacity-80" />
            <div>
              <p class="font-bold text-xl text-white">Chef Abdul Rahman</p>
              <p class="text-sm text-gray-400">Founder & Head Chef</p>
            </div>
          </div>
        </div>

        <!-- Content Section -->
        <div class="space-y-8 order-1 lg:order-2">
          <div class="inline-block">
            <span
              class="text-lg font-semibold text-accent bg-accent/10 px-6 py-2 rounded-full border border-accent"
            >
              <i class="fa-solid fa-calendar-check"></i> Since 2006
            </span>
          </div>
          <h1 class="text-5xl lg:text-6xl font-bold leading-tight text-white">
            We Have <span class="text-accent">18+</span> Years of<br />
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"
              >Excellence</span
            >
            in Healthy Cuisine
          </h1>
          <p class="text-xl leading-relaxed text-gray-300">
            From our humble beginnings in 2006, we've been dedicated to
            revolutionizing healthy eating. Our passion is crafting nutritious,
            delicious salads using only the freshest organic ingredients sourced
            from local farms.
          </p>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<template>
  <section
    id="home"
    class="bg-primary min-h-screen flex items-center px-4 lg:px-40"
  >
    <div
      class="w-full flex flex-col lg:flex-row items-center justify-between gap-8 py-8"
    >
      <div class="lg:w-1/2 text-center lg:text-left">
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-sans font-bold">
          Fresh Healthy
        </h1>
        <h2 class="text-6xl sm:text-7xl lg:text-8xl font-alkalami py-4">
          Delicious Salads
        </h2>
        <p
          class="text-lg sm:text-xl leading-7 sm:leading-8 mb-8 sm:mb-12 max-w-xl mx-auto lg:mx-0"
        >
          Healthy foods to eat everyday, Tasty and healthy vegetables salad with
          fresh tomatoes, coriander and more.
        </p>
        <button
          @click="scrollToMenu"
          class="group relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-5 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
        >
          <span class="relative z-10 flex items-center gap-3">
            <i class="fa-solid fa-utensils"></i>
            Order Now
            <i
              class="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform"
            ></i>
          </span>
          <div
            class="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </button>
      </div>
      <div class="lg:w-1/2 flex justify-center">
        <div
          class="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden animate-spin-slow shadow-2xl"
        >
          <img
            src="/img/banner1.png"
            alt="Fresh Salad"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollToMenu = () => {
  const element = document.getElementById("menu");
  if (element) {
    const navHeight = 120; // Approximate navbar height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
</script>

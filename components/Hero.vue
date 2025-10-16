<template>
  <section id="home" class="bg-primary py-16 px-4 lg:px-40 scroll-mt-20">
    <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
      <div class="lg:w-1/2">
        <h1 class="text-7xl font-sans font-bold">Fresh Healthy</h1>
        <h2 class="text-8xl font-alkalami py-4">Delicious Salads</h2>
        <p class="text-xl leading-8 mb-12">
          Healthy foods to eat everyday, Tasty and healthy vegetables salad<br />
          width fresh tomatoes, coriander and more.
        </p>
        <button class="bg-accent text-white px-12 py-4 rounded-full text-xl hover:bg-green-600 transition-colors">
          <a href="#">Order Now</a>
        </button>
      </div>
      <div class="lg:w-1/2 flex justify-center">
        <div class="w-96 h-96 rounded-full overflow-hidden animate-spin-slow">
          <img src="/img/banner1.png" alt="Fresh Salad" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

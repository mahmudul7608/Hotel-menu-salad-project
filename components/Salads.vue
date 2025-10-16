<template>
  <section id="salads" class="py-16 px-4 scroll-mt-20">
    <div class="text-center mb-12">
      <h1 class="text-5xl font-bold">
        Our <span class="text-accent">Popular</span> salads
      </h1>
    </div>
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
      <div v-for="salad in salads" :key="salad.id" class="bg-gray-100 rounded-lg p-4 hover:shadow-lg transition-shadow">
        <div class="flex justify-center mb-6">
          <img :src="salad.image" :alt="salad.name" class="w-48 h-48 rounded-full border-[15px] border-white" />
        </div>
        <div class="text-center px-8">
          <h2 class="text-3xl font-bold mb-4">{{ salad.name }}</h2>
          <h5 class="text-sm leading-6">{{ salad.description }}</h5>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const salads = [
  {
    id: 1,
    name: 'Fruit Salad',
    image: '/img/s1.jpg',
    description: 'Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet.'
  },
  {
    id: 2,
    name: 'Green Salad',
    image: '/img/s2.jpg',
    description: 'Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed dolor et amet.'
  },
  {
    id: 3,
    name: 'Dessert Salads',
    image: '/img/s3.jpg',
    description: 'Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed dolor et amet.'
  }
];
</script>

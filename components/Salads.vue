<template>
  <section id="salads" class="py-16 px-4 bg-[#0a0a0a]">
    <div class="text-center mb-8">
      <h1 class="text-5xl font-bold">
        Our <span class="text-accent">Popular</span> salads
      </h1>
    </div>
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
      <div v-for="salad in salads" :key="salad.id" :class="salad.bgClass" class="rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300">
        <div class="flex justify-center mb-6">
          <img :src="salad.image" :alt="salad.name" class="w-48 h-48 rounded-full border-8 border-white shadow-xl" />
        </div>
        <div class="text-center px-6">
          <h2 class="text-3xl font-bold mb-4" :class="salad.titleClass">{{ salad.name }}</h2>
          <h5 class="text-base leading-7 text-gray-700">{{ salad.description }}</h5>
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
    description: 'A vibrant blend of fresh seasonal fruits, perfectly balanced with natural sweetness and a hint of citrus. Refreshing and nutritious.',
    bgClass: 'bg-gradient-to-br from-orange-100 to-pink-100',
    titleClass: 'text-orange-600'
  },
  {
    id: 2,
    name: 'Green Salad',
    image: '/img/s2.jpg',
    description: 'Crispy mixed greens tossed with garden-fresh vegetables, topped with our signature herb dressing. Light, healthy, and delicious.',
    bgClass: 'bg-gradient-to-br from-green-100 to-emerald-100',
    titleClass: 'text-green-600'
  },
  {
    id: 3,
    name: 'Dessert Salads',
    image: '/img/s3.jpg',
    description: 'Indulge in this sweet treat combining fresh fruits, creamy yogurt, and crunchy toppings. A guilt-free dessert experience.',
    bgClass: 'bg-gradient-to-br from-pink-100 to-rose-100',
    titleClass: 'text-pink-600'
  }
];
</script>

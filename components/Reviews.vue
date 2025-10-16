<template>
  <section class="bg-secondary py-32 px-4 lg:px-28">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
      <div v-for="review in reviews" :key="review.id" class="bg-transparent">
        <div class="flex items-start gap-4 mb-6">
          <img src="/img/quote.png" alt="Quote" class="w-12 h-12" />
          <h2 class="text-3xl font-sans">{{ review.title }}</h2>
        </div>
        <p class="text-lg leading-7 ml-16 mb-10">{{ review.text }}</p>
        <div class="ml-16">
          <h4 class="text-xl font-bold mb-2">{{ review.author }}</h4>
          <ul class="flex gap-1 text-yellow-600 mb-3">
            <i v-for="n in 5" :key="n" class="fa-solid fa-star"></i>
          </ul>
          <img :src="review.image" alt="Reviewer" class="w-14 h-14 rounded-full" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const reviews = [
  {
    id: 1,
    title: '"Lorem ipsum libero dolor ut justi"',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis sint tenetur. Corporis, sit excepturi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, veniam.',
    author: 'Johnson William',
    image: '/img/testi1.jpg'
  },
  {
    id: 2,
    title: '"Lorem ipsum libero dolor ut justi"',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis sint tenetur. Corporis, sit excepturi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, consectetur?',
    author: 'Johnson William',
    image: '/img/testi3.jpg'
  }
];
</script>

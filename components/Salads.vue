<template>
  <section id="salads" class="py-20 px-4 bg-[#0a0a0a] relative overflow-hidden">
    <!-- Blur Background Effects -->
    <div class="absolute top-10 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-10 right-10 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-3xl"></div>
    
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-white mb-2">
          Our <span class="text-accent">Popular</span> Salads
        </h1>
      </div>

      <!-- 3 Card Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="salad in salads" :key="salad.id" class="bg-gray-100 rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 group">
          <!-- Title -->
          <h2 class="text-3xl font-bold text-gray-900 mb-6 leading-tight">
            {{ salad.name }}
          </h2>
          
          <!-- Description -->
          <p v-if="salad.description" class="text-gray-600 text-base mb-6 leading-relaxed">
            {{ salad.description }}
          </p>
          
          <!-- Image Container -->
          <div class="relative rounded-2xl overflow-hidden mb-6">
            <img :src="salad.image" :alt="salad.name" class="w-full h-64 object-cover" />
            
            <!-- View Count Badge -->
            <div v-if="salad.views" class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
              <i class="fa-solid fa-eye text-gray-700 text-sm"></i>
              <span class="text-gray-900 font-semibold text-sm">{{ salad.views }}+</span>
            </div>
            
            <!-- Tags -->
            <div v-if="salad.tags" class="absolute bottom-4 left-4 flex gap-2">
              <span v-for="tag in salad.tags" :key="tag" class="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-gray-900 text-xs font-semibold">
                {{ tag }}
              </span>
            </div>
          </div>
          
          <!-- Button -->
          <button class="w-full bg-gray-900 hover:bg-accent text-white font-semibold py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105">
            <span>See Complete Recipe</span>
            <i class="fa-solid fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const salads = [
  {
    id: 1,
    name: 'Spicy Vermicelli Noodles Salad',
    description: null,
    image: '/img/s1.jpg',
    views: 100,
    tags: null
  },
  {
    id: 2,
    name: 'Classic Italian Beef Maltagliati',
    description: 'Layers of spicy goodness, hearty meat, and savory sauce. A timeless favorite with Maltagliati pasta.',
    image: '/img/s2.jpg',
    views: 500,
    tags: ['Italian Food', 'Step by Step Guides']
  },
  {
    id: 3,
    name: 'Sour & Spicy Korean Kimchi',
    description: null,
    image: '/img/s3.jpg',
    views: 200,
    tags: null
  }
];
</script>

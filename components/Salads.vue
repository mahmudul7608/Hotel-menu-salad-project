<template>
  <section id="salads" class="py-20 px-4 bg-transparent relative overflow-hidden">
    <!-- Blur Background Effects -->
    <div class="absolute top-10 left-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>
    
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-white mb-2">
          Our <span class="text-accent">Popular</span> Salads
        </h1>
      </div>

      <!-- 3 Card Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="salad in salads" :key="salad.id" class="bg-[#1a1f35]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:shadow-2xl hover:border-accent/50 transition-all duration-300 group relative overflow-hidden">
          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div class="relative z-10">
            <!-- Title -->
            <h2 class="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-accent transition-colors">
              {{ salad.name }}
            </h2>
            
            <!-- Description -->
            <p v-if="salad.description" class="text-gray-400 text-sm mb-4 leading-relaxed">
              {{ salad.description }}
            </p>
            <p v-else class="text-gray-400 text-sm mb-4 leading-relaxed">
              Fresh and healthy salad prepared with premium ingredients and special dressing.
            </p>
            
            <!-- Image Container -->
            <div class="relative rounded-xl overflow-hidden mb-4 group-hover:scale-[1.02] transition-transform duration-300">
              <img :src="salad.image" :alt="salad.name" class="w-full h-56 object-cover" />
              
              <!-- View Count Badge -->
              <div v-if="salad.views" class="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/10">
                <i class="fa-solid fa-eye text-cyan-400 text-xs"></i>
                <span class="text-white font-semibold text-xs">{{ salad.views }}+ views</span>
              </div>
            </div>
            
            <!-- Tags -->
            <div class="flex gap-2 mb-4 flex-wrap">
              <template v-if="salad.tags">
                <span v-for="tag in salad.tags" :key="tag" class="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg text-gray-300 text-xs font-medium border border-white/10 hover:bg-accent/20 hover:text-white transition-colors">
                  {{ tag }}
                </span>
              </template>
              <span v-else class="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg text-gray-300 text-xs font-medium border border-white/10">
                Popular Choice
              </span>
            </div>
            
            <!-- Button -->
            <button class="w-full bg-white/10 hover:bg-accent border border-white/20 hover:border-accent text-white font-semibold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-accent/20">
              <i class="fa-solid fa-book-open text-sm"></i>
              <span>See Complete Recipe</span>
              <i class="fa-solid fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>
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
    description: 'Fresh rice vermicelli with crisp vegetables, herbs and a zesty spicy dressing. Light yet flavorful.',
    image: '/img/s1.jpg',
    views: 100,
    tags: ['Vegan', 'Spicy']
  },
  {
    id: 2,
    name: 'Classic Italian Beef Maltagliati',
    description: 'Layers of spicy goodness, hearty meat, and savory sauce. A timeless favorite with Maltagliati pasta.',
    image: '/img/s2.jpg',
    views: 500,
    tags: ['Italian Food', 'Protein Rich']
  },
  {
    id: 3,
    name: 'Sour & Spicy Korean Kimchi',
    description: 'Traditional fermented cabbage with a perfect balance of sour, spicy and umami flavors. Probiotic rich.',
    image: '/img/s3.jpg',
    views: 200,
    tags: ['Korean', 'Probiotic']
  }
];
</script>

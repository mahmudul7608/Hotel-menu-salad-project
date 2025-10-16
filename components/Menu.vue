<template>
  <section id="menu" class="bg-white py-16 px-4 scroll-mt-20">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold mb-4">
          Our Restaurant <span class="text-accent">Menu</span>
        </h1>
        <p class="text-xl text-gray-600">Browse our delicious and healthy menu options</p>
      </div>

      <!-- Category Tabs -->
      <div class="mb-12">
        <div class="flex flex-wrap justify-center gap-4 border-b-2 border-gray-200 pb-4">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="activeCategory = category.id"
            :class="[
              'px-6 py-3 rounded-lg font-semibold transition-all duration-300',
              activeCategory === category.id
                ? 'bg-primary text-black'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ category.name }} ({{ category.count }})
          </button>
        </div>
      </div>

      <!-- Popular Section -->
      <div class="mb-8">
        <div class="flex items-center gap-3 mb-6">
          <i class="fa-solid fa-fire text-accent text-3xl"></i>
          <h2 class="text-3xl font-bold">Popular</h2>
        </div>
        <p class="text-gray-600 mb-8">Most ordered right now.</p>

        <!-- Menu Items Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="item in filteredMenuItems"
            :key="item.id"
            class="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-primary transition-all duration-300 transform hover:-translate-y-1"
          >
            <div class="flex justify-between items-start mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold mb-2">{{ item.name }}</h3>
                <div class="flex items-center gap-2 mb-3">
                  <span class="text-accent font-bold text-2xl">Tk {{ item.price }}</span>
                  <span v-if="item.oldPrice" class="text-gray-400 line-through text-sm">Tk {{ item.oldPrice }}</span>
                </div>
                <p class="text-sm text-gray-600 leading-relaxed mb-4">{{ item.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in item.tags"
                    :key="tag"
                    class="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
              <div class="ml-4">
                <img :src="item.image" :alt="item.name" class="w-28 h-28 object-cover rounded-xl shadow-md" />
              </div>
            </div>
            <button class="w-full bg-primary hover:bg-accent text-black hover:text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
              <i class="fa-solid fa-plus"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const activeCategory = ref('all');

const categories = [
  { id: 'all', name: 'All Items', count: 12 },
  { id: 'healthy', name: 'Healthy Food', count: 2 },
  { id: 'salad', name: 'Fresh Salad', count: 3 },
  { id: 'fiber', name: 'Natural Fiber', count: 2 },
  { id: 'nutritional', name: 'Nutritional Food', count: 2 },
  { id: 'heart', name: 'Protect Your Heart', count: 2 },
  { id: 'weight', name: 'Weight Control', count: 1 }
];

const menuItems = [
  {
    id: 1,
    name: 'Avocado Chicken Salad',
    price: 467,
    oldPrice: 549,
    category: 'salad',
    image: '/img/s1.jpg',
    description: 'Prepared with chicken, avocados, bell pepper, chopped vegetable, fresh greens and special dressing.',
    tags: ['High Protein', 'Fresh']
  },
  {
    id: 2,
    name: 'Chicken Caesar Salad',
    price: 450,
    oldPrice: 529,
    category: 'salad',
    image: '/img/s2.jpg',
    description: 'Prepared with chicken, egg, cabbage, lettuce, tomatoes & croutons with caesar dressing.',
    tags: ['Popular', 'Protein']
  },
  {
    id: 3,
    name: 'Protein Pack Salad',
    price: 416,
    oldPrice: 489,
    category: 'healthy',
    image: '/img/s3.jpg',
    description: 'Prepared with chicken, chickpea, carrot, tomato, capsicum, broccoli and special sauce.',
    tags: ['High Protein', 'Fiber']
  },
  {
    id: 4,
    name: 'Green Detox Salad',
    price: 350,
    oldPrice: null,
    category: 'fiber',
    image: '/img/m1.jpg',
    description: 'Fresh spinach, cucumber, celery, green apple with lemon dressing for natural detox.',
    tags: ['Detox', 'Low Cal']
  },
  {
    id: 5,
    name: 'Heart Healthy Bowl',
    price: 520,
    oldPrice: null,
    category: 'heart',
    image: '/img/m2.jpg',
    description: 'Omega-3 rich salmon, quinoa, avocado, walnuts designed for cardiovascular health.',
    tags: ['Omega-3', 'Heart']
  },
  {
    id: 6,
    name: 'Weight Loss Special',
    price: 380,
    oldPrice: 450,
    category: 'weight',
    image: '/img/m3.jpg',
    description: 'Low-calorie, high-protein grilled chicken with mixed greens and fat-free dressing.',
    tags: ['Low Cal', 'High Protein']
  },
  {
    id: 7,
    name: 'Nutritional Power Bowl',
    price: 495,
    oldPrice: null,
    category: 'nutritional',
    image: '/img/m4.jpg',
    description: 'Superfood blend with kale, berries, nuts, seeds and nutrient-rich dressing.',
    tags: ['Superfood', 'Vitamins']
  },
  {
    id: 8,
    name: 'Fiber Rich Veggie Mix',
    price: 320,
    oldPrice: null,
    category: 'fiber',
    image: '/img/m5.jpg',
    description: 'High-fiber vegetables, beans, lentils perfect for digestive health.',
    tags: ['High Fiber', 'Vegan']
  },
  {
    id: 9,
    name: 'Mediterranean Quinoa Bowl',
    price: 485,
    oldPrice: null,
    category: 'healthy',
    image: '/img/m6.jpg',
    description: 'Quinoa, chickpeas, feta, olives, tomatoes with olive oil dressing.',
    tags: ['Mediterranean', 'Healthy']
  },
  {
    id: 10,
    name: 'Antioxidant Berry Salad',
    price: 420,
    oldPrice: null,
    category: 'nutritional',
    image: '/img/ab1.jpg',
    description: 'Mixed berries, spinach, almonds packed with antioxidants and vitamins.',
    tags: ['Antioxidants', 'Vitamins']
  },
  {
    id: 11,
    name: 'Heart Guard Salmon Bowl',
    price: 580,
    oldPrice: 650,
    category: 'heart',
    image: '/img/ab2.jpg',
    description: 'Grilled salmon with heart-healthy vegetables and omega-rich dressing.',
    tags: ['Omega-3', 'Low Cholesterol']
  },
  {
    id: 12,
    name: 'Fresh Garden Delight',
    price: 340,
    oldPrice: null,
    category: 'salad',
    image: '/img/ab3.jpg',
    description: 'Crispy fresh vegetables straight from the garden with light vinaigrette.',
    tags: ['Fresh', 'Garden']
  }
];

const filteredMenuItems = computed(() => {
  let filtered = menuItems;
  
  // Filter by category
  if (activeCategory.value !== 'all') {
    filtered = filtered.filter(item => item.category === activeCategory.value);
  }
  
  return filtered;
});
</script>

<template>
  <div>
    <nav class="bg-navy-blue-600/10 backdrop-blur-sm py-8 px-4 lg:px-40 fixed top-0 left-0 right-0 z-50 shadow-lg border-b border-white/20">
      <div class="flex justify-between items-center">
        <div class="text-4xl font-bold cursor-pointer text-white" @click="scrollToSection('home')">
          <h3 class="flex items-center">
            Sa<i class="fa-sharp fa-solid fa-spoon text-orange-500 -rotate-45 -ml-1 text-3xl"></i>ads
          </h3>
        </div>
        <div>
          <ul class="flex items-center gap-12 text-lg">
            <li><a @click.prevent="scrollToSection('home')" href="#home" class="text-white hover:text-accent transition-colors cursor-pointer font-medium">Home</a></li>
            <li><a @click.prevent="scrollToSection('menu')" href="#menu" class="text-white hover:text-accent transition-colors cursor-pointer font-medium">Menu</a></li>
            <li><a @click.prevent="scrollToSection('salads')" href="#salads" class="text-white hover:text-accent transition-colors cursor-pointer font-medium">Salads</a></li>
            
            <!-- About Us Dropdown -->
            <li class="relative group">
              <a 
                href="#about" 
                class="text-white hover:text-accent transition-colors cursor-pointer font-medium flex items-center gap-1"
              >
                About Us
                <i class="fa-solid fa-chevron-down text-sm transition-transform duration-300 group-hover:rotate-180"></i>
              </a>
              
              <!-- Dropdown Menu -->
              <div class="absolute top-full left-0 mt-4 w-56 bg-white rounded-xl shadow-2xl border-2 border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <a 
                  @click.prevent="scrollToSection('about')" 
                  href="#about" 
                  class="block px-6 py-4 text-gray-800 hover:bg-accent hover:text-white transition-colors font-medium border-b border-gray-100"
                >
                  <i class="fa-solid fa-info-circle mr-2"></i> About
                </a>
                <a 
                  @click.prevent="scrollToSection('chef')" 
                  href="#chef" 
                  class="block px-6 py-4 text-gray-800 hover:bg-accent hover:text-white transition-colors font-medium border-b border-gray-100"
                >
                  <i class="fa-solid fa-hat-chef mr-2"></i> Our Chef
                </a>
                <a 
                  @click.prevent="scrollToSection('reviews')" 
                  href="#reviews" 
                  class="block px-6 py-4 text-gray-800 hover:bg-accent hover:text-white transition-colors font-medium"
                >
                  <i class="fa-solid fa-comments mr-2"></i> Guest Review
                </a>
              </div>
            </li>
            
            <li><a @click.prevent="scrollToSection('contact')" href="#contact" class="text-white hover:text-accent transition-colors cursor-pointer font-medium">Contact</a></li>
            <li><i @click="toggleSearch" class="fa-solid fa-magnifying-glass cursor-pointer text-white hover:text-accent transition-colors"></i></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Search Modal -->
    <div v-if="showSearch" class="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-start justify-center pt-20" @click="closeSearch">
      <div @click.stop class="bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-4 max-h-[80vh] overflow-hidden">
        <!-- Search Input -->
        <div class="p-6 border-b border-gray-200">
          <div class="relative">
            <input
              ref="searchInput"
              type="text"
              v-model="searchQuery"
              placeholder="Search for salads, healthy food..."
              class="w-full px-6 py-4 pl-14 pr-32 text-lg text-gray-900 border-2 border-primary rounded-full focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-400"
              @keyup.escape="closeSearch"
              @keyup.enter="goToSearchPage"
            />
            <i class="fa-solid fa-magnifying-glass absolute left-5 top-1/2 transform -translate-y-1/2 text-primary text-xl"></i>
            <button 
              @click="goToSearchPage"
              class="absolute right-16 top-1/2 transform -translate-y-1/2 bg-accent hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300"
            >
              Search
            </button>
            <button @click="closeSearch" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <i class="fa-solid fa-times text-xl"></i>
            </button>
          </div>
        </div>

        <!-- Search Results -->
        <div class="overflow-y-auto max-h-[60vh] p-6">
          <div v-if="searchQuery && filteredItems.length > 0">
            <div class="flex justify-between items-center mb-4">
              <p class="text-sm text-gray-600">Found {{ filteredItems.length }} items</p>
              <button 
                @click="goToSearchPage"
                class="text-accent hover:text-green-600 font-semibold text-sm flex items-center gap-1"
              >
                View All <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div class="space-y-4">
              <div
                v-for="item in filteredItems"
                :key="item.id"
                class="flex gap-4 p-4 border-2 border-gray-200 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <img :src="item.image" :alt="item.name" class="w-24 h-24 object-cover rounded-lg" />
                <div class="flex-1">
                  <h3 class="text-lg font-bold mb-1">{{ item.name }}</h3>
                  <div class="flex items-center gap-2 mb-2">
                    <span class="text-accent font-bold text-xl">Tk {{ item.price }}</span>
                    <span v-if="item.oldPrice" class="text-gray-400 line-through text-sm">Tk {{ item.oldPrice }}</span>
                  </div>
                  <p class="text-sm text-gray-600 mb-3 line-clamp-2">{{ item.description }}</p>
                  <div class="flex gap-2">
                    <span
                      v-for="tag in item.tags"
                      :key="tag"
                      class="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
                <div class="flex items-center">
                  <button class="bg-primary hover:bg-accent text-black hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2">
                    <i class="fa-solid fa-cart-plus"></i>
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="searchQuery && filteredItems.length === 0" class="text-center py-12">
            <i class="fa-solid fa-search text-6xl text-gray-300 mb-4"></i>
            <p class="text-xl text-gray-500">No items found for "{{ searchQuery }}"</p>
            <p class="text-sm text-gray-400 mt-2">Try searching for salads, chicken, healthy food, etc.</p>
          </div>
          <div v-else class="text-center py-12">
            <i class="fa-solid fa-utensils text-6xl text-gray-300 mb-4"></i>
            <p class="text-xl text-gray-500">Start typing to search our menu</p>
            <div class="mt-6 flex flex-wrap gap-2 justify-center">
              <span class="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600">Salads</span>
              <span class="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600">Healthy Food</span>
              <span class="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600">Chicken</span>
              <span class="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600">Detox</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue';

const showSearch = ref(false);
const searchQuery = ref('');
const searchInput = ref(null);

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const toggleSearch = () => {
  showSearch.value = !showSearch.value;
  if (showSearch.value) {
    nextTick(() => {
      searchInput.value?.focus();
    });
  } else {
    searchQuery.value = '';
  }
};

const closeSearch = () => {
  showSearch.value = false;
  searchQuery.value = '';
};

const goToSearchPage = () => {
  if (searchQuery.value.trim()) {
    navigateTo(`/search?q=${encodeURIComponent(searchQuery.value)}`);
    closeSearch();
  }
};

// Menu items data
const menuItems = [
  {
    id: 1,
    name: 'Avocado Chicken Salad',
    price: 467,
    oldPrice: 549,
    image: '/img/s1.jpg',
    description: 'Prepared with chicken, avocados, bell pepper, chopped vegetable, fresh greens and special dressing.',
    tags: ['High Protein', 'Fresh']
  },
  {
    id: 2,
    name: 'Chicken Caesar Salad',
    price: 450,
    oldPrice: 529,
    image: '/img/s2.jpg',
    description: 'Prepared with chicken, egg, cabbage, lettuce, tomatoes & croutons with caesar dressing.',
    tags: ['Popular', 'Protein']
  },
  {
    id: 3,
    name: 'Protein Pack Salad',
    price: 416,
    oldPrice: 489,
    image: '/img/s3.jpg',
    description: 'Prepared with chicken, chickpea, carrot, tomato, capsicum, broccoli and special sauce.',
    tags: ['High Protein', 'Fiber']
  },
  {
    id: 4,
    name: 'Green Detox Salad',
    price: 350,
    oldPrice: null,
    image: '/img/m1.jpg',
    description: 'Fresh spinach, cucumber, celery, green apple with lemon dressing for natural detox.',
    tags: ['Detox', 'Low Cal']
  },
  {
    id: 5,
    name: 'Heart Healthy Bowl',
    price: 520,
    oldPrice: null,
    image: '/img/m2.jpg',
    description: 'Omega-3 rich salmon, quinoa, avocado, walnuts designed for cardiovascular health.',
    tags: ['Omega-3', 'Heart']
  },
  {
    id: 6,
    name: 'Weight Loss Special',
    price: 380,
    oldPrice: 450,
    image: '/img/m3.jpg',
    description: 'Low-calorie, high-protein grilled chicken with mixed greens and fat-free dressing.',
    tags: ['Low Cal', 'High Protein']
  },
  {
    id: 7,
    name: 'Nutritional Power Bowl',
    price: 495,
    oldPrice: null,
    image: '/img/m4.jpg',
    description: 'Superfood blend with kale, berries, nuts, seeds and nutrient-rich dressing.',
    tags: ['Superfood', 'Vitamins']
  },
  {
    id: 8,
    name: 'Fiber Rich Veggie Mix',
    price: 320,
    oldPrice: null,
    image: '/img/m5.jpg',
    description: 'High-fiber vegetables, beans, lentils perfect for digestive health.',
    tags: ['High Fiber', 'Vegan']
  },
  {
    id: 9,
    name: 'Mediterranean Quinoa Bowl',
    price: 485,
    oldPrice: null,
    image: '/img/m6.jpg',
    description: 'Quinoa, chickpeas, feta, olives, tomatoes with olive oil dressing.',
    tags: ['Mediterranean', 'Healthy']
  },
  {
    id: 10,
    name: 'Antioxidant Berry Salad',
    price: 420,
    oldPrice: null,
    image: '/img/ab1.jpg',
    description: 'Mixed berries, spinach, almonds packed with antioxidants and vitamins.',
    tags: ['Antioxidants', 'Vitamins']
  },
  {
    id: 11,
    name: 'Heart Guard Salmon Bowl',
    price: 580,
    oldPrice: 650,
    image: '/img/ab2.jpg',
    description: 'Grilled salmon with heart-healthy vegetables and omega-rich dressing.',
    tags: ['Omega-3', 'Low Cholesterol']
  },
  {
    id: 12,
    name: 'Fresh Garden Delight',
    price: 340,
    oldPrice: null,
    image: '/img/ab3.jpg',
    description: 'Crispy fresh vegetables straight from the garden with light vinaigrette.',
    tags: ['Fresh', 'Garden']
  }
];

const filteredItems = computed(() => {
  if (!searchQuery.value) return [];
  
  return menuItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchQuery.value.toLowerCase()))
  );
});
</script>

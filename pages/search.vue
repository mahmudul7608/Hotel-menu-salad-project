<template>
  <div class="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
    <!-- Blur Background Effects -->
    <div class="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
    <Navigation />
    
    <div class="pt-32 pb-16 px-4 relative z-10">
      <div class="max-w-7xl mx-auto">
        <!-- Search Header -->
        <div class="mb-8 relative">
          <button 
            @click="navigateTo('/')"
            class="absolute -top-4 right-0 bg-red-500 hover:bg-red-600 text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-10"
            title="Close and go back to home"
          >
            <i class="fa-solid fa-times text-2xl group-hover:rotate-90 transition-transform duration-300"></i>
          </button>
          <h1 class="text-4xl font-bold mb-2 text-white">Search Results</h1>
          <p class="text-xl text-gray-300">
            <span v-if="isLoading" class="text-accent font-bold">Searching...</span>
            <span v-else class="text-white">
              Found <span class="text-accent font-bold">{{ filteredItems.length }}</span> items for 
              <span class="font-semibold text-white">"{{ searchQuery }}"</span>
            </span>
          </p>
          <p v-if="apiItems.length > 0" class="text-sm text-green-400 mt-2">
            <i class="fa-solid fa-check-circle"></i> Including {{ apiItems.length }} items from TheMealDB API
          </p>
        </div>

        <!-- Loading Indicator -->
        <div v-if="isLoading" class="text-center py-20">
          <div class="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-accent"></div>
          <p class="text-xl text-gray-300 mt-4">Searching for delicious meals...</p>
        </div>

        <!-- Search Results Grid -->
        <div v-if="!isLoading && filteredItems.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="item in filteredItems"
            :key="item.id"
            class="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 hover:shadow-xl hover:border-accent transition-all duration-300 transform hover:-translate-y-1"
          >
            <div class="flex justify-between items-start mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold mb-2 text-white">{{ item.name }}</h3>
                <div class="flex items-center gap-2 mb-3">
                  <span class="text-accent font-bold text-2xl">Tk {{ item.price }}</span>
                  <span v-if="item.oldPrice" class="text-gray-400 line-through text-sm">Tk {{ item.oldPrice }}</span>
                </div>
                <p class="text-sm text-gray-300 leading-relaxed mb-4">{{ item.description }}</p>
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
            <button 
              @click="addToCart(item)"
              class="w-full bg-accent hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <i class="fa-solid fa-plus"></i>
              Add to Cart
            </button>
          </div>
        </div>

        <!-- No Results -->
        <div v-else-if="!isLoading" class="text-center py-20">
          <i class="fa-solid fa-search text-8xl text-gray-500 mb-6"></i>
          <h2 class="text-3xl font-bold text-white mb-4">No items found</h2>
          <p class="text-xl text-gray-300 mb-8">Try searching for something else</p>
          <button 
            @click="navigateTo('/')"
            class="bg-accent hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>

    <!-- Cart Button -->
    <button 
      @click="showCart = true"
      class="fixed bottom-8 right-8 bg-accent text-white w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-40"
    >
      <i class="fa-solid fa-shopping-cart text-2xl"></i>
      <span v-if="cartItemCount > 0" class="absolute -top-2 -right-2 bg-red-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">{{ cartItemCount }}</span>
    </button>

    <!-- Cart Sidebar -->
    <div v-if="showCart" class="fixed inset-0 bg-black bg-opacity-50 z-50" @click="showCart = false">
      <div @click.stop class="fixed right-0 top-0 h-full w-full md:w-[450px] bg-white shadow-2xl transform transition-transform duration-300 flex flex-col">
        <!-- Cart Header -->
        <div class="bg-accent text-white p-6 flex justify-between items-center">
          <h2 class="text-2xl font-bold flex items-center gap-2">
            <i class="fa-solid fa-shopping-cart"></i>
            Your Cart ({{ cartItemCount }})
          </h2>
          <button @click="showCart = false" class="text-white hover:text-gray-200 text-2xl">
            <i class="fa-solid fa-times"></i>
          </button>
        </div>

        <!-- Cart Items -->
        <div class="flex-1 overflow-y-auto p-6">
          <div v-if="cart.length === 0" class="text-center py-12">
            <i class="fa-solid fa-shopping-cart text-6xl text-gray-300 mb-4"></i>
            <p class="text-xl text-gray-500">Your cart is empty</p>
            <p class="text-sm text-gray-400 mt-2">Add some delicious items!</p>
          </div>
          <div v-else class="space-y-4">
            <div v-for="item in cart" :key="item.id" class="bg-gray-50 rounded-lg p-4 flex gap-4">
              <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded-lg" />
              <div class="flex-1">
                <h3 class="font-bold text-lg mb-1">{{ item.name }}</h3>
                <p class="text-accent font-bold">Tk {{ item.price }}</p>
                <div class="flex items-center gap-3 mt-2">
                  <button @click="decreaseQuantity(item)" class="bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
                    <i class="fa-solid fa-minus text-sm"></i>
                  </button>
                  <span class="font-bold text-lg">{{ item.quantity }}</span>
                  <button @click="increaseQuantity(item)" class="bg-accent hover:bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                    <i class="fa-solid fa-plus text-sm"></i>
                  </button>
                  <button @click="removeFromCart(item)" class="ml-auto text-red-500 hover:text-red-700">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Cart Summary -->
        <div v-if="cart.length > 0" class="border-t-2 border-gray-200 p-6 bg-gray-50">
          <div class="space-y-3 mb-4">
            <div class="flex justify-between text-lg">
              <span class="text-gray-700">Subtotal:</span>
              <span class="font-semibold">Tk {{ subtotal.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-lg">
              <span class="text-gray-700">VAT (15%):</span>
              <span class="font-semibold">Tk {{ vat.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-lg">
              <span class="text-gray-700">Service Charge (5%):</span>
              <span class="font-semibold">Tk {{ serviceCharge.toFixed(2) }}</span>
            </div>
            <div class="border-t-2 border-gray-300 pt-3 flex justify-between text-2xl font-bold">
              <span>Total:</span>
              <span class="text-accent">Tk {{ total.toFixed(2) }}</span>
            </div>
          </div>
          <button class="w-full bg-accent hover:bg-green-600 text-white font-bold py-4 rounded-lg text-lg transition-all duration-300 flex items-center justify-center gap-2">
            <i class="fa-solid fa-check-circle"></i>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, reactive, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const searchQuery = ref('');
const showCart = ref(false);
const cart = reactive([]);
const apiItems = ref([]);
const isLoading = ref(false);
const apiError = ref('');

// Fetch meals from TheMealDB API
const fetchMealsFromAPI = async (query) => {
  if (!query) return;
  
  isLoading.value = true;
  apiError.value = '';
  
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`);
    const data = await response.json();
    
    if (data.meals && data.meals.length > 0) {
      // Transform API data to match our item format
      apiItems.value = data.meals.map((meal, index) => ({
        id: `api-${meal.idMeal}`,
        name: meal.strMeal,
        price: Math.floor(Math.random() * (600 - 300) + 300), // Random price between 300-600
        oldPrice: null,
        category: meal.strCategory.toLowerCase(),
        image: meal.strMealThumb,
        description: meal.strInstructions ? meal.strInstructions.substring(0, 150) + '...' : 'Delicious meal prepared with fresh ingredients.',
        tags: [meal.strCategory, meal.strArea].filter(Boolean)
      }));
    } else {
      apiItems.value = [];
    }
  } catch (error) {
    console.error('Error fetching meals:', error);
    apiError.value = 'Failed to fetch meals from API';
    apiItems.value = [];
  } finally {
    isLoading.value = false;
  }
};

// Get search query from URL and fetch API data
onMounted(() => {
  searchQuery.value = route.query.q || '';
  if (searchQuery.value) {
    fetchMealsFromAPI(searchQuery.value);
  }
});

// Watch for route changes
watch(() => route.query.q, (newQuery) => {
  searchQuery.value = newQuery || '';
  if (searchQuery.value) {
    fetchMealsFromAPI(searchQuery.value);
  }
});

// Menu items data (same as in Menu.vue and Navigation.vue)
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

// Combine API items with local menu items
const allItems = computed(() => {
  return [...apiItems.value, ...menuItems];
});

// Filter items based on search query
const filteredItems = computed(() => {
  if (!searchQuery.value) return allItems.value;
  
  const query = searchQuery.value.toLowerCase();
  return allItems.value.filter(item =>
    item.name.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query) ||
    item.tags.some(tag => tag.toLowerCase().includes(query)) ||
    item.category.toLowerCase().includes(query)
  );
});

// Cart Functions
const addToCart = (item) => {
  const existingItem = cart.find(cartItem => cartItem.id === item.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
};

const increaseQuantity = (item) => {
  item.quantity++;
};

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--;
  } else {
    removeFromCart(item);
  }
};

const removeFromCart = (item) => {
  const index = cart.findIndex(cartItem => cartItem.id === item.id);
  if (index !== -1) {
    cart.splice(index, 1);
  }
};

// Cart Calculations
const cartItemCount = computed(() => {
  return cart.reduce((total, item) => total + item.quantity, 0);
});

const subtotal = computed(() => {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
});

const vat = computed(() => {
  return subtotal.value * 0.15; // 15% VAT
});

const serviceCharge = computed(() => {
  return subtotal.value * 0.05; // 5% Service Charge
});

const total = computed(() => {
  return subtotal.value + vat.value + serviceCharge.value;
});
</script>

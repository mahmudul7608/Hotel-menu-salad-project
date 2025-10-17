<template>
  <section id="menu" class="bg-white py-16 px-4 relative">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8">
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
            @click="setActiveCategory(category.id)"
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
            v-for="item in paginatedItems"
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
            <button 
              @click="addToCart(item)"
              class="w-full bg-primary hover:bg-accent text-black hover:text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <i class="fa-solid fa-plus"></i>
              Add to Cart
            </button>
          </div>
        </div>

        <!-- Load More Button -->
        <div v-if="hasMoreItems" class="text-center mt-12">
          <button 
            @click="loadMore"
            class="group bg-gradient-to-r from-accent to-green-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <i class="fa-solid fa-plus-circle text-2xl"></i>
            Load More Items
            <i class="fa-solid fa-arrow-down group-hover:translate-y-1 transition-transform"></i>
          </button>
          <p class="text-gray-600 mt-4">
            Showing <span class="font-bold text-accent">{{ paginatedItems.length }}</span> of 
            <span class="font-bold">{{ filteredMenuItems.length }}</span> items
          </p>
        </div>

        <!-- All Items Loaded Message -->
        <div v-else-if="filteredMenuItems.length > 0" class="text-center mt-12">
          <div class="inline-flex items-center gap-2 bg-green-50 text-accent px-6 py-3 rounded-full border-2 border-accent">
            <i class="fa-solid fa-check-circle text-xl"></i>
            <span class="font-semibold">All items loaded ({{ filteredMenuItems.length }} total)</span>
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
    </div>
  </section>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';

const activeCategory = ref('all');
const showCart = ref(false);
const cart = reactive([]);
const itemsPerPage = 8;
const currentPage = ref(1);

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

// Paginated items - show only items up to current page
const paginatedItems = computed(() => {
  const endIndex = currentPage.value * itemsPerPage;
  return filteredMenuItems.value.slice(0, endIndex);
});

// Check if there are more items to load
const hasMoreItems = computed(() => {
  return paginatedItems.value.length < filteredMenuItems.value.length;
});

// Load more items
const loadMore = () => {
  currentPage.value++;
};

// Reset pagination when category changes
const setActiveCategory = (categoryId) => {
  activeCategory.value = categoryId;
  currentPage.value = 1;
};

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

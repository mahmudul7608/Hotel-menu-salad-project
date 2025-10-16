<template>
  <section id="reviews" class="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-16 px-4 lg:px-28 relative overflow-hidden">
    <!-- Decorative Background Elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl"></div>
    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-5xl lg:text-6xl font-bold mb-4">
          What Our <span class="text-accent">Customers Say</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Don't just take our word for it. Here's what our valued customers have to say about their experience.
        </p>
      </div>

      <!-- Reviews Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="review in reviews" :key="review.id" class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative">
          <!-- Quote Icon -->
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
            <i class="fa-solid fa-quote-left text-white text-xl"></i>
          </div>
          
          <!-- Stars -->
          <div class="flex gap-1 text-yellow-500 mb-4">
            <i v-for="n in review.rating" :key="n" class="fa-solid fa-star"></i>
            <i v-for="n in (5 - review.rating)" :key="'empty-'+n" class="fa-regular fa-star"></i>
          </div>
          
          <!-- Review Title -->
          <h3 class="text-2xl font-bold mb-3 text-gray-800">{{ review.title }}</h3>
          
          <!-- Review Text -->
          <p class="text-gray-600 leading-relaxed mb-6">{{ review.text }}</p>
          
          <!-- Reviewer Info -->
          <div class="flex items-center gap-4 pt-4 border-t border-gray-200">
            <img :src="review.image" alt="Reviewer" class="w-14 h-14 rounded-full object-cover border-2 border-accent" />
            <div>
              <h4 class="font-bold text-gray-800">{{ review.author }}</h4>
              <p class="text-sm text-gray-500">{{ review.role }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        <div class="bg-white border-2 border-green-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center">
          <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <i class="fa-solid fa-users text-accent text-xl"></i>
          </div>
          <h3 class="text-4xl font-bold text-accent mb-2">{{ statsCustomers }}K+</h3>
          <p class="text-gray-600 font-semibold text-sm uppercase tracking-wide">Happy Customers</p>
        </div>
        <div class="bg-white border-2 border-yellow-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center">
          <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <i class="fa-solid fa-star text-yellow-600 text-xl"></i>
          </div>
          <h3 class="text-4xl font-bold text-yellow-600 mb-2">{{ statsRating }}</h3>
          <p class="text-gray-600 font-semibold text-sm uppercase tracking-wide">Average Rating</p>
        </div>
        <div class="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center">
          <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <i class="fa-solid fa-comments text-blue-600 text-xl"></i>
          </div>
          <h3 class="text-4xl font-bold text-blue-600 mb-2">{{ statsReviews }}K+</h3>
          <p class="text-gray-600 font-semibold text-sm uppercase tracking-wide">Reviews</p>
        </div>
        <div class="bg-white border-2 border-pink-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center">
          <div class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <i class="fa-solid fa-heart text-pink-600 text-xl"></i>
          </div>
          <h3 class="text-4xl font-bold text-pink-600 mb-2">{{ statsSatisfaction }}%</h3>
          <p class="text-gray-600 font-semibold text-sm uppercase tracking-wide">Satisfaction</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const statsCustomers = ref(0);
const statsRating = ref(0);
const statsReviews = ref(0);
const statsSatisfaction = ref(0);

onMounted(() => {
  setTimeout(() => {
    const duration = 2000;
    const frameRate = 16;
    
    // Animate Customers
    let customerCount = 0;
    const customerIncrement = 50 / (duration / frameRate);
    const customerTimer = setInterval(() => {
      customerCount += customerIncrement;
      if (customerCount >= 50) {
        statsCustomers.value = 50;
        clearInterval(customerTimer);
      } else {
        statsCustomers.value = Math.floor(customerCount);
      }
    }, frameRate);
    
    // Animate Rating
    let ratingCount = 0;
    const ratingIncrement = 4.9 / (duration / frameRate);
    const ratingTimer = setInterval(() => {
      ratingCount += ratingIncrement;
      if (ratingCount >= 4.9) {
        statsRating.value = '4.9';
        clearInterval(ratingTimer);
      } else {
        statsRating.value = ratingCount.toFixed(1);
      }
    }, frameRate);
    
    // Animate Reviews
    let reviewCount = 0;
    const reviewIncrement = 10 / (duration / frameRate);
    const reviewTimer = setInterval(() => {
      reviewCount += reviewIncrement;
      if (reviewCount >= 10) {
        statsReviews.value = 10;
        clearInterval(reviewTimer);
      } else {
        statsReviews.value = Math.floor(reviewCount);
      }
    }, frameRate);
    
    // Animate Satisfaction
    let satisfactionCount = 0;
    const satisfactionIncrement = 98 / (duration / frameRate);
    const satisfactionTimer = setInterval(() => {
      satisfactionCount += satisfactionIncrement;
      if (satisfactionCount >= 98) {
        statsSatisfaction.value = 98;
        clearInterval(satisfactionTimer);
      } else {
        statsSatisfaction.value = Math.floor(satisfactionCount);
      }
    }, frameRate);
  }, 300);
});

const reviews = [
  {
    id: 1,
    title: 'Best Healthy Food Ever!',
    text: 'I\'ve been ordering from Salads for 6 months now and I\'ve lost 15kg! The salads are always fresh, delicious, and perfectly portioned. The Avocado Chicken Salad is my absolute favorite!',
    author: 'Sarah Rahman',
    role: 'Fitness Enthusiast',
    image: '/img/testi1.jpg',
    rating: 5
  },
  {
    id: 2,
    title: 'Amazing Taste & Quality',
    text: 'As a nutritionist, I\'m very particular about what I eat. Salads exceeds all my expectations with their organic ingredients and balanced nutrition. Highly recommend to all my clients!',
    author: 'Dr. Ahmed Hossain',
    role: 'Nutritionist',
    image: '/img/testi3.jpg',
    rating: 5
  },
  {
    id: 3,
    title: 'Game Changer for My Diet',
    text: 'The variety is incredible! Every salad is a new adventure. The Mediterranean Quinoa Bowl helped me stick to my healthy eating goals. Plus, the delivery is always on time and packaging is eco-friendly.',
    author: 'Fatima Khan',
    role: 'Working Professional',
    image: '/img/ab1.jpg',
    rating: 5
  },
  {
    id: 4,
    title: 'Fresh & Delicious!',
    text: 'I was skeptical about ordering salads online, but Salads proved me wrong. Everything arrives fresh and crispy. The portion sizes are generous and the prices are very reasonable.',
    author: 'Karim Abdullah',
    role: 'Regular Customer',
    image: '/img/ab2.jpg',
    rating: 5
  },
  {
    id: 5,
    title: 'Perfect for Office Lunch',
    text: 'Our entire office orders from here weekly! The corporate packages are perfect for team lunches. Healthy, tasty, and everyone gets to choose their favorite. Customer service is excellent too!',
    author: 'Nusrat Jahan',
    role: 'Corporate Manager',
    image: '/img/ab3.jpg',
    rating: 5
  },
  {
    id: 6,
    title: 'Love the Innovation',
    text: 'The seasonal specials keep things exciting. Last month\'s Berry Blast Salad was phenomenal! Great to see a restaurant that actually cares about health without compromising on taste.',
    author: 'Rafiq Hassan',
    role: 'Food Blogger',
    image: '/img/testi1.jpg',
    rating: 4
  }
];
</script>

<template>
  <section
    id="reviews"
    class="bg-transparent py-20 px-4 lg:px-28 relative overflow-hidden"
  >
    <!-- Blur Background Effects -->
    <div
      class="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl"
    ></div>
    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-5xl lg:text-6xl font-bold mb-4">
          What Our <span class="text-accent">Customers Say</span>
        </h1>
      </div>

      <!-- Reviews Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="review in reviews"
          :key="review.id"
          class="bg-[#1a1f35]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden"
        >
          <!-- Gradient Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>

          <div class="relative z-10">
            <!-- Quote Icon -->
            <div
              class="w-10 h-10 bg-accent/20 border border-accent/40 rounded-lg flex items-center justify-center mb-4"
            >
              <i class="fa-solid fa-quote-left text-accent text-lg"></i>
            </div>

            <!-- Review Title -->
            <h3
              class="text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors"
            >
              {{ review.title }}
            </h3>

            <!-- Stars -->
            <div class="flex gap-1 text-yellow-400 mb-3">
              <i
                v-for="n in review.rating"
                :key="n"
                class="fa-solid fa-star text-sm"
              ></i>
              <i
                v-for="n in 5 - review.rating"
                :key="'empty-' + n"
                class="fa-regular fa-star text-sm"
              ></i>
            </div>

            <!-- Review Text -->
            <p class="text-gray-400 text-sm leading-relaxed mb-5">
              {{ review.text }}
            </p>

            <!-- Reviewer Info -->
            <div class="flex items-center gap-3 pt-4 border-t border-white/10">
              <img
                :src="review.image"
                alt="Reviewer"
                class="w-12 h-12 rounded-full object-cover border-2 border-accent/40"
              />
              <div>
                <h4 class="font-semibold text-white text-sm">
                  {{ review.author }}
                </h4>
                <p class="text-xs text-gray-500">{{ review.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        <div
          class="bg-[#1a1f35]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-accent/50 transform hover:-translate-y-1 transition-all duration-300 text-center group relative overflow-hidden"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <div class="relative z-10">
            <div
              class="w-14 h-14 bg-accent/20 border border-accent/40 rounded-xl flex items-center justify-center mx-auto mb-3"
            >
              <i class="fa-solid fa-users text-accent text-2xl"></i>
            </div>
            <h3 class="text-4xl font-bold text-white mb-2">
              {{ statsCustomers }}K+
            </h3>
            <p
              class="text-gray-400 font-medium text-xs uppercase tracking-wider"
            >
              Happy Customers
            </p>
          </div>
        </div>
        <div
          class="bg-[#1a1f35]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-yellow-500/50 transform hover:-translate-y-1 transition-all duration-300 text-center group relative overflow-hidden"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <div class="relative z-10">
            <div
              class="w-14 h-14 bg-yellow-500/20 border border-yellow-500/40 rounded-xl flex items-center justify-center mx-auto mb-3"
            >
              <i class="fa-solid fa-star text-yellow-500 text-2xl"></i>
            </div>
            <h3 class="text-4xl font-bold text-white mb-2">
              {{ statsRating }}
            </h3>
            <p
              class="text-gray-400 font-medium text-xs uppercase tracking-wider"
            >
              Average Rating
            </p>
          </div>
        </div>
        <div
          class="bg-[#1a1f35]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-500/50 transform hover:-translate-y-1 transition-all duration-300 text-center group relative overflow-hidden"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <div class="relative z-10">
            <div
              class="w-14 h-14 bg-blue-500/20 border border-blue-500/40 rounded-xl flex items-center justify-center mx-auto mb-3"
            >
              <i class="fa-solid fa-comments text-blue-500 text-2xl"></i>
            </div>
            <h3 class="text-4xl font-bold text-white mb-2">
              {{ statsReviews }}K+
            </h3>
            <p
              class="text-gray-400 font-medium text-xs uppercase tracking-wider"
            >
              Reviews
            </p>
          </div>
        </div>
        <div
          class="bg-[#1a1f35]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-pink-500/50 transform hover:-translate-y-1 transition-all duration-300 text-center group relative overflow-hidden"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <div class="relative z-10">
            <div
              class="w-14 h-14 bg-pink-500/20 border border-pink-500/40 rounded-xl flex items-center justify-center mx-auto mb-3"
            >
              <i class="fa-solid fa-heart text-pink-500 text-2xl"></i>
            </div>
            <h3 class="text-4xl font-bold text-white mb-2">
              {{ statsSatisfaction }}%
            </h3>
            <p
              class="text-gray-400 font-medium text-xs uppercase tracking-wider"
            >
              Satisfaction
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

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
        statsRating.value = "4.9";
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
    title: "Best Healthy Food Ever!",
    text: "I've been ordering from Salads for 6 months now and I've lost 15kg! The salads are always fresh, delicious, and perfectly portioned. The Avocado Chicken Salad is my absolute favorite!",
    author: "Sarah Rahman",
    role: "Fitness Enthusiast",
    image: "/img/testi1.jpg",
    rating: 5,
  },
  {
    id: 2,
    title: "Amazing Taste & Quality",
    text: "As a nutritionist, I'm very particular about what I eat. Salads exceeds all my expectations with their organic ingredients and balanced nutrition. Highly recommend to all my clients!",
    author: "Dr. Ahmed Hossain",
    role: "Nutritionist",
    image: "/img/testi3.jpg",
    rating: 5,
  },
  {
    id: 3,
    title: "Game Changer for My Diet",
    text: "The variety is incredible! Every salad is a new adventure. The Mediterranean Quinoa Bowl helped me stick to my healthy eating goals. Plus, the delivery is always on time and packaging is eco-friendly.",
    author: "Fatima Khan",
    role: "Working Professional",
    image: "/img/ab1.jpg",
    rating: 5,
  },
];
</script>

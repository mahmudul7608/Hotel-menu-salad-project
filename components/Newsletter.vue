<template>
  <section class="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-100 relative overflow-hidden">
    <!-- Decorative Elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl"></div>
    
    <div class="max-w-5xl mx-auto text-center relative z-10">
      <!-- Icon -->
      <div class="mb-6 flex justify-center">
        <div class="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg">
          <i class="fa-solid fa-envelope text-white text-3xl"></i>
        </div>
      </div>
      
      <!-- Title -->
      <h1 class="text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
        Subscribe to Our <span class="text-accent">Newsletter</span>
      </h1>
      <p class="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
        Get exclusive deals, healthy recipes, and special discounts delivered to your inbox!
      </p>
      
      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="max-w-2xl mx-auto">
        <div class="flex flex-col sm:flex-row gap-4 bg-white rounded-2xl p-2 shadow-lg border-2 border-gray-200">
          <div class="flex-1 relative">
            <i class="fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
            <input
              type="email"
              v-model="email"
              placeholder="Enter your email address"
              required
              class="w-full px-12 py-4 text-lg bg-gray-50 text-gray-800 placeholder-gray-400 outline-none rounded-xl border-2 border-transparent focus:border-accent focus:bg-white transition-all"
            />
          </div>
          <button
            type="submit"
            class="group bg-accent text-white px-10 py-4 text-lg font-bold rounded-xl hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            <i class="fa-solid fa-paper-plane"></i>
            Subscribe
            <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>
      </form>
      
      <!-- Features -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
        <div class="bg-white rounded-xl p-6 shadow-lg border-2 border-green-200 hover:shadow-xl transition-all">
          <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <i class="fa-solid fa-gift text-accent text-2xl"></i>
          </div>
          <h3 class="text-gray-800 font-bold text-lg mb-2">Exclusive Offers</h3>
          <p class="text-gray-600 text-sm">Special discounts for subscribers</p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-lg border-2 border-orange-200 hover:shadow-xl transition-all">
          <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <i class="fa-solid fa-utensils text-orange-600 text-2xl"></i>
          </div>
          <h3 class="text-gray-800 font-bold text-lg mb-2">Healthy Recipes</h3>
          <p class="text-gray-600 text-sm">Weekly recipes from our chefs</p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-200 hover:shadow-xl transition-all">
          <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <i class="fa-solid fa-bell text-blue-600 text-2xl"></i>
          </div>
          <h3 class="text-gray-800 font-bold text-lg mb-2">Latest Updates</h3>
          <p class="text-gray-600 text-sm">New menu items first</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

const handleSubmit = () => {
  alert(`Subscribed with email: ${email.value}`);
  email.value = '';
};
</script>

<template>
  <section id="about" class="py-16 px-4 lg:px-40 bg-[#0a0a0a] relative overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Images Section -->
        <div class="relative">
          <!-- Decorative Background Circle -->
          <div class="absolute -top-10 -left-10 w-40 h-40 bg-accent opacity-20 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-400 opacity-20 rounded-full blur-3xl"></div>
          
          <div class="grid grid-cols-2 gap-6 relative z-10">
            <!-- First Image - Enhanced Design -->
            <div class="relative group">
              <div class="absolute inset-0 bg-gradient-to-br from-accent to-green-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <img src="/img/ab1.jpg" alt="Fresh Salad Preparation" class="relative rounded-2xl w-full h-auto shadow-2xl border-4 border-white transform group-hover:scale-105 transition-all duration-300" />
              <!-- Image Badge -->
              <div class="absolute -bottom-4 -right-4 bg-accent text-white px-6 py-3 rounded-full shadow-xl font-bold text-lg">
                <i class="fa-solid fa-star text-yellow-300"></i> Fresh Daily
              </div>
            </div>
            
            <!-- Second Image - Enhanced Design -->
            <div class="mt-12 relative group">
              <div class="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
              <img src="/img/ab2.jpg" alt="Healthy Bowl" class="relative rounded-2xl w-full h-auto shadow-2xl border-4 border-white transform group-hover:scale-105 transition-all duration-300" />
              <!-- Image Badge -->
              <div class="absolute -top-4 -left-4 bg-white px-6 py-3 rounded-full shadow-xl font-bold text-lg text-accent border-2 border-accent">
                100% Organic
              </div>
            </div>
          </div>
        </div>
        
        <!-- Content Section -->
        <div class="space-y-6">
          <div class="inline-block">
            <h4 class="text-2xl font-bold text-accent bg-green-50 px-6 py-2 rounded-full border-2 border-accent">
              <i class="fa-solid fa-calendar-check"></i> Since 2006
            </h4>
          </div>
          <h1 class="text-5xl lg:text-6xl font-bold leading-tight text-white">
            We Have <span class="text-accent">18+</span> Years of<br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Excellence</span> in Healthy Cuisine
          </h1>
          <p class="text-lg leading-relaxed text-gray-300">
            From our humble beginnings in 2006, we've been dedicated to revolutionizing healthy eating. 
            Our passion is crafting nutritious, delicious salads using only the freshest organic ingredients 
            sourced from local farms. Every bowl tells a story of health, flavor, and sustainability.
          </p>
          <p class="text-lg leading-relaxed text-gray-300">
            With award-winning chefs and nutritionists on our team, we've created over 50+ unique salad 
            combinations that don't just taste amazing—they transform lives. Join thousands of satisfied 
            customers who've made healthy eating a delightful daily habit with Salads.
          </p>
          
          <!-- Stats Section -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6">
            <!-- Happy Customers Card -->
            <div class="group relative overflow-hidden p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl shadow-lg hover:shadow-xl hover:border-accent transform hover:-translate-y-1 transition-all duration-300">
              <div class="relative z-10 text-center">
                <div class="mb-3 flex justify-center">
                  <div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                    <i class="fa-solid fa-users text-accent text-2xl"></i>
                  </div>
                </div>
                <h3 class="text-5xl font-bold text-accent mb-2">{{ happyCustomers }}K+</h3>
                <p class="text-gray-300 font-semibold text-sm uppercase tracking-wide">Happy Customers</p>
              </div>
            </div>

            <!-- Unique Recipes Card -->
            <div class="group relative overflow-hidden p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl shadow-lg hover:shadow-xl hover:border-orange-500 transform hover:-translate-y-1 transition-all duration-300">
              <div class="relative z-10 text-center">
                <div class="mb-3 flex justify-center">
                  <div class="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center">
                    <i class="fa-solid fa-utensils text-orange-600 text-2xl"></i>
                  </div>
                </div>
                <h3 class="text-5xl font-bold text-orange-600 mb-2">{{ uniqueRecipes }}+</h3>
                <p class="text-gray-300 font-semibold text-sm uppercase tracking-wide">Unique Recipes</p>
              </div>
            </div>

            <!-- Organic Fresh Card -->
            <div class="group relative overflow-hidden p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl shadow-lg hover:shadow-xl hover:border-blue-500 transform hover:-translate-y-1 transition-all duration-300">
              <div class="relative z-10 text-center">
                <div class="mb-3 flex justify-center">
                  <div class="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center">
                    <i class="fa-solid fa-leaf text-emerald-600 text-2xl"></i>
                  </div>
                </div>
                <h3 class="text-5xl font-bold text-emerald-600 mb-2">{{ organicFresh }}%</h3>
                <p class="text-gray-300 font-semibold text-sm uppercase tracking-wide">100% Organic</p>
              </div>
            </div>
          </div>
          
          <div class="pt-4 flex items-center gap-4">
            <img src="/img/sign.png" alt="Signature" class="h-16 opacity-80" />
            <div>
              <p class="font-bold text-lg text-white">Chef Abdul Rahman</p>
              <p class="text-sm text-gray-300">Founder & Head Chef</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const happyCustomers = ref(0);
const uniqueRecipes = ref(0);
const organicFresh = ref(0);

onMounted(() => {
  // Start counting animations when component is mounted
  setTimeout(() => {
    const duration = 2000;
    const frameRate = 16;
    
    // Animate Happy Customers
    let customerCount = 0;
    const customerIncrement = 50 / (duration / frameRate);
    const customerTimer = setInterval(() => {
      customerCount += customerIncrement;
      if (customerCount >= 50) {
        happyCustomers.value = 50;
        clearInterval(customerTimer);
      } else {
        happyCustomers.value = Math.floor(customerCount);
      }
    }, frameRate);
    
    // Animate Unique Recipes
    let recipeCount = 0;
    const recipeIncrement = 50 / (duration / frameRate);
    const recipeTimer = setInterval(() => {
      recipeCount += recipeIncrement;
      if (recipeCount >= 50) {
        uniqueRecipes.value = 50;
        clearInterval(recipeTimer);
      } else {
        uniqueRecipes.value = Math.floor(recipeCount);
      }
    }, frameRate);
    
    // Animate Organic Fresh
    let organicCount = 0;
    const organicIncrement = 100 / (duration / frameRate);
    const organicTimer = setInterval(() => {
      organicCount += organicIncrement;
      if (organicCount >= 100) {
        organicFresh.value = 100;
        clearInterval(organicTimer);
      } else {
        organicFresh.value = Math.floor(organicCount);
      }
    }, frameRate);
  }, 300);
});
</script>

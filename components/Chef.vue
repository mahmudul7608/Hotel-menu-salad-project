<template>
  <section id="chef" class="py-16 px-4 lg:px-40 bg-white">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-5xl lg:text-6xl font-bold mb-4">
          Meet Our <span class="text-accent">Expert Chefs</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Our award-winning culinary team brings decades of experience in creating healthy, 
          delicious salads that delight your taste buds and nourish your body.
        </p>
      </div>

      <!-- Chefs Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Chef 1 -->
        <div class="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="relative overflow-hidden">
            <img src="/img/team1.jpg" alt="Chef Rahman" class="w-full h-72 object-cover object-[center_30%] transform group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <div class="flex gap-3">
                <a href="#" class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#" class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-1 text-gray-800">Chef Abdul Rahman</h3>
            <p class="text-accent font-semibold mb-3">Head Chef & Founder</p>
            <p class="text-gray-600 mb-4">20+ years of culinary expertise specializing in Mediterranean and healthy cuisine. Certified nutritionist.</p>
            <div class="flex items-center gap-2 text-yellow-500">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <span class="text-gray-600 ml-2 text-sm">Master Chef</span>
            </div>
          </div>
        </div>

        <!-- Chef 2 -->
        <div class="group bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="relative overflow-hidden">
            <img src="/img/team2.jpg" alt="Chef Sarah" class="w-full h-72 object-cover object-center transform group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <div class="flex gap-3">
                <a href="#" class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#" class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-1 text-gray-800">Chef Sarah Ahmed</h3>
            <p class="text-orange-600 font-semibold mb-3">Sous Chef & Nutritionist</p>
            <p class="text-gray-600 mb-4">15+ years experience in organic cuisine. Specialized in creating balanced, nutrient-rich salad combinations.</p>
            <div class="flex items-center gap-2 text-yellow-500">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <span class="text-gray-600 ml-2 text-sm">Expert Chef</span>
            </div>
          </div>
        </div>

        <!-- Chef 3 -->
        <div class="group bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="relative overflow-hidden">
            <img src="/img/team3.jpg" alt="Chef Karim" class="w-full h-72 object-cover object-[center_20%] transform group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <div class="flex gap-3">
                <a href="#" class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#" class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-1 text-gray-800">Chef Karim Hasan</h3>
            <p class="text-pink-600 font-semibold mb-3">Salad Specialist</p>
            <p class="text-gray-600 mb-4">12+ years crafting innovative salad recipes. Expert in Asian fusion and tropical flavor combinations.</p>
            <div class="flex items-center gap-2 text-yellow-500">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-alt"></i>
              <span class="text-gray-600 ml-2 text-sm">Creative Chef</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<template>
  <section
    id="home"
    class="min-h-screen flex items-center px-4 lg:px-20 pt-20 bg-[#0a0a0a] relative overflow-hidden"
  >
    <!-- Blur Background Effects -->
    <div
      class="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"
    ></div>

    <!-- Main Content Container -->
    <div
      class="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-16 relative z-10"
    >
      <!-- Left Side - Plate with Floating Decorations -->
      <div class="lg:w-1/2 flex justify-center items-center relative">
        <!-- Floating Food Decorations -->
        <div class="absolute top-0 right-10 animate-float">
          <div class="w-20 h-20">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1202/1202667.png"
              alt="Tomato"
              class="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <div class="absolute top-16 right-0 animate-float-delayed">
          <div class="w-16 h-16">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3082/3082038.png"
              alt="Chili"
              class="w-full h-full object-contain drop-shadow-2xl transform rotate-45"
            />
          </div>
        </div>

        <div class="absolute top-32 right-5 animate-float">
          <div class="w-14 h-14">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3082/3082038.png"
              alt="Chili"
              class="w-full h-full object-contain drop-shadow-2xl transform -rotate-12"
            />
          </div>
        </div>

        <div class="absolute bottom-20 -left-5 animate-float-delayed">
          <div class="w-24 h-24">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2153/2153788.png"
              alt="Garlic"
              class="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <div class="absolute bottom-5 left-10 animate-float">
          <div class="w-20 h-20">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1202/1202667.png"
              alt="Mushroom"
              class="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <!-- Main Plate with Spinning Animation -->
        <div class="relative">
          <!-- Glow Effect Behind Plate -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-2xl animate-pulse"
          ></div>

          <div
            class="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] rounded-full shadow-2xl flex items-center justify-center"
          >
            <div
              class="w-full h-full rounded-full overflow-hidden shadow-2xl animate-spin-slow"
            >
              <img
                src="/img/banner1.png"
                alt="Fresh Salad"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side - Text Content -->
      <div class="lg:w-1/2 text-center lg:text-left space-y-6">
        <!-- Main Heading -->
        <div class="space-y-2">
          <h1
            class="text-5xl sm:text-6xl lg:text-7xl font-bold text-yellow-500 leading-tight"
          >
            Fresh Healthy
          </h1>
          <h2
            class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Delicious Salads
          </h2>
        </div>

        <!-- Description -->
        <p
          class="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
        >
          Healthy foods to eat everyday. Tasty and healthy vegetables salad with
          fresh tomatoes, coriander and more.
        </p>

        <!-- Order Now Button -->
        <div class="pt-4">
          <button
            @click="scrollToMenu"
            class="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
          >
            <i class="fa-solid fa-shopping-cart"></i>
            Order Now
            <i
              class="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform"
            ></i>
          </button>
        </div>

        <!-- Stats or Tags -->
        <div
          class="flex flex-wrap items-center gap-4 justify-center lg:justify-start pt-6"
        >
          <div
            class="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full"
          >
            <i class="fa-solid fa-star text-yellow-500"></i>
            <span class="text-white font-semibold">4.9 Rating</span>
          </div>
          <div
            class="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full"
          >
            <i class="fa-solid fa-users text-green-500"></i>
            <span class="text-white font-semibold">50K+ Customers</span>
          </div>
          <div
            class="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full"
          >
            <i class="fa-solid fa-leaf text-emerald-500"></i>
            <span class="text-white font-semibold">100% Organic</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative Bottom Line -->
    <div
      class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent"
    ></div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const searchQuery = ref("");

const scrollToMenu = () => {
  const element = document.getElementById("menu");
  if (element) {
    const navHeight = 120; // Approximate navbar height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    // Scroll to menu section and filter items
    scrollToMenu();
    // You can emit an event or use a store to filter menu items
    console.log("Searching for:", searchQuery.value);
  }
};
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes float-delayed {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-25px) rotate(-5deg);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 4s ease-in-out infinite;
}
</style>

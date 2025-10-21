<template>
  <section id="features" class="py-20 px-4 lg:px-40 bg-[#0a0a0a] relative overflow-hidden">
    <!-- Blur Background Effects -->
    <div class="absolute top-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
    
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold mb-4">
          Why Choose <span class="text-accent">Our Salads</span>
        </h2>
      </div>
      
      <!-- Two Column Layout: Points Left, Video Right -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left Side - Feature Points -->
        <div class="space-y-6">
          <div
            v-for="feature in features"
            :key="feature.id"
            class="flex items-center gap-5 group cursor-pointer"
          >
            <!-- Icon -->
            <div class="flex-shrink-0">
              <i
                :class="feature.icon"
                :style="{ color: feature.iconColor }"
                class="text-4xl group-hover:scale-110 transition-transform duration-300"
              ></i>
            </div>
            
            <!-- Content -->
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                {{ feature.title }}
              </h3>
            </div>
          </div>
        </div>
        
        <!-- Right Side - Video -->
        <div class="relative">
          <!-- Glow Effect Behind Video -->
          <div class="absolute -inset-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-3xl opacity-60"></div>
          
          <div class="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 hover:border-accent transition-all duration-300">
            <video
              class="w-full h-full object-cover"
              autoplay
              loop
              muted
              playsinline
            >
              <source src="/img/SaladVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    id: 1,
    icon: "fa-solid fa-apple-whole",
    title: "Healthy Food",
    iconBgColor: "rgba(255, 69, 0, 0.2)",
    iconColor: "#ff4500",
  },
  {
    id: 2,
    icon: "fa-solid fa-utensils",
    title: "Fresh Salads",
    iconBgColor: "rgba(22, 160, 133, 0.2)",
    iconColor: "#16a085",
  },
  {
    id: 3,
    icon: "fa-solid fa-carrot",
    title: "Natural Fiber",
    iconBgColor: "rgba(155, 89, 182, 0.2)",
    iconColor: "#9b59b6",
  },
  {
    id: 4,
    icon: "fa-solid fa-lemon",
    title: "Nutritional Food",
    iconBgColor: "rgba(243, 156, 18, 0.2)",
    iconColor: "#f39c12",
  },
  {
    id: 5,
    icon: "fa-sharp fa-solid fa-heart-pulse",
    title: "Protect Your Heart",
    iconBgColor: "rgba(231, 76, 60, 0.2)",
    iconColor: "#e74c3c",
  },
  {
    id: 6,
    icon: "fa-solid fa-weight-scale",
    title: "Weight Control",
    iconBgColor: "rgba(52, 152, 219, 0.2)",
    iconColor: "#3498db",
  },
];
</script>

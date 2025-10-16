<template>
  <section id="features" class="py-16 px-4 lg:px-40 bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-10">
        <h2 class="text-5xl font-bold mb-4">
          Why Choose <span class="text-accent">Our Salads</span>
        </h2>
        <p class="text-xl text-gray-600">
          Discover the amazing benefits of our fresh and healthy salads
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="feature in features"
          :key="feature.id"
          :class="feature.bgClass"
          class="rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
        >
          <div class="flex flex-col items-center text-center">
            <div
              :class="feature.iconBg"
              class="w-20 h-20 rounded-full flex items-center justify-center mb-6"
            >
              <i
                :class="feature.icon"
                :style="{ color: feature.iconColor }"
                class="text-4xl"
              ></i>
            </div>
            <h2
              class="text-2xl font-bold mb-4"
              :style="{ color: feature.titleColor }"
            >
              {{ feature.title }}
            </h2>
            <p
              class="text-base leading-relaxed"
              :style="{ color: feature.descColor }"
            >
              {{ feature.description }}
            </p>
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
    description:
      "Fresh organic ingredients packed with essential vitamins and minerals for your daily nutrition needs.",
    bgClass: "bg-gradient-to-br from-orange-200 via-orange-300 to-red-300",
    iconBg: "bg-white shadow-xl",
    iconColor: "#ff4500",
    titleColor: "#c0392b",
    descColor: "#333",
  },
  {
    id: 2,
    icon: "fa-solid fa-utensils",
    title: "Fresh Salads",
    description:
      "Handpicked vegetables prepared daily to ensure maximum freshness and incredible taste in every bite.",
    bgClass: "bg-gradient-to-br from-green-200 via-emerald-300 to-teal-300",
    iconBg: "bg-white shadow-xl",
    iconColor: "#16a085",
    titleColor: "#0e6655",
    descColor: "#333",
  },
  {
    id: 3,
    icon: "fa-solid fa-carrot",
    title: "Natural Fiber",
    description:
      "High fiber content promotes healthy digestion and helps maintain your energy levels throughout the day.",
    bgClass: "bg-gradient-to-br from-purple-200 via-purple-300 to-fuchsia-300",
    iconBg: "bg-white shadow-xl",
    iconColor: "#9b59b6",
    titleColor: "#5b2c6f",
    descColor: "#333",
  },
  {
    id: 4,
    icon: "fa-solid fa-lemon",
    title: "Nutritional Food",
    description:
      "Perfectly balanced meals rich in antioxidants, vitamins, and nutrients to boost your immune system.",
    bgClass: "bg-gradient-to-br from-yellow-200 via-amber-300 to-orange-300",
    iconBg: "bg-white shadow-xl",
    iconColor: "#f39c12",
    titleColor: "#b7720d",
    descColor: "#333",
  },
  {
    id: 5,
    icon: "fa-sharp fa-solid fa-heart-pulse",
    title: "Protect Your Heart",
    description:
      "Low cholesterol ingredients that support cardiovascular health and promote a healthy heart function.",
    bgClass: "bg-gradient-to-br from-rose-200 via-pink-300 to-red-300",
    iconBg: "bg-white shadow-xl",
    iconColor: "#e74c3c",
    titleColor: "#a93226",
    descColor: "#333",
  },
  {
    id: 6,
    icon: "fa-solid fa-weight-scale",
    title: "Weight Control",
    description:
      "Low-calorie, high-protein options designed to help you maintain a healthy weight and lifestyle.",
    bgClass: "bg-gradient-to-br from-sky-200 via-blue-300 to-indigo-300",
    iconBg: "bg-white shadow-xl",
    iconColor: "#3498db",
    titleColor: "#1f618d",
    descColor: "#333",
  },
];
</script>

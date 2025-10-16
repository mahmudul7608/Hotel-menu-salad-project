<template>
  <section class="py-20 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-5xl font-bold mb-8">
        Subscribe to get email updates<br />of latest news
      </h1>
      <form @submit.prevent="handleSubmit" class="flex justify-center">
        <div class="flex border border-black rounded-full overflow-hidden">
          <input
            type="email"
            v-model="email"
            placeholder="Enter your email"
            required
            class="px-8 py-5 text-lg outline-none w-80"
          />
          <button
            type="submit"
            class="bg-accent text-white px-8 py-5 text-lg hover:bg-green-600 transition-colors"
          >
            Subscribe
          </button>
        </div>
      </form>
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

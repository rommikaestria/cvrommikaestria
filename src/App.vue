<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <router-view class="flex-grow" />
    <Footer />
  </div>
</template>

<style scoped></style>

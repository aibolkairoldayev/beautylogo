<script setup>
import Header from "./components/layouts/Header.vue";
import Footer from "./components/layouts/Footer.vue";
import HomePage from "./views/HomePage.vue";
// export default {
//   name: "App",
//   components: {
//     Header,
//     Footer,
//   },
// };
</script>

<template>
  <Header />
  <Home-page />
  <Footer />
</template>

<style lang="sass" scoped>
@import './assets/styles/main'
</style>

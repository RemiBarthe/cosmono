<template>
  <ParallaxBanner />
  <div class="bg-dark w-full h-full absolute">
    <HomePage />
  </div>
</template>

<script>
import ParallaxBanner from "./components/ParallaxBanner.vue";
import HomePage from "./components/HomePage.vue";

export default {
  name: "App",
  components: {
    ParallaxBanner,
    HomePage
  }
};
</script>

<style></style>

<template>
  <div class="bg-dark">
    <ParallaxBanner />
    <CosmonoAdventure />
  </div>
</template>

<script>
import ParallaxBanner from "./components/ParallaxBanner.vue";
import CosmonoAdventure from "./components/CosmonoAdventure.vue";

export default {
  name: "App",
  components: {
    ParallaxBanner,
    CosmonoAdventure
  }
};
</script>

<style></style>

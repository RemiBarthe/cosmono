<template>
  <div class="bg-dark">
    <ParallaxBanner />
    <CosmonoAdventure />
    <div class="bg-light-dark"><ContactSection /></div>
  </div>
</template>

<script>
import ParallaxBanner from "./components/ParallaxBanner.vue";
import CosmonoAdventure from "./components/CosmonoAdventure.vue";
import ContactSection from "./components/ContactSection.vue";

export default {
  name: "App",
  components: {
    ParallaxBanner,
    CosmonoAdventure,
    ContactSection
  }
};
</script>

<style></style>

<template>
  <div class="bg-dark">
    <ParallaxBanner />
    <CosmonoAdventure />
    <MissionSection />
  </div>
</template>

<script>
import ParallaxBanner from "./components/ParallaxBanner.vue";
import CosmonoAdventure from "./components/CosmonoAdventure.vue";
import MissionSection from "./components/MissionSection.vue";

export default {
  name: "App",
  components: {
    ParallaxBanner,
    CosmonoAdventure,
    MissionSection
  }
};
</script>

<style></style>

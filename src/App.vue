<template>
  <div class="bg-dark">
    <ParallaxBanner />
    <CosmonoAdventure />
    <MissionSection />
    <ContactSection />
  </div>
</template>

<script>
import ParallaxBanner from "./components/ParallaxBanner.vue";
import CosmonoAdventure from "./components/CosmonoAdventure.vue";
import MissionSection from "./components/MissionSection.vue";
import ContactSection from "./components/ContactSection.vue";

export default {
  name: "App",
  components: {
    ParallaxBanner,
    CosmonoAdventure,
    MissionSection,
    ContactSection
  }
};
</script>

<style></style>

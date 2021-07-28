<template>
  <section
    class="
      text-base
      md:text-base-lg
      text-white
      font-text
      px-4
      md:px-28
      py-6
      md:py-8
    "
  >
    <h1 class="font-title text-title md:text-title-lg mb-4 md:mb-5">
      Nos missions accomplies
    </h1>

    <Swiper
      :slidesPerView="'auto'"
      :space-between="16"
      :mousewheel="true"
      class="-mr-4 md:-mr-28"
    >
      <SwiperSlide class="w-auto">
        <a href="https://www.entourloupe.cosmono.fr/" target="_blank">
          <img
            alt="capture d'ecran entourloupe"
            src="../assets/images/entourloupe-min.jpg"
            class="w-60 md:w-500 rounded-lg"
          />
        </a>
      </SwiperSlide>

      <SwiperSlide class="w-auto">
        <a href="https://jeu-du-pendu.cosmono.fr/" target="_blank">
          <img
            alt="capture d'ecran jeu du pendu"
            src="../assets/images/jeu-du-pendu-min.jpg"
            class="w-60 md:w-500 rounded-lg"
          />
        </a>
      </SwiperSlide>

      <SwiperSlide class="w-auto mr-4 md:mr-28">
        <a href="https://www.trouve-lana.cosmono.fr/" target="_blank">
          <img
            alt="capture d'ecran trouve lana"
            src="../assets/images/trouve-lana-min.jpg"
            class="w-60 md:w-500 rounded-lg"
          />
        </a>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";

import SwiperCore, { Mousewheel } from "swiper/core";

// install Swiper modules
SwiperCore.use([Mousewheel]);

export default {
  name: "MissionSection",
  components: {
    Swiper,
    SwiperSlide
  },
  data: () => ({})
};
</script>

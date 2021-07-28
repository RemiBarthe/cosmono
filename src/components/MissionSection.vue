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
    <h2 class="font-title text-title md:text-title-lg mb-4 md:mb-5">
      Nos missions accomplies
    </h2>

    <Swiper
      :slidesPerView="'auto'"
      :space-between="16"
      :mousewheel="true"
      class="-mr-4 md:-mr-28"
    >
      <SwiperSlide class="w-auto rounded-lg overflow-hidden">
        <a href="https://www.entourloupe.cosmono.fr/" target="_blank">
          <img
            alt="capture d'ecran entourloupe"
            src="../assets/images/entourloupe-min.jpg"
            class="w-60 md:w-500"
          />

          <div
            class="absolute right-0 left-0 top-0 bottom-0 bg-gradient-to-t from-black-07 to-black-03"
          >
            <p class="font-bold absolute bottom-4 left-4 md:bottom-5 md:left-5">
              Entourloupe
              <br />
              <span class="font-normal">Jeu de bluff multijoueur</span>
            </p>
          </div>
        </a>
      </SwiperSlide>

      <SwiperSlide class="w-auto rounded-lg overflow-hidden">
        <a href="https://jeu-du-pendu.cosmono.fr/" target="_blank">
          <img
            alt="capture d'ecran jeu du pendu"
            src="../assets/images/jeu-du-pendu-min.jpg"
            class="w-60 md:w-500"
          />

          <div
            class="absolute right-0 left-0 top-0 bottom-0 bg-gradient-to-t from-black-07 to-black-03"
          >
            <p class="font-bold absolute bottom-4 left-4 md:bottom-5 md:left-5">
              Le jeu du pendu
              <br />
              <span class="font-normal">Jeu du pendu contre l'IA</span>
            </p>
          </div>
        </a>
      </SwiperSlide>

      <SwiperSlide class="w-auto mr-4 md:mr-28 rounded-lg overflow-hidden">
        <a href="https://www.trouve-lana.cosmono.fr/" target="_blank">
          <img
            alt="capture d'ecran trouve lana"
            src="../assets/images/trouve-lana-min.jpg"
            class="w-60 md:w-500"
          />

          <div
            class="absolute right-0 left-0 top-0 bottom-0 bg-gradient-to-t from-black-07 to-black-03 "
          >
            <p class="font-bold absolute bottom-4 left-4 md:bottom-5 md:left-5">
              Trouve Lana
              <br />
              <span class="font-normal">Jeu d'enquête / énigmes</span>
            </p>
          </div>
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

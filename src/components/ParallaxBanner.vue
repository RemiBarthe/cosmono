<template>
  <KinesisContainer
    class="bg-orange h-screen w-full overflow-hidden relative"
    event="scroll"
  >
    <KinesisElement
      tag="img"
      v-for="(image, id) in images"
      :key="id"
      :strength="image.strength"
      :src="require(`../assets/images/banner/${image.name}`)"
      class="
        absolute
        bottom-0
        md:left-0
        -left-80
        min-h-screen
        max-w-none
        min-w-full
        h-screen
        2xl:h-full-120
        3xl:h-full-140
      "
      :style="`z-index:${id}`"
    />

    <KinesisElement
      tag="img"
      :strength="1100"
      :src="require('../assets/images/logo-blue-cosmono.svg')"
      class="absolute left-0 right-0 mx-auto mt-60 z-10 w-60 md:w-80"
      style="z-index: 1"
    />

    <svg
      class="h-10 w-10 text-white z-20 absolute bottom-14 left-0 right-0 mx-auto animate-bounce-slow transition-all duration-1000"
      :class="`${hideMouseIcon ? 'opacity-0' : 'opacity-100'}`"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <rect x="7" y="4" width="10" height="16" rx="4" />
      <line x1="12" y1="8" x2="12" y2="11" />
    </svg>
  </KinesisContainer>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";

export default {
  name: "ParallaxBanner",
  components: {
    KinesisContainer,
    KinesisElement
  },
  data: () => ({
    images: [
      { name: "bg-1.png", strength: 1000 },
      { name: "bg-2.png", strength: 850 },
      { name: "bg-3.png", strength: 700 },
      { name: "bg-4.png", strength: 550 },
      { name: "bg-5.png", strength: 400 },
      { name: "bg-6.png", strength: 200 },
      { name: "bg-7.png", strength: 0 }
    ],
    hideMouseIcon: false
  }),
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.scrollTo(0, 10);
    window.scrollTo(0, 0);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 80) {
        this.hideMouseIcon = true;
        window.removeEventListener("scroll", this.handleScroll);
      }
    }
  }
};
</script>

<template>
  <KinesisContainer
    class="bg-orange h-screen w-screen overflow-hidden relative"
    event="scroll"
  >
    <KinesisElement
      :strength="image.strength"
      class="absolute bottom-0"
      v-for="(image, id) in images"
      :key="id"
    >
      <img
        alt="background parallax"
        class="min-h-screen max-w-none min-w-screen h-screen 2xl:h-full-120 3xl:h-full-140"
        :src="require(`../assets/images/banner/${image.name}`)"
      />
    </KinesisElement>
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
    ]
  })
};
</script>

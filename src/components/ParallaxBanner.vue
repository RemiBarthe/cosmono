<template>
  <KinesisContainer
    class="bg-orange h-screen w-screen overflow-hidden relative"
    event="scroll"
  >
    <KinesisElement :strength="1000" class="absolute bottom-0">
      <img
        alt="background parallax"
        class="min-h-screen max-w-none min-w-screen h-screen"
        src="../assets/images/banner/bg-1.png"
      />
    </KinesisElement>

    <KinesisElement :strength="850" class="absolute bottom-0">
      <img
        alt="background parallax"
        class="min-h-screen max-w-none min-w-screen h-screen"
        src="../assets/images/banner/bg-2.png"
      />
    </KinesisElement>

    <KinesisElement :strength="700" class="absolute bottom-0">
      <img
        alt="background parallax"
        class="min-h-screen max-w-none min-w-screen h-screen"
        src="../assets/images/banner/bg-3.png"
      />
    </KinesisElement>

    <KinesisElement :strength="550" class="absolute bottom-0">
      <img
        alt="background parallax"
        class="min-h-screen max-w-none min-w-screen h-screen"
        src="../assets/images/banner/bg-4.png"
      />
    </KinesisElement>

    <KinesisElement :strength="400" class="absolute bottom-0">
      <img
        alt="background parallax"
        class="min-h-screen max-w-none min-w-screen h-screen"
        src="../assets/images/banner/bg-5.png"
      />
    </KinesisElement>

    <KinesisElement :strength="200" class="absolute bottom-0">
      <img
        alt="background parallax"
        class="min-h-screen max-w-none min-w-screen h-screen"
        src="../assets/images/banner/bg-6.png"
      />
    </KinesisElement>

    <KinesisElement :strength="0" class="absolute bottom-0">
      <img
        alt="background parallax"
        class="min-h-screen max-w-none min-w-screen h-screen"
        src="../assets/images/banner/bg-7.png"
      />
    </KinesisElement>
  </KinesisContainer>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    KinesisContainer,
    KinesisElement
  }
};
</script>

<template>
  <div class="header-size">
    <p class="cosmono-properties">cosmono</p>
    <h1 class="headline-properties">To the moon</h1>
    <button class="btn-see-project">
      <p class="text-see-project">Voir les projets</p>
    </button>
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>

<style scoped>
.header-size {
  background: linear-gradient(130.05deg, #00296b 25.5%, #001029 61.25%);
  position: relative;
  width: 100%;
  height: 300px;
  top: 0;
  overflow: hidden;
  z-index: 1;
}
.cosmono-properties {
  position: absolute;
  width: 92.05px;
  height: 22.73px;
  left: 63px;
  top: 40px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;

  color: #ffffff;
}
.headline-properties {
  position: absolute;
  width: 126px;
  height: 48px;
  left: 35px;
  top: 116px;

  font-family: "Amaranth";
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 100%;
  display: flex;
  align-items: center;
  color: #ffffff;
}
.btn-see-project {
  position: absolute;
  width: 144px;
  height: 40px;
  left: 36px;
  top: 194px;
  background: #ffffff;
  border-radius: 39px;
  border: 0;
}
.text-see-project {
  text-align: center;
}
</style>
<template>
  <div class="header-size">Je suis dans la section FOOTER</div>
</template>
<script>
export default {
  name: "App"
};
</script>

<style scoped>
.header-size {
  background-color: blue;
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  overflow: hidden;
  z-index: 1;
}
</style>
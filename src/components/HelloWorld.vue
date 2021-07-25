<template>
  <div class="hello">
    <h1 class="text-base md:text-baselg">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
}
</script>
<template>
  <div class="HelloWorld">
    <h1>Welcome, {{ msg }}!</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
}
</script>

<style scoped lang="scss">
.HelloWorld {
  display: block;
}
</style>

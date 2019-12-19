<template>
  <div class="main-layout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
}
</script>

<style scoped lang="scss">
.main-layout {
  background-color: #fff;
  max-width: 1200px;
  margin: 0 auto;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  min-height: 100vh;
}
</style>

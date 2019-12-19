<template>
  <div class="about">
    <MainLayout>
      <h1>This is an about page</h1>
      <router-link to="/">返回首页</router-link>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue'

export default {
  name: 'About',
  components: {
    MainLayout,
  },
}
</script>

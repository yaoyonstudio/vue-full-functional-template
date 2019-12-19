<template>
  <div class="profile">
    <MainLayout>
      <HelloWorld :msg="user.username" />
      <router-link to="/">返回首页</router-link>
      <div>
        <button class="btn" v-show="isLogin" @click="logout">注销</button>
      </div>
    </MainLayout>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import MainLayout from '../layouts/MainLayout.vue'
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Profile',
  computed: {
    ...mapState('user', ['isLogin', 'user']),
  },
  methods: {
    ...mapActions({
      logoutAction: 'user/logoutAction',
    }),
    logout() {
      this.logoutAction()
      this.$router.replace('/')
    },
  },
  components: {
    MainLayout,
    HelloWorld,
  },
}
</script>

<style lang="scss" scoped>
.btn {
  width: 60px;
  height: 32px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  &:hover {
    background-color: #d33;
    color: #fff;
  }
}
</style>

<template>
  <MainLayout>
    <div class="home">
      <h3>{{ title }}</h3>
      <router-link to="/about">关于我们</router-link>
      <router-link to="/profile">个人中心</router-link>
      <div class="user-info">
        <p>当前用户：{{ isLogin ? user.username : '未登录' }}</p>
      </div>
      <button class="btn" v-show="!isLogin" @click="login">登录</button>
      <button class="btn" v-show="isLogin" @click="logout">注销</button>
    </div>
  </MainLayout>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import MainLayout from '../layouts/MainLayout.vue'

export default {
  name: 'Home',
  computed: {
    ...mapState('common', ['title']),
    ...mapState('user', ['isLogin', 'user']),
  },
  mounted() {
    this.getCommonDataAction({
      callback: res => {
        console.log('get common data callback:', res)
        document.title = res.appTitle
      },
    })
  },
  methods: {
    ...mapActions({
      getCommonDataAction: 'common/getCommonDataAction',
      loginAction: 'user/loginAction',
      logoutAction: 'user/logoutAction',
    }),
    login() {
      this.loginAction({
        params: {
          username: 'admin',
          password: '123456',
        },
        callback: res => {
          console.log('login callback:', res)
        },
      })
    },
    logout() {
      this.logoutAction()
    },
  },
  components: {
    MainLayout,
  },
}
</script>

<style lang="scss" scoped>
.home {
  padding: 12px;
}
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

<template>
  <div class="app">
    <!-- <h1>入口页面</h1> -->
    <login v-if="!islogin"></login>
    <router-view v-else />
  </div>
</template>

<script>
import login from './views/login'
export default {
  name: 'app',
  data () {
    return {
      islogin: true
    }
  },
  components: { login }
}
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
}
::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.1);
  -webkit-border-radius: 12px;
  border-radius: 12px;
}
::-webkit-scrollbar-thumb:vertical:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
::-webkit-scrollbar-thumb:vertical:active {
  background-color: rgba(0, 0, 0, 0.3);
}
::-webkit-scrollbar-button {
  display: none;
}
::-webkit-scrollbar-track {
  background-color: #fff;
  border-radius: 0 12px 12px 0;
}
</style>

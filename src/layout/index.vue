<template>
  <div class="layout">
    <div class="wrapper">
      <FsHeader></FsHeader>
      <div class="content">
        <FsMenu></FsMenu>
        <div class="container-wrap">
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive" />
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive" />
        </div>

        <!-- <router-view></router-view> -->

      </div>
      <FsFotter></FsFotter>
    </div>
  </div>
</template>

<script>
import FsMenu from './components/FsMenu'
import FsHeader from './components/FsHeader'
import FsFotter from './components/FsFotter'
export default {
  name: 'layout',
  components: { FsMenu, FsHeader, FsFotter },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.layout {
  .content {
    height: calc(100vh - 270px);
    background: #fff;
    overflow-y: auto;
  }
}
</style>

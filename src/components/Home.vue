<template>
  <div>
    <drawer></drawer>
    <div class="app-content">
      <toolbar></toolbar>

      <transition name="slide-fade">
        <router-view></router-view>
      </transition>

    </div>
  </div>
</template>
<script>
  import Drawer from './Partials/Menu'
  import Toolbar from './Partials/Tootbar'
  export default {
    components: {
      Drawer,
      Toolbar
    }
  }
</script>

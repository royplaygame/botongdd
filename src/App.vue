<template>
  <div id="app" class="views" style="height: 100%;">
    <router-view class="view" keep-alive></router-view>
  </div>
</template>

<script>
  export default {
    name: 'views',
  }

</script>

<style>
  .view {
    background-color: #f4f4f4;
    height: 100%;
  }

  @import "./assets/css/base.css"
</style>

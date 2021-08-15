<template>
  <div
    id="app"
    ref="main"
    class="app"
  >
    <navigation-header />

    <main>      
      <router-view ref="view" />     
    </main>
  </div>
</template>

<script>
  import NavigationHeader from './components/Navigation/Header.vue';

  export default {
    name: 'app',
    components: {
      NavigationHeader
    }
  }
</script>

<style lang="scss">
  @import 'assets/stylesheets/_variables.scss';

  @import 'assets/stylesheets/base.scss';

  .app {
    background-color: $white-light;
    margin: 0 auto;
    width: 180*$x;
    height: 128*$x;
  }

</style>

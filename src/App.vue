<template>
  <div
    id="app"
    ref="main"
    class="app"
  >
    <main>      
      <router-view ref="view" />     
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
  @import 'assets/stylesheets/_variables.scss';

  @import 'assets/stylesheets/base.scss';

  .app {
    background-color: $white;
    margin: 0 auto;
    width: 180*$x;
    height: 128*$x;
  }

</style>

<template>
  <header class="bg_header">
  </header>
</template>

<script>
  export default {
    name: 'NavigationHeader',        
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/stylesheets/variables/_sizes.scss';

  .bg_header {
    height: 8*$x;
    margin: 0 0 12*$x;
    padding: 2*$x;
    width: 180*$x;
  }

</style>
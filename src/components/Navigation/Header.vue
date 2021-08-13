<template>
  <header class="bg_header">
    <img src="@/assets/images/illustrations/ic-logo.svg" class="ic_logo">

    <search-bar />
  </header>
</template>

<script>
  import SearchBar from '@/components/Search/Bar.vue';

  export default {
    name: 'NavigationHeader',
    components: {
      SearchBar
    }  
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/stylesheets/variables/_sizes.scss';

  .bg_header {
    display: flex;

    height: 8*$x;
    margin: 0 0 12*$x;
    padding: 2*$x;
    width: 180*$x;
  }

  .ic_logo {
    height: 4*$x;
    margin: 0 28.5*$x 0 0 ;
    object-fit: contain;
    width: 18.5*$x;
  }

</style>
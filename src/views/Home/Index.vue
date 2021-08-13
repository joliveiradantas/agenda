<template>
  <section class="home-index-content">
    <img src="@/assets/images/illustrations/ic-book.svg" class="ic_book">

    <p>{{ messageBookEmpty }}</p>
      
  </section>
</template>

<script>
  export default {
    name: 'HomeIndex',
    data() {
      return {
        messageBookEmpty: 'Nenhum contato foi criado ainda.'
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/stylesheets/variables/_sizes.scss';

  .home-index-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ic_book {
    margin: 0 0 3*$x ;
  }
</style>

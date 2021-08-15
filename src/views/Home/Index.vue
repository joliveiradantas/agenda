<template>
  <section class="home-index-content">
    <img src="@/assets/images/illustrations/ic-book.svg" class="ic_book">

    <p>{{ messageBookEmpty }}</p>

    <former-button icon="plus" :label="buttonLabel">      
    </former-button>
      
  </section>
</template>

<script>
  import FormerButton from '@/components/Former/Button.vue';

  export default {
    name: 'HomeIndex',
    components: {
      FormerButton,
    },
    data() {
      return {
        messageBookEmpty: 'Nenhum contato foi criado ainda.',
        buttonLabel: 'Criar contato',
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
    margin: 12*$x 0 3*$x ;
  }
</style>

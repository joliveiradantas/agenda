<template>
  <section class="home-index-content">
    <img src="@/assets/images/illustrations/ic-book.svg" class="ic_book">

    <p class="message">{{ messageBookEmpty }}</p>

    <former-button 
      icon="plus" 
      :label="buttonLabel"
      :creationButton="creationButton"
      :higher="true"
    >      
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
        modalTitleContactCreation: 'Criar novo contato',
        creationButton: true,
        higher: true,
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
    margin-top: 12*$x;  
    margin-bottom: 3*$x;
  }

  .message {
    margin-bottom: 3*$x;
  }
</style>

<template>
  <div>    
    <navigation-header />
    <section class="home-index-content">
      <img src="@/assets/images/illustrations/ic-book.svg" class="ic_book">

      <p class="message">{{ messageBookEmpty }}</p>

      <former-button 
        icon="plus" 
        :label="buttonLabel"
        :buttonType="buttonType"
        :higher="true"
        @click="toggleModal"
      >      
      </former-button>

      <modal-contact 
        v-if="showModal"
        :title="modalTitleContactCreation"
        @close="toggleModal"
        @submit="submit"
      >
      </modal-contact>
    </section>
  </div>
</template>

<script>
  import { contactsData } from '@/shared/data';

  import NavigationHeader from '@/components/Navigation/Header.vue';
  import FormerButton from '@/components/Former/Button.vue';
  import ModalContact from '@/components/Modal/Contact/ModalContact.vue';

  import mixin from '@/helpers/mixins/mixin';

  export default {
    name: 'HomeIndex',
    components: {
      NavigationHeader,
      FormerButton,
      ModalContact
    },
    mixins: [
      mixin,
    ],
    data() {
      return {
        messageBookEmpty: 'Nenhum contato foi criado ainda.',
        buttonLabel: 'Criar contato',
        modalTitleContactCreation: 'Criar novo contato',
        buttonType: 'creationButton',
        showModal: false,
      }
    },

    created () {
      this.setContactsToBrowser();
    },

    methods: {
      toggleModal() {
        this.showModal = !this.showModal;      
      },
      setContactsToBrowser() {        
        const contacts =  this.contacts;

        if (contacts === null) {
          this.storeDataInBrowser(contactsData);
        }
      },
      submit() {
        this.toggleModal();
        
        this.$router.push({
          name: 'contacts-list',
        });        
      },      
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

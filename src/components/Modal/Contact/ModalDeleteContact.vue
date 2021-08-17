<template>
  <div>
    <popup-modal      
      :title="title"
      buttonType="deleteButton"
      buttonLabel="Excluir"

      :exclusionModal="exclusionModal"

      @close="close"
      @submit="submit"
    >

    <template v-slot:content>
      <div class="modal-delete-content">
          <span>{{ deleteMessage }}</span>
      </div>
    </template>
    
    </popup-modal>
  </div>
</template>

<script>
  import PopupModal from '@/components/Modal/Modal.vue';

  import mixin from '@/helpers/mixins/mixin';

  export default {
    name: 'ModalDeleteContact',
    components: {
      PopupModal,
    },
    mixins: [
      mixin,
    ],
    data() {
      return {
        deleteMessage: 'Deseja realmente excluir o contato?',
        exclusionModal: true,
      }
    },
    props: {
      title: {
        type: String,
        default: '',
      },
      contact: {
        type: Object,
        default: undefined,
      },
    },

    methods: {
      close() {
        this.$emit('close');
      },
      submit() {
        const index = this.findContactIndex(this.contact);
        const clonedContacts = [...this.contacts];
        clonedContacts.splice(index, 1);
        this.storeDataInBrowser(clonedContacts);

        this.$emit('delete', clonedContacts);
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/stylesheets/_variables.scss';

  .modal-delete-content {
    height: 11.5625*$x;
    font-size: 1.75*$x;
    padding: 2.4375*$x 0 0 3*$x;
  }
</style>
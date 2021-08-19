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
  import { mapActions } from 'vuex';

  import PopupModal from '@/components/Modal/Modal.vue';

  export default {
    name: 'ModalDeleteContact',
    components: {
      PopupModal,
    },
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
      ...mapActions(['deleteContact']),

      close() {
        this.$emit('close');
      },
      submit() {
        this.deleteContact(this.contact)

        this.$emit('delete');
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/stylesheets/_variables.scss';

  .modal-delete-content {
    height: 11.5625*$x;
    font-size: $font-medium;
    padding: 2.4375*$x 0 0 3*$x;
  }
</style>
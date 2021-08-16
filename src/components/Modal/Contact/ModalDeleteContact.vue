<template>
  <div>
    <popup-modal      
      :title="title"
      buttonType="defaultButton"
      :wider="wider"
      :exclusionModal="exclusionModal"
      buttonLabel="Excluir"
      @close="close"
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

  export default {
    name: 'ModalDeleteContact',
    components: {
      PopupModal,
    },
    data() {
      return {
        deleteMessage: 'Deseja realmente excluir o contato?',
        exclusionModal: true,
        wider: true,
      }
    },
    props: {
      title: {
        type: String,
        default: '',
      },
    },

    methods: {
      close() {
        this.$emit('close');
      }
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
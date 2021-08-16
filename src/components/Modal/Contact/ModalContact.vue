<template>
  <div>
    <popup-modal      
      :title="title"
      buttonType="defaultButton"
      buttonLabel="Salvar"
      @close="close"
    >

    <template v-slot:content>
      <div class="form-content">
        <div class="form-field">
          <label class="label">Nome</label>
          <former-input type="default" class="input" />
        </div>
        <div class="form-field">
          <label class="label">Email</label>
          <former-input type="default" class="input" />
        </div>
        <div class="form-field">
          <label class="label">Telefone</label>
          <former-input type="default" size="small" class="input" />
        </div>        
      </div>
    </template>
    
    </popup-modal>
  </div>
</template>

<script>
  import PopupModal from '@/components/Modal/Modal.vue';
  import FormerInput from '@/components/Former/Field/Input.vue';

  export default {
    name: 'ModalContact',
    components: {
      PopupModal,
      FormerInput
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

  .form-content {
    height: 28.4375*$x;
    padding-top: 2.4375*$x;

    .form-field:nth-child(2) {
      padding-top: 2*$x;
    }

    .form-field:nth-child(3) {
      padding-top: 1.75*$x;
    }
  }

  .form-field {
    margin: 0 3*$x 0 3*$x;
  }

  .label {
    display: inline-block;
    font-size: 1.75$x;
    margin-bottom: 0.5*$x; 
  }  
</style>
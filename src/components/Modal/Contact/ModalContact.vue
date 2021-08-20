<template>
  <div>
    <popup-modal      
      :title="title"
      buttonType="defaultButton"
      buttonLabel="Salvar"
      :buttonActive="buttonActive"
      @close="close"
      @submit="checkForm"
    >

    <template v-slot:content>
      <div class="form-content">
        <div class="form-field">
          <label class="label">{{ fieldName.label }}</label>
          <former-input 
            type="default" 
            class="input" 
            :field="fieldName"
            v-model="fieldName.value"
          />
        </div>
        <div class="form-field">
          <label class="label">{{ fieldEmail.label }}</label>
          <former-input 
            type="default" 
            class="input" 
            :field="fieldEmail"
            v-model="fieldEmail.value"
          />
        </div>
        <div :class="classes">
          <label class="label">{{ fieldPhone.label }}</label>
          <former-input 
            type="default" 
            size="small" 
            class="input" 
            :field="fieldPhone"
            v-model="fieldPhone.value"
          />
        </div>        
      </div>
    </template>
    
    </popup-modal>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  import { input } from '@/_CRUDL/helpers/form/fields';
  import mixin from '@/helpers/mixins/mixin';

  import PopupModal from '@/components/Modal/Modal.vue';
  import FormerInput from '@/components/Former/Field/Input.vue';

  export default {
    name: 'ModalContact',
    components: {
      PopupModal,
      FormerInput
    },
    mixins: [
      mixin,
    ],
    data() {
      return {        
        fieldName: {
          ...input,
          id: 'name',
          label: 'Name',
          value: '',
        },
        fieldEmail: {
          ...input,
          id: 'email',
          label: 'E-mail',
          validations: {
            type: 'email',
          },
          value: '',
        },
        fieldPhone: {
          ...input,
          id: 'phone',
          label: 'Telefone',
          mask: {
            type: 'phone',
          },
          value: '',
        },
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

    computed: {
      buttonActive() {
        return this.fieldName.value !== ''
            || this.fieldEmail.value !== ''
            || this.fieldPhone.value !== '';
      },
      classes() {
        const classes = ['form-field'];

        if (this.fieldEmail.validated) {
          classes.push('with-padding-top');
        } else {
          classes.push('without-padding-top');
        }

        return classes;
      },
    },

    mounted () {
      this.fillContact();
    },

    methods: {
      ...mapActions(['updateContact', 'addContact']),

      close() {
        this.$emit('close');
      },
      fillContact() {
        if(!this.contact) {
          return;
        }

        this.fieldName.value = this.contact.name;
        this.fieldEmail.value = this.contact.email;
        this.fieldPhone.value = this.contact.phone;
      },
      checkForm() {
        if (!this.fieldName.value) {
          this.fieldName.errors = true;
        }
        if (!this.fieldEmail.value) {
          this.fieldEmail.errors = true;
        }
        if (!this.fieldPhone.value) {
          this.fieldPhone.errors = true;
        }

        if(!this.fieldName.errors && !this.fieldEmail.errors && !this.fieldPhone.errors) {
          this.submit();
        }
      },
      submit() {
        if (this.contact) {
          const { color, ...contactToEdit } = this.contact;

          contactToEdit.name = this.fieldName.value;
          contactToEdit.email = this.fieldEmail.value;
          contactToEdit.phone = this.fieldPhone.value;
          
          this.updateContact(contactToEdit);         
          
          this.$emit('submit');
         
        } else {

          const newContact = {
            id: Math.floor((Math.random() * 100) + 8),
            name: this.fieldName.value,
            email: this.fieldEmail.value,
            phone: this.fieldPhone.value,
          }

          this.addContact(newContact);         

          this.$emit('submit');
        }
      },
    }
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
      &.with-padding-top {
        padding-top: 14px;
      }
      &.without-padding-top {
        padding-top: 0;
      }
    } 
  }  

  .form-field {
    margin: 0 3*$x 0 3*$x;
  }

  .label {
    display: inline-block;
    font-size: $font-medium;
    margin-bottom: 0.5*$x; 
  }  
</style>
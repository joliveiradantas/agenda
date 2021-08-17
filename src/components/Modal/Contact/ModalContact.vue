<template>
  <div>
    <popup-modal      
      :title="title"
      buttonType="defaultButton"
      buttonLabel="Salvar"
      :buttonActive="buttonActive"
      @close="close"
      @submit="submit"
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
        <div class="form-field">
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
          value: '',
        },
        fieldPhone: {
          ...input,
          id: 'phone',
          label: 'Telefone',
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
      }
    },

    mounted () {
      this.fillContact();
    },

    methods: {
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
      submit() {
        if (this.contact) {
          const { color, ...contactToEdit } = this.contact;

          contactToEdit.name = this.fieldName.value;
          contactToEdit.email = this.fieldEmail.value;
          contactToEdit.phone = this.fieldPhone.value;   
          
          const index = this.findContactIndex(contactToEdit);
          const clonedContacts = [...this.contacts];
          clonedContacts.splice(index, 1, contactToEdit);
          this.storeDataInBrowser(clonedContacts);

          this.$emit('submit', clonedContacts);
         
        } else {

          const newContact = {
            id: Math.floor((Math.random() * 100) + 8),
            name: this.fieldName.value,
            email: this.fieldEmail.value,
            phone: this.fieldPhone.value,
          }

          const clonedContacts = [...this.contacts];      
          clonedContacts.push(newContact);
          this.storeDataInBrowser(clonedContacts);

          this.$emit('submit', clonedContacts);
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
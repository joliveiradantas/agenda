<template>
  <div>
    <navigation-header 
      @input="searchContact"
      @addContact="toggleModalContact"
    />

    <ul class="contacts-list header">
      <li>Contatos</li>
      <li>E-mail</li>
      <li>Telefone</li>
    </ul>
    <ol>
      <transition-group name="contacts-list">
        <li class="contacts-list body" 
            v-for="contact in clonedContacts"
            :key="contact.id"
        >
          <span class="contacts-list-column contact">
            <a :class="classes(contact.color)">{{ firstLetter(contact.name) }}</a>
            {{ contact.name | namelize }}
          </span>
          <span class="contacts-list-column email">
            {{ contact.email }}
          </span>
          <span class="contacts-list-column phone">
            {{ contact.phone }}
          </span>
          <span class="contacts-list-column icons">
            <img src="@/assets/images/ic-edit.svg" 
                 class="ic_edit"
                 @click="toggleModalContact(contact)"
            >
            <img src="@/assets/images/ic-delete.svg" 
                 class="ic_delete"
                 @click="toggleDeleteModal(contact)"
            >
          </span>
        </li>
      </transition-group>      
    </ol>

    <modal-contact 
      v-if="showModal"
      :title="modalTitleContactEdition"
      :contact="selectedContact"
      @submit="submit"
      @close="cancelModalContact"      
    >
    </modal-contact>

    <modal-delete-contact 
      v-if="showDeleteModal"
      title="Excluir contato"
      :contact="selectedContact"
      @close="cancelDeleteModal"
      @delete="deleteContact"
    >
    </modal-delete-contact>
  </div>
</template>

<script>
  import NavigationHeader from '@/components/Navigation/Header.vue';
  import ModalContact from '@/components/Modal/Contact/ModalContact.vue';
  import ModalDeleteContact from '@/components/Modal/Contact/ModalDeleteContact.vue';

  import mixin from '@/helpers/mixins/mixin';

  export default {
    name: 'ContactsList',
    components: {
      NavigationHeader,
      ModalContact,
      ModalDeleteContact
    },
    mixins: [
      mixin,
    ],
    data() {
      return {
        searchingTimeout: null,
        modalTitleContactEdition: 'Editar contato',
        showModal: false,
        showDeleteModal: false,
        selectedContact: undefined,
        clonedContacts: undefined,
      }
    },

    created () {
      this.formerOvalColor();
    },

    methods: {
      firstLetter(name) {
        return name.charAt(0).toUpperCase();
      },
      classes(color) {
        const classes = ['contacts-list-letter', 'oval'];

        classes.push(color);
        return classes;
      },
      formerOvalColor(contacts = this.contacts) {
        this.clonedContacts = contacts.map(c => {
          const letter = (this.firstLetter(c.name)).toLowerCase();

           switch (letter) {
            case 'a':
              c.color = 'orange';
              break;
            case 'b':
              c.color = 'green';
              break;
            case 'c':
              c.color = 'blue';
              break;
            case 'd':
              c.color = 'orange-light';
              break;
            case 'e':
              c.color = 'purple';
              break;
            case 'f':
              c.color = 'pink';
              break;
            case 'g':
              c.color = 'green-light';
              break;
            case 'h':
              c.color = 'red-light';
              break            
            default:
              c.color = 'orange';
           }
          
          return c;
        })
      },
      searchContact(value) {
        let timeout =  500;
        clearTimeout(this.searchingTimeout);

        this.searchingTimeout = setTimeout(this.filterContacts, timeout, value);
      },
      filterContacts(param) {        
        this.clonedContacts = param 
                              ? [...this.contacts.filter(c => c.name.toLowerCase().indexOf(param.toLowerCase()) !== -1)]      
                              : this.contacts;
      },
      toggleModalContact(contact) {
        this.selectedContact = contact;
        this.showModal = !this.showModal;      
      },
      cancelModalContact() {
        this.selectedContact = undefined;
        this.showModal = !this.showModal;
      },
      deleteContact(updatedContacts) {
        this.clonedContacts = updatedContacts;
        this.formerOvalColor(updatedContacts);
        this.cancelDeleteModal();
      },
      toggleDeleteModal(contact) {
        this.selectedContact = contact;
        this.showDeleteModal = !this.showDeleteModal;
      },
      cancelDeleteModal() {
        this.selectedContact = undefined;
        this.showDeleteModal = !this.showDeleteModal;
      },
      submit(updatedContacts) {
        this.clonedContacts = updatedContacts;
        this.formerOvalColor(updatedContacts);
        this.cancelModalContact();
      }
    }
  }
</script>

<style lang="scss" scoped>
  //TODO : Refactor com css grid
  @import '@/assets/stylesheets/_variables.scss';  
  
  .contacts-list {
    background-color: $white-two;
    border: solid 1px $white;
    border-radius: 0.5*$x;  
    display: flex;    
    height: 5*$x;
    margin: 0 2*$x 0 2*$x;    
    width: 176*$x;
    
     &:hover {
      background-color: $very-light-pink;
    }
  }

  .header {
    color: $bluey-grey;
    font-size: 1.625*$x;
    margin-bottom: 1px;
    margin-top: 2*$x;
    padding: 2*$x 0 1.125*$x 5.875*$x;

    
    li:first-child {
      margin-right: 41.875*$x;
    }

    li:nth-child(2) {
      margin-right: 56.125*$x;
    }

    li:nth-child(3) {
      margin-right: 54.625*$x;
    }
  }

  .body {
    align-items: center;
    border-top: none;
    cursor: pointer;
    display: flex;
    font-size: 1.75*$x;
    padding: $x 2*$x $x $x;
  }

  .contacts-list-column {
    width: 25%;
  }

  .contacts-list-letter {
    color: $white-two;
    font-size: 1rem;
    text-align: center;
  }

  .oval {
    border-radius: 1.5*$x; 
    height: 3*$x;
    margin: 0 2*$x 0 0;
    padding: 0.375*$x 0.625*$x 0.25*$x 0.75*$x;
    width: 3*$x;

    &.orange {
      background-color: $orange;
    }
    &.green {
      background-color: $green;
    }
    &.blue {
      background-color: $sky-blue;
    }
    &.orange-light {
      background-color: $orange-light;
    }
    &.purple {
      background-color: $purple;
    }
    &.pink {
      background-color: $pink;
    }
    &.green-light {
      background-color: $green-light;
    }
    &.red-light {
      background-color: $red-light;
    }
  }

  .email {
    padding-left: 10.15625*$x;
  }

  .phone {
    padding-left: 27.5625*$x;
  }

  .icons {
    display: flex;
    justify-content: flex-end;

    img:nth-child(2) {
      padding-left: 3*$x;
    }
  }

  .contacts-list-enter-active, .contacts-list-leave-active {
    transition: all 1s;
  }
  .contacts-list-enter, .contacts-list-leave-to {
    opacity: 0;
    transform: translateY(3.75*$x);
  }

  .contacts-list-enter-active, .contacts-list-enter-active {
    transition: background-color 10s;
  }
  .contacts-list-enter, .contacts-list-enter-to {
    background-color: $very-light-pink;
  }
</style>
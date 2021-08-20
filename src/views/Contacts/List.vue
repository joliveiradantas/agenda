<template>
  <div>
    <navigation-header 
      @input="setSearchValue"
      @addContact="toggleModalContact"
    />

    <ul class="contacts-list header">
      <li>Contatos</li>
      <li>E-mail</li>
      <li>Telefone</li>
    </ul>
    <transition-group name="contacts-list" tag="ol">
      <li class="contacts-list body" 
          v-for="contact in contactsListFiltered"
          :key="contact.id"
      >
        <span>
          <a v-if="contactHasName(contact)" :class="classes(contact.color)">{{ firstLetter(contact.name) }}</a>
          {{ contact.name | namelize }}
        </span>
        <span>
          {{ contact.email }}
        </span>
        <span>
          {{ contact.phone }}
        </span>
        <span class="contacts-list-column-icons">
          <img src="@/assets/images/ic-edit.svg" 
                @click="toggleModalContact(contact)"
          >
          <img src="@/assets/images/ic-delete.svg"
               @click="toggleDeleteModal(contact)"
          >
        </span>
      </li>
    </transition-group>     

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
      @delete="cancelDeleteModal"
    >
    </modal-delete-contact>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

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
        searchParam: '',
      }
    },

    computed: {
      ...mapState(['contacts']),

      clonedContacts() {
        return this.contacts;
      },
      contactsListFiltered() {
        return this.clonedContacts
          .filter(c => c.name.toLowerCase().indexOf(this.searchParam.toLowerCase()) !== -1)
          .sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0))          
      },
    },

    mounted () {
      this.$store.dispatch('getContacts');
    },

    beforeDestroy () {      
      clearTimeout(this.searchingTimeout);
    },

    methods: {
      firstLetter(name) {
        return name.trim().charAt(0).toUpperCase();
      },
      classes(color) {
        const classes = ['contacts-list-letter', 'oval'];

        classes.push(color);
        return classes;
      },
      formerOvalColor(contact) {
        
        const firstLetter = contact.name.trim().charAt(0).toLowerCase();

        switch (firstLetter) {
          case 'a':
            contact.color = 'orange';
            break;
          case 'b':
            contact.color = 'green';
            break;
          case 'c':
            contact.color = 'blue';
            break;
          case 'd':
            contact.color = 'orange-light';
            break;
          case 'e':
            contact.color = 'purple';
            break;
          case 'f':
            contact.color = 'pink';
            break;
          case 'g':
            contact.color = 'green-light';
            break;
          case 'h':
            contact.color = 'red-light';
            break            
          default:
            contact.color = 'orange';
        }
      },
      contactHasName(contact) {
        const hasName = contact.name.trim();
        if (hasName) {
          this.formerOvalColor(contact);
        }
        return hasName;
      },
      setSearchValue(value) {
        this.searchParam = value;
        this.searchContact(); 
      },
      searchContact() {
        let timeout =  500;
        clearTimeout(this.searchingTimeout);
        this.searchingTimeout = setTimeout(timeout);
      },
      toggleModalContact(contact) {
        this.selectedContact = contact;
        this.showModal = !this.showModal;      
      },
      cancelModalContact() {
        this.selectedContact = undefined;
        this.showModal = !this.showModal;
      },
      toggleDeleteModal(contact) {
        this.selectedContact = contact;
        this.showDeleteModal = !this.showDeleteModal;
      },
      cancelDeleteModal() {
        this.selectedContact = undefined;
        this.showDeleteModal = !this.showDeleteModal;
      },
      submit() {
        this.cancelModalContact();
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/stylesheets/_variables.scss';  
  
  .contacts-list {
    background-color: $white-two;
    border: solid 1px $white;
    border-radius: 0.5*$x;
    height: 5*$x;
    margin: 0 2*$x 0 2*$x;    
    width: 176*$x;  
  }

  .header {
    color: $bluey-grey;
    display: grid;
    font-size: $font-small;
    grid-template-columns: 48.5*$x 60.625*$x 61*$x;
    margin-bottom: 1px;
    margin-top: 2*$x;
    padding: 2*$x 0 1.125*$x 5.875*$x;
  }

  .body {
    border-top: none;
    cursor: pointer;
    display: grid;
    grid-template-columns: 53.375*$x 60.625*$x 52*$x 7*$x;
    font-size: $font-medium;
    padding: $x 2*$x $x $x;

    &:hover {
      background-color: $very-light-pink;
    }
  }

  .contacts-list-column-icons {
    display: flex;
    justify-content: flex-end;

    :first-child {
      margin-right: 3*$x;
    }
  }

  .contacts-list-letter {
    color: $white-two;
    display: inline-block;
    font-size: $font-default;
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
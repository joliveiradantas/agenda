<template>
  <div>
    <navigation-header @input="searchContact"/>

    <ul class="contacts-list header">
      <li>Contatos</li>
      <li>E-mail</li>
      <li>Telefone</li>
    </ul>
    <ol>
      <transition-group name="contacts-list">
        <li class="contacts-list body" 
            v-for="contact in contacts"
            :key="contact.id"
        >
          <span class="contacts-list-column contact">
            <a :class="classes(contact.color)">{{ firstLetter(contact.name) }}</a>
            {{ contact.name }}
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
                 @click="toggleModal">
            <img src="@/assets/images/ic-delete.svg" class="ic_delete">
          </span>
        </li>
      </transition-group>      
    </ol>

    <popup-modal-contact 
      v-if="showModal"
      :title="modalTitleContactEdition"
      @close="toggleModal"
    >
    </popup-modal-contact>
  </div>
</template>

<script>
  import { contactsData } from '@/shared/data';
  import NavigationHeader from '@/components/Navigation/Header.vue';
  import PopupModalContact from '@/components/Modal/Contact/ModalContact.vue';

  export default {
    name: 'ContactsList',
    components: {
      NavigationHeader,
      PopupModalContact,
    },
    data() {
      return {
        contacts: [],
        searchingTimeout: null,
        modalTitleContactEdition: 'Editar contato',
        showModal: false,
      }
    },

    created () {
      this.loadContacts();     
    },

    mounted () {
      this.formerOvalColor();
    },

    methods: {
      loadContacts() {
        this.contacts = contactsData;        
      },      
      firstLetter(name) {
        return name.charAt(0);
      },
      classes(color) {
        const classes = ['contacts-list-letter', 'oval'];

        classes.push(color);
        return classes;
      },
      formerOvalColor() {
        this.contacts = this.contacts.map(c => {
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
        this.contacts = param 
                              ? [...this.contacts.filter(c => c.name.toLowerCase().indexOf(param.toLowerCase()) !== -1)]         
                              : contactsData;
      },
      toggleModal() {
        this.showModal = !this.showModal;      
      },
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
      margin-right: 437px;
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
    width: 345.75px;
  }

  .contacts-list-letter {
    color: $white-two;
    font-size: 1rem;
    text-align: center;
  }

  .oval {
    border-radius: 1.5*$x; 
    height: 24px;
    margin: 0 16px 0 0;
    padding: 3px 5px 2px 6px;
    width: 24px;

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
    padding-left: 81.25px;
  }

  .phone {
    padding-left: 220.5px;
  }

  .icons {
    padding-left: 290.75px;
  }

  .contacts-list-enter-active, .contacts-list-leave-active {
    transition: all 1s;
  }
  .contacts-list-enter, .contacts-list-leave-to {
    opacity: 0;
    transform: translateY(3.75*$x);
  }
</style>
export default {
  computed: {
    contacts() {
        return JSON.parse(localStorage.getItem('contacts'));
    },
  },

  methods: {
    findContactIndex(contact) {
      const index = this.contacts.findIndex(c => c.id === contact.id);
      return index;
    },
    storeDataInBrowser(contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    },
  },
};

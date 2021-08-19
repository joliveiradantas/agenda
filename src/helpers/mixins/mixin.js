export default {
  methods: {
    storeDataInBrowser(contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    },
  },
};

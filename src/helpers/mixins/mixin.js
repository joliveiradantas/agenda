export default {
  computed: {
    contacts() {
        return JSON.parse(localStorage.getItem('contacts')) || [];
      }
  },
};

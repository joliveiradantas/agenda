<template>
  <header class="bg_header">
    <img src="@/assets/images/illustrations/ic-logo.svg" class="ic_logo">

    <former-button
      v-if="buttonActive"
      class="button"
      icon="plus" 
      :label="buttonLabel"
      :buttonType="buttonType"
    >      
    </former-button>

    <search-bar @input="input" />
  </header>
</template>

<script>
  import SearchBar from '@/components/Search/Bar.vue';
  import FormerButton from '@/components/Former/Button.vue';

  export default {
    name: 'NavigationHeader',
    components: {
      SearchBar,
      FormerButton,
    },
    data() {
      return {
        buttonLabel: 'Criar contato',
        buttonType: 'creationButton',
      }
    },

    computed: {
      buttonActive() {
        return this.$route.name === 'contacts-list';
      }
    },

    methods: {
      input(value) {
        this.$emit('input', value);
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/stylesheets/variables/_sizes.scss';

  .bg_header {
    display: flex;
    height: 8*$x;
    justify-content: space-between;
    padding: 2*$x;
    width: 180*$x;
  }

  .ic_logo {
    height: 4*$x;
    margin-right: 7.5*$x;
    object-fit: contain;
    width: 18.5*$x;
  }

  .button {
    margin-right: 3*$x;
  }
</style>
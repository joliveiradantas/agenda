<template>
  <div class="search-bar">
    <former-input
      ref="input"
      :field="field"
      type='search'
      @input="input"
    />

    <img src="@/assets/images/ic-search.svg" class="ic_search">
  </div>
</template>

<script>
  import { input } from '@/_CRUDL/helpers/form/fields';

  import FormerInput from '@/components/Former/Field/Input.vue';

  export default {
    name: 'SearchBar',
    components: {
      FormerInput,
    },
     props: {
      id: {
        type: String,
        default: null,
      },      
      placeholder: {
        type: String,
        default: 'Buscar...',
      },
    },    
    computed: {
      field() {
        return {
          ...input,
          id: this.id || 'input-search',
          placeholder: this.placeholder,
        };
      },
    },

    methods: {
      input(value) {
        this.$emit('input', value);
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/stylesheets/variables/_sizes.scss';

  .search-bar {
    position: relative;
  }

  .ic_search {
    height: 2*$x;
    object-fit: contain;
    position: absolute;
    right: 3*$x;
    top: $x;
    width: 2*$x;
  }
</style>

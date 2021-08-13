<template>
  <div>  

    <input 
      class="busca_field"
      v-bind="options"
    />

  </div>
</template>

<script>

  export default {
    name: 'FormerInput',
    props: {
      field: {
        type: Object,
        default() {
          return {};
        },
      },
    },
    computed: {
      options() {
        const { field } = this;

        return {
          class: this.classes,
          id: field.id,
          placeholder: field.placeholder,
          ref: 'input',
        };
      },
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/stylesheets/_variables.scss';

  .busca_field {
    @include field-reset;

    background-color: $pale-lilac;
    border-radius: 0.5*$x;
    height: 4*$x;
    margin: 0;
    padding: 0.875*$x $x 0.75*$x;
    width: 129*$x;

     &::placeholder {
      color: $bluey-grey;
    }
  }
</style>

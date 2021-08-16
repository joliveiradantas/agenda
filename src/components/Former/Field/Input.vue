<template>
  <div>

    <input v-if="type === 'default'"
      :class="classes"
      v-bind="options"
      :value="value"
      @input="input"
    />
    <input v-else-if="type === 'search'"
      class="busca_field"
      v-bind="options"
      :value="value"
      @input="input"
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
      value: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: '',
      },
      size: {
        type: String,
        default: '',
      },
    },
    computed: {
      options() {
        const { field } = this;

        return {
          id: field.id,
          placeholder: field.placeholder,
          ref: 'input',
        };
      },
      classes() {
        const classes = ['default_field'];

        if(this.size === 'small') {
          classes.push('small');
        }

        return classes;
      },
    },

    methods: { 
      input() {
        const {
          input,
        } = this.$refs;

        if (!input) {
          return;
        }

        this.$emit('input', input.value);        
      },
    },
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

  .default_field {
    @include field-reset;

    background-color: $white-two;
    border: solid 1px $cloudy-blue;
    border-radius: 0.5*$x;
    height: 4*$x;
    width: 48*$x;
    
    &.small {
      width: 16*$x;
    }
  }
</style>

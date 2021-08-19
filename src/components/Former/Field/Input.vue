<template>
  <div>

    <input v-if="type === 'default'"
      :class="classes"
      v-mask="pattern"
      v-bind="options"
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
          value: field.value,
          ref: 'input',
        };
      },
      classes() {
        const classes = ['default_field'];

        if(this.size === 'small') {
          classes.push('small');
        }
        if(this.field.errors) {
          classes.push('error');
        }

        return classes;
      },
      pattern() {
        if (this.field.mask.type) {          
          return '(##) #####-####';
        }
        return '';
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

        this.field.errors = false;

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
    padding: 1.125*$x 0 0.875*$x 1.25*$x;
    width: 48*$x;
    
    &.small {
      padding: $x 0 $x 1.25*$x;
      width: 16*$x;
    }

    &.error {
      border: solid 1px $red-light;
    }
  }
</style>

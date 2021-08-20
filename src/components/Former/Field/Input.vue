<template>
  <div>

    <input v-if="type === 'default'"
      :class="classes"
      v-mask="pattern"
      v-bind="options"
      @input="input"
      @blur="blur"
    />
    <input v-else-if="type === 'search'"
      class="busca_field"
      v-bind="options"
      :value="value"
      @input="input"
    />

    <span class="validation-message" v-if="!field.validated">{{ validationMessage }}</span>

  </div>
</template>

<script>
  import emailValidator from '@/helpers/validators/email';

  export default {
    name: 'FormerInput',
    data() {
      return {
        validationMessage: '',
      }
    },
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
        if (this.field.mask.type === 'phone') {          
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

        this.clearValidations();

        this.$emit('input', input.value);        
      },
      blur() {
        if(this.field.validations.type === 'email') {
          const isValid = !emailValidator(this.field.value);

          if(!isValid) {
            this.setValidationMessage('não é um email válido'); 
            this.setErrorValidation();
          }
        }
      },
      clearValidations() {
        this.field.errors = false;
        this.field.validated = true;
      },
      setErrorValidation() {
        this.field.errors = true;
        this.field.validated = false;
      },
      setValidationMessage(message) {
        this.validationMessage = message;
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

  .validation-message {
    color: $red-light;
    font-size: $font-smallest;
  }
</style>

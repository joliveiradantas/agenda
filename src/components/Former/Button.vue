<template>
  <span 
    is="button" 
    ref="button" 
    :class="classes"
    :disabled="buttonDisabled"
    @click="click"
  >    
    <img v-if="icon" :src="iconPath" class="icon">
    <span>
      {{ label }}
    </span>   
  </span>
</template>

<script>

  export default {
    name: 'FormerButton',
    props: {
      icon: {
        type: String,
        default: '',
      },
      label: {
        type: String,
        default: '',        
      },
      buttonType: {
        type: String,
        default: '',
      },
      higher: {
        type: Boolean,
        default: false,
      },
      buttonActive: {
        type: Boolean,
        default: true,
      }
    },
    computed: {
      classes() {
        const classes = ['former-button'];

        if(this.buttonType === 'creationButton') {
          classes.push('creation-button');
        }
        if(this.higher) {
          classes.push('higher');
        }
        if(this.buttonType === 'defaultButton') {
          classes.push('default-button');          
        }
        if(this.buttonType === 'deleteButton') {
          classes.push('delete-button');
        }
        if(this.buttonActive) {
          classes.push('active');
        }

        return classes;
      },
      iconPath() {
        if(this.icon === 'plus') {
          return require('@/assets/images/ic-plus.svg');
        }
      },
      buttonDisabled() {
        return this.buttonType === 'defaultButton' && !this.buttonActive;
      }
    },

    methods: {
      click() {
        this.$emit('click');
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/stylesheets/_variables.scss';

  @mixin former-button($background-color, $color) {
    background-color: $background-color;
    color: $color;
  }

  .former-button {
    @include button-reset;
   
    border-radius: 2.5*$x;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16), 0 0 0 0.5px rgba(0, 0, 0, 0.08), inset 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 2px 4px 0.5px rgba(0, 0, 0, 0.16);
    display: flex;
    flex-direction: row;
    font-size: $font-medium;
    font-weight: 500;
    justify-content: flex-start;
    user-select: none;
  }

  .creation-button {
    @include former-button($light-yellowish-green, $red);

    height: 4*$x;
    padding: $x 2.75*$x $x 2*$x;
    width: 18*$x;

    &.higher {
      height: 5*$x;
      padding: 1.5*$x 2.75*$x 1.5*$x 2*$x;
    }
  }

  .default-button {
    @include former-button($red, $white-two);

    height: 4*$x;
    padding: $x 2*$x $x 2*$x;
    opacity: 0.32;
    width: 9*$x;

    &.active {
      opacity: 1;
    }
  }

  .delete-button {
    @include former-button($red, $white-two);

    height: 4*$x;
    padding: $x 2*$x $x 2*$x;
    width: 10*$x;
  }  

  .icon {
    margin-right: $x;
  }
</style>

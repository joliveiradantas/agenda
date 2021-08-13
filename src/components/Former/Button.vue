<template>
  <span is="button" ref="button" class="former-button">    
    <img :src="iconPath">
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
      }
    },
    computed: {
      iconPath() {
        if (this.icon === 'plus') {
          return require('@/assets/images/ic-plus.svg');
        }
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/stylesheets/_variables.scss';

  @mixin former-button($background-color, $color: $white) {
    background-color: $background-color;
    color: $color;
  }

  .former-button {
    @include button-reset;
   
    border-radius: 2.5*$x;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16), 0 0 0 0.5px rgba(0, 0, 0, 0.08), inset 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 2px 4px 0.5px rgba(0, 0, 0, 0.16);
    display: flex;
    flex-direction: row;
    font-size: 14px;
    font-weight: 500;
    height: 5*$x;
    justify-content: space-between;
    margin: 3*$x 5.875*$x 0;
    padding: 1.5*$x 2.75*$x 1.5*$x 2*$x;
    user-select: none;
    width: 18*$x;
    
    @include former-button($light-yellowish-green, $red);
  }
</style>

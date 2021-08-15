<template>
  <portal to="popups">
    <div class="popup-modal">
      <div class="popup-modal-content">
        <div class="popup-modal-header">
          {{ title }}         
        </div>

        <slot name="content"/>

        <div class="popup-modal-footer">
          <span :class="cancelationClasses">Cancelar</span>
          <former-button
            :buttonType="buttonType"
            :label="buttonLabel"
          >
          </former-button>  
        </div>
      </div>
    </div>
  </portal>
</template>

<script>
  import FormerButton from '@/components/Former/Button.vue';

  export default {
    name: 'PopupModal',
    components: {
      FormerButton,
    },
    props: {
      title: {
        type: String,
        default: '',
      },
      exclusionModal: {
        type: Boolean,
        default: false,
      },
      buttonType: {
        type: String,
        default: '',
      },
      buttonLabel: {
        type: String,
        default: '',
      }
    },

    computed: {
      cancelationClasses() {
        const classes = ['cancel'];

        if(this.exclusionModal) {
          classes.push('exclusion');
        }

        return classes; 
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/stylesheets/_variables.scss';

  .popup-modal {
    background-color: rgba(0, 0, 0, 0.4);
    bottom: 0;
    height: 128*$x;
    left: 0;
    margin: 0 auto;
    position: fixed;
    right: 0;
    top: 0;
    width: 180*$x;
  }

  .popup-modal-content {
    background-color: $white-two;
    border-radius: 2*$x;
    box-shadow: 0 2*$x 1.25*$x 0 rgba(0, 0, 0, 0.16);
    height: 42.75*$x;
    margin: 29.25*$x 65.25*$x 56*$x 60.75*$x;
    width: 54*$x;
  }

  .popup-modal-header {
    border-bottom: solid 1px $cloudy-blue;
    height: 5.9375*$x;
    padding: 2*$x 0 1.5625*$x 2*$x;
  }

  .popup-modal-footer {
    border-top: solid 1px $cloudy-blue;
    display: flex;
    height: 7.875*$x;
    justify-content: space-between;
    padding: 1.875*$x 2*$x 2*$x 0;
  }

  .cancel {
    color: $red;
    display: inline-block;
    font-size: 1.75*$x;   
    margin: $x 0 0 34*$x;

    &.exclusion {
      margin-left: 33*$x
    }
  }
</style>

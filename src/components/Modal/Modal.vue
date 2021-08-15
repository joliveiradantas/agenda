<template>
  <portal to="popups">
    <div class="popup-modal">
      <div class="popup-modal-content"></div>
    </div>
  </portal>
</template>

<script>
  export default {
    name: 'PopupModal',   
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
    border-radius: 16px;
    box-shadow: 0 16px 10px 0 rgba(0, 0, 0, 0.16);
    height: 342px;
    margin: 234px 522px 448px 486px;
    width: 432px;
  }
</style>

<template>
  <div>
    <ul class="contacts-list header">
      <li>Contatos</li>
      <li>E-mail</li>
      <li>Telefone</li>
    </ul>
    <ol class="contacts-list body">
      <li class="contacts-list-column contact">
        <a class="contacts-list-letter oval">A</a>
        Alana
      </li>
      <li class="contacts-list-column email">
        alana@mail.com
      </li>
      <li class="contacts-list-column phone">
        (11) 98432-9263
      </li>
      <li class="contacts-list-column icons">
        <img src="@/assets/images/ic-edit.svg" class="ic_edit">
        <img src="@/assets/images/ic-delete.svg" class="ic_delete">
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'ContactsList',
  }
</script>

<style lang="scss" scoped>
  //TODO : Refactor com css grid
  @import '@/assets/stylesheets/_variables.scss';  
  
  .contacts-list {
    background-color: $white-two;
    border: solid 1px $white;
    border-radius: 0.5*$x;  
    display: flex;    
    height: 5*$x;
    margin: 0 2*$x 0 2*$x;    
    width: 176*$x;     
  }

  .header {
    color: $bluey-grey;
    font-size: 1.625*$x;
    margin-bottom: 1px;
    margin-top: 2*$x;
    padding: 2*$x 0 1.125*$x 5.875*$x;

    
    li:first-child {
      margin-right: 41.875*$x;
    }

    li:nth-child(2) {
      margin-right: 56.125*$x;
    }

    li:nth-child(3) {
      margin-right: 437px;
    }
  }

  .body {
    align-items: center;
    border-top: none;
    display: flex;
    font-size: 1.75*$x;
    padding: $x 2*$x $x $x;
  }

  .contacts-list-column {
    width: 345.75px;
  }

  .contacts-list-letter {
    color: $white-two;
    font-size: 1rem;
    text-align: center;
  }

  .oval {    
    background-color: #fa8d68;
    border-radius: 1.5*$x; 
    height: 24px;
    margin: 0 16px 0 0;
    padding: 3px 5px 2px 6px;
    width: 24px;
  }

  .email {
    padding-left: 81.25px;
  }

  .phone {
    padding-left: 220.5px;
  }

  .icons {
    padding-left: 290.75px;
  }

  .ic_edit {
    /* margin-right: 24px; */
  }
</style>
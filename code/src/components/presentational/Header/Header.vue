<template lang="pug">
  .main-header
    router-link(to="/login").main-header__users
      span Login / Sign-up
    router-link(to="/").main-header__logo
      logo()
    router-link(to="/search").main-header__search
      span Search
</template>


<script>
import Logo from '../Logo/Logo.vue'

export default {
  name: 'header',
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
  .main-header {
    display: none;
    @media screen and (min-width: 780px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 65px;
      margin-bottom: 10px;
      border-bottom: 1px solid rgba(0,0,0,.15) !important;
    }
    &__users {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      span {
        font-size: 12px;
        color: #ff5252;
        cursor: pointer;
      }
    }
    &__logo {
      flex: 1;
      display: flex;
      justify-content: center;
    }
    &__search {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      span {
        font-size: 12px;
        color: #ff5252;
        cursor: pointer;
      }
    }
  }
</style>

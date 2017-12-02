<template lang="pug">
  .main-header
    .main-header__logo
      logo()
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
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 65px;
      margin-bottom: 10px;
      border-bottom: 1px solid rgba(0,0,0,.15) !important;
    }
  }
</style>

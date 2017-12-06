<template lang="pug">
  .mobile-navigation
    .mobile-navigation__logo
      logo()
    .mobile-navigation__nav-icon
      nav-icon()
</template>

<script>
import Logo from '../Logo/Logo.vue'
import NavIcon from './NavIcon.vue'

export default {
  name: 'mobile-navigation',
  components: {
    NavIcon,
    Logo
  }
}
</script>

<style lang="scss">
  .mobile-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    @media screen and (min-width: 780px) {
      display: none;
    }
  }
</style>

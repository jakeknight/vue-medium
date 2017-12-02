<template lang="pug">
  #app.container
    main-header()
    main-navigation()
    mobile-navigation()
    router-view
</template>

<script>
import MainHeader from './components/presentational/Header/Header.vue'
import MainNavigation from './components/presentational/Navigation/Navigation.vue'
import MobileNavigation from './components/presentational/Navigation/MobileNavigation.vue'

export default {
  components: {
    MainHeader,
    MainNavigation,
    MobileNavigation
  },
  name: 'app'
}
</script>

<style lang="scss" src="@/assets/scss/main.scss">
</style>

<template lang="pug">
  #app.container
    main-header()
    main-navigation(v-show="!isAdminPage")
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
  name: 'app',
  data () {
    return {
      isAdminPage: false
    }
  },
  created () {
    this.checkIfAdminPage()
  },
  watch: {
    '$route': 'checkIfAdminPage'
  },
  methods: {
    checkIfAdminPage () {
      if (this.$router.currentRoute.path === '/admin' || this.$router.currentRoute.path === '/admin/new-article' || this.$router.currentRoute.path === '/login') {
        this.isAdminPage = true
      } else {
        this.isAdminPage = false
      }
    }
  }
}
</script>

<style lang="scss" src="@/assets/scss/main.scss">
</style>

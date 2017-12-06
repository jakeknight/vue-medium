<template lang="pug">
  #app.container
    main-header()
    main-navigation(v-show="!isAdminPage")
    mobile-navigation()
    auth-modal(v-show="authModalActive")
    router-view
</template>

<script>
import { mapState } from 'vuex'

import MainHeader from './components/presentational/Header/Header.vue'
import MainNavigation from './components/presentational/Navigation/Navigation.vue'
import MobileNavigation from './components/presentational/Navigation/MobileNavigation.vue'
import AuthModal from './components/presentational/Modals/AuthModal.vue'

export default {
  components: {
    MainHeader,
    MainNavigation,
    MobileNavigation,
    AuthModal
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
  },
  computed: {
    ...mapState([
      'authModalActive'
    ])
  }
}
</script>

<style lang="scss" src="@/assets/scss/main.scss">
</style>

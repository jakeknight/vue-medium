<template lang="pug">
  .search-bar
    input(
      type="text"
      @keyup.enter="searchArticles(searchQuery)"
      v-model="searchQuery"
      placeholder="Search..."
    )
</template>


<script>
import { mapActions } from 'vuex'
export default {
  name: 'search-bar',
  methods: {
    ...mapActions([
      'searchArticles'
    ])
  },
  computed: {
    searchQuery: {
      get () {
        return this.$store.state.searchQuery
      },
      set (value) {
        this.$store.commit('searchArticles', value)
      }
    }
  }
}
</script>

<style lang="scss">
  .search-bar {
    width: 100%;
    input {
      background-color: #fff;
      padding-bottom: 10px;
      font-size: 20px;
      border: 0;
      width: 100%;
      border-bottom: 1px solid rgba(0,0,0, 0.85);
      outline: none;
    }
  }
</style>

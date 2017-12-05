<template lang="pug">
  .page.page--search
    .search
      .search__input
        search-bar()
      .search__articles
        card-repeater(
          :articleData="searchData"
        )
</template>

<script>
import { mapState } from 'vuex'

import CardRepeater from '../components/containers/Cards/CardRepeater.vue'
import SearchBar from '../components/presentational/Forms/SearchBar.vue'
export default {
  name: 'search',
  components: {
    SearchBar,
    CardRepeater
  },
  computed: {
    ...mapState([
      'searchData'
    ])
  }
}
</script>

<style lang="scss">
  .search {
    &__input {
      padding-bottom: 30px;
    }
    &__articles {

    }
  }
</style>

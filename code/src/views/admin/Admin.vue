<template lang="pug">
  .page.page--admin
    .admin
      .admin__article-list
        list(
          :data="articles"
        )
</template>

<script>
import { mapActions, mapState } from 'vuex'
import List from '../../components/containers/List/List.vue'

export default {
  name: 'admin',
  components: {
    List
  },
  created () {
    if (this.articles.length === 0) {
      this.getArticles()
    }
  },
  methods: {
    ...mapActions([
      'getArticles'
    ])
  },
  computed: {
    ...mapState([
      'articles'
    ])
  }
}
</script>

<style lang="scss">

</style>

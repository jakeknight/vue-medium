<template lang="pug">
  .page.page--index
    main-title(title="Popular on Jakeium")
    card-repeater(style="margin-top:20px;"
      :articleData="articles"
    )
</template>

<script>
import { mapActions, mapState } from 'vuex'

import MainTitle from '../components/presentational/Titles/MainTitle.vue'
import CardRepeater from '../components/containers/Cards/CardRepeater.vue'
export default {
  name: 'index',
  components: {
    MainTitle,
    CardRepeater
  },
  data () {
    return {}
  },
  created () {
    this.getArticles()
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

<style lang="scss" scoped>

</style>

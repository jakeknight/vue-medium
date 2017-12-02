<template lang="pug">
  .page.page--topic
    main-title(:title="activeTopicData.topic")
    card-repeater(style="margin-top:20px;"
      :articleData="activeTopicData.articles"
    )
</template>

<script>
import { mapActions, mapState } from 'vuex'

import MainTitle from '../../components/presentational/Titles/MainTitle.vue'
import CardRepeater from '../../components/containers/Cards/CardRepeater.vue'
export default {
  name: 'topic',
  components: {
    MainTitle,
    CardRepeater
  },
  data () {
    return {
    }
  },
  created () {
    this.getTopicData()
  },
  watch: {
    '$route': 'getTopicData'
  },
  methods: {
    ...mapActions([
      'getTopicData',
      'getArticles'
    ])
  },
  computed: {
    ...mapState([
      'activeTopicData',
      'articles'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>

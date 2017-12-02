<template lang="pug">
  .page.page--detail
    .detail
      .detail__author
        basic-text(
          :text="activeArticleData.article.author"
          size="16px"
          color="rgba(0, 0, 0, 0.54)"
        )
      .detail__date
        basic-text(
          :text="activeArticleData.article.dateAdded | moment('dddd, MMMM Do YYYY')"
          size="14px"
        )
      .detail__title
        article-title(
          :title="activeArticleData.article.title"
        )
      .detail__content
        basic-text(
          :text="activeArticleData.article.content"
        )
</template>

<script>
import { mapState } from 'vuex'

import ArticleTitle from '../../components/presentational/Titles/ArticleTitle.vue'
import BasicText from '../../components/presentational/Text/BasicText.vue'

export default {
  name: 'detail',
  components: {
    ArticleTitle,
    BasicText
  },
  computed: {
    ...mapState([
      'activeArticleData'
    ])
  }
}
</script>

<style lang="scss">
  .detail {
    &__author {
      padding-bottom: 5px;
    }
    &__date {
      padding-bottom: 20px;
    }
    &__title {
      padding-bottom: 20px;
    }
  }
</style>

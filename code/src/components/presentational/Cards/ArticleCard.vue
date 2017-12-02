<template lang="pug">
  .article-card
    .article-card__image
      img(:src="imgSrc")
    .article-card__content
      router-link(
        :to="{path: '/detail/' + titleSlug}"
        )
        .article-card__content__title(@click="setActiveArticle(id)")
          | {{ title }}
        .article-card__content__excerpt
          | {{ excerpt }}
      .article-card__content__category
        router-link(:to="{path: '/topic/' + category}")
        | {{ category }}
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'article-card',
  props: {
    id: Number / String,
    title: String,
    imgSrc: String,
    excerpt: String,
    category: String
  },
  methods: {
    ...mapActions([
      'setActiveArticle'
    ])
  },
  computed: {
    titleSlug () {
      return this.title.replace(/\s+/g, '-').toLowerCase()
    }
  }
}
</script>

<style lang="scss" scoped>
  .article-card {
    display: flex;
    flex-direction: row;
    border: 1px solid rgba(0,0,0,.15) !important;
    margin-bottom: 20px;
    &__image {
      width: 258px;
      img {
        display: block;
      }
    }
    &__content {
      padding: 25px;
      a {
        color: inherit;
        text-decoration: none;
      }
      &__title {
        font-weight: bold;
        padding-bottom: 20px;
      }
      &__excerpt {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.54);
        padding-bottom: 20px;
      }
      &__category {
        font-size: 14px;
        color: #ff5252;
        cursor: pointer;
      }
    }
  }
</style>

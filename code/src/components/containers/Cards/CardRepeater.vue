<template lang="pug">
  .card-repeater
    article-card(
      class="col-md-6 no-gutters"
      v-for="card, index in articleData"
      :key="index"
      :id="card._id"
      :title="card.title"
      :imgSrc="card.imgSrc"
      :excerpt="card.excerpt"
      :category="card.category"
    )
</template>

<script>
import ArticleCard from '../../presentational/Cards/ArticleCard.vue'

export default {
  name: 'card-repeater',
  components: {
    ArticleCard
  },
  props: {
    articleData: Array / Object
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.card-repeater {
  display: flex;
  flex-wrap: wrap;
}
</style>

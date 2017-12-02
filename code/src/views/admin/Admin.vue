<template lang="pug">
  .page.page--admin
    .admin
      .admin__actions
        .admin__action__new-post
          router-link(to="/admin/new-article")
            basic-button(
              text="New post"
              color="#66BB6A"
            )
      .admin__article-list
        list(
          :data="articles"
        )
</template>

<script>
import { mapActions, mapState } from 'vuex'
import List from '../../components/containers/List/List.vue'
import BasicButton from '../../components/presentational/Buttons/BasicButton.vue'

export default {
  name: 'admin',
  components: {
    List,
    BasicButton
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
.admin {
  &__actions {
    display: flex;
    justify-content: flex-end;
  }
  &__article-list {
    padding-top: 25px;
  }
}
</style>

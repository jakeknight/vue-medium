<template lang="pug">
  .list-item
    .list-item__detail
      span.list-item__detail__title {{ title }}
      span.list-item__detail__author Author: {{ author }}
    .list-item__actions
      span.list-item__actions__delete(@click="deleteArticle(id)") DELETE
      span.list-item__actions__edit(@click="editItem(id)") EDIT
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'list-item',
  props: {
    title: String,
    author: String,
    id: String
  },
  methods: {
    ...mapActions([
      'editArticle',
      'deleteArticle'
    ])
  }
}
</script>

<style lang="scss">
  .list-item {
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(black, 0.2);
    &__detail {
      align-items: flex-start;
      &__title {
        font-weight: bold;
        padding-right: 10px;
      }
      &__author {
        font-size: 14px;
      }
    }
    &__actions {
      align-items: flex-end;
      &__delete {
        padding-right: 10px;
        color: red;
        cursor: pointer;
      }
      &__edit {
        color: orange;
        cursor: pointer;
      }
    }
  }
</style>

<template lang="pug">
  .list-item
    .list-item__title
      span {{ title }}
    .list-item__actions
      span DELETE
      span EDIT
</template>

<script>
export default {
  name: 'list-item',
  props: {
    title: String
  }
}
</script>

<style lang="scss">
  .list-item {
    display: flex;
    padding: 15px;
    justify-content: space-between;
    &__title {
      align-items: flex-start;
    }
    &__actions {
      align-items: flex-end;
    }
  }
</style>

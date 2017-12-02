<template lang="pug">
  .list
    .list__item(v-for="item, index in data")
      list-item(
        :title="item.title"
        :key="index"
      )
</template>


<script>
import ListItem from '../../presentational/List/ListItem.vue'
export default {
  name: 'list',
  props: {
    data: Array / Object
  },
  components: {
    ListItem
  }
}
</script>

<style lang="scss">

</style>

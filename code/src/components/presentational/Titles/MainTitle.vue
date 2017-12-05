<template lang="pug">
  .main-title
    span(class="main-title__text") {{ title }}
</template>

<script>

export default {
  name: 'main-title',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
  .main-title {
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0,0,0,.15) !important;
    &__text {
      font-weight: 500;
      font-size: 20px;
      text-transform: capitalize;
    }
  }
</style>

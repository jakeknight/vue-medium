<template lang="pug">
  .article-title
    h1 {{ title }}
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss">
  .article-title {
    h1 {
      margin: 0;
    }
  }
</style>

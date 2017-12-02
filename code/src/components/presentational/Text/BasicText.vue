<template lang="pug">
  .basic-text(:style="{fontSize: size, color: color}")
    | {{ text }}
</template>

<script>
export default {
  props: {
    text: String,
    size: String,
    color: String
  },
  name: 'basic-text'
}
</script>


<style lang="scss">
.basic-text {

}
</style>

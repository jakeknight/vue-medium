<template lang="pug">
  .basic-button(
    :style="{backgroundColor: color, color: textColor}"
  )
    span.basic-button__text {{ text }}
</template>

<script>
export default {
  name: 'basic-button',
  props: {
    text: String,
    color: String,
    textColor: String
  }
}
</script>


<style lang="scss">
  .basic-button {
    width: 80px;
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    border-radius: 5px;
    color: white;
    &__text {
      font-size: 14px;
    }
  }
</style>

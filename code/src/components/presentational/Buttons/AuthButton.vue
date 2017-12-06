<template lang="pug">
  .auth-button
    .auth-button__icon
    .auth-button__text
      | {{ text }}
</template>

<script>
export default {
  name: 'auth-button',
  props: {
    text: String,
    icon: String
  }
}
</script>

<style lang="scss">
  .auth-button {
    display: flex;
    flex-direction: row;
    padding: 0px 10px;
    height: 40px;
    background-color: #fff;
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
    align-items: center;
    margin-bottom: 20px;
    &__icon {

    }
    &__text {
      font-size: 14px;
    }
  }
</style>

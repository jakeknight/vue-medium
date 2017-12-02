<template lang="pug">
  .logo
    span Jakeium
</template>

<script>
export default {
  name: 'logo'
}
</script>

<style lang="scss">
  .logo {
    font-size: 12px;
    font-weight: bold;
    @media screen and (min-width: 414px) {
      font-size: 16px;
    }
    @media screen and (min-width: 780px) {
      font-size: 20px;
    }
    @media screen and (min-width: 1080px) {
      font-size: 26px;
    }
  }
</style>

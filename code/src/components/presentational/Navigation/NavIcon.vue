<template lang="pug">
  .nav-icon
    span.nav-icon__line.nav-icon__line--short
    span.nav-icon__line
    span.nav-icon__line(style="display:none;")
    span.nav-icon__line.nav-icon__line--short
</template>

<script>
export default {
  name: 'nav-icon'
}
</script>

<style lang="scss">
.nav-icon {
  position: relative;
  transform: rotate(135deg);
  span {
    &:nth-of-type(4) {
      transform: rotate(180deg);
    }
  }
  &__line {
    display: block;
    position: relative;
    margin-bottom: 6px;
    height: 3px;
    width: 25px;
    background-color: black;
    transition: all 0.3s ease;
    &--short {
      width: 15px;
      margin-left: 3.5px;
    }
  }
}
</style>

<template lang="pug">
  .basic-dropdown
    .basic-dropdown__label
      label() {{ label }}
    .basic-dropdown__list
      select()
        option(
          v-for="option, index in list"
          :key="index"
          :value="option"
          ) {{ option }}
</template>

<script>
export default {
  name: 'basis-dropdown',
  props: {
    label: String,
    list: Array / Object
  }
}
</script>

<style lang="scss">
  .basic-dropdown {
    display: flex;
    flex-direction: row;
    align-items: center;
    &__label {
      padding-right: 20px;
    }
  }
</style>

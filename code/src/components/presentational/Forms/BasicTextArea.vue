<template lang="pug">
  .basic-text-area
    .basic-text-area__label
      label() {{ label }}
    .basic-text-area__field
      textarea(
        :cols="cols"
        :rows="rows"
      )
</template>

<script>
export default {
  name: 'basic-text-area',
  props: {
    label: String,
    vModel: String,
    cols: String,
    rows: String
  }
}
</script>

<style lang="scss">
  .basic-text-area {
    display: flex;
    flex-direction: row;

    &__label {
      padding-right: 20px;
    }
    &__field {
      width: 100%;
      textarea {
        width: 100%;
        padding: 6px 0px 6px 0px;
        border-radius: 2px;
        box-shadow: none;
        font-size: 14px;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        color: rgba(black, 0.85);
      }
    }
  }
</style>

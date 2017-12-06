<template lang="pug">
  .basic-input
    .basic-input__label(v-show="hideLabel")
      label() {{ label }}
    .basic-input__field
      input(
        :type="placeholder === 'password' ? 'password' : 'text'"
        :placeholder="placeholder"
        )
</template>

<script>
export default {
  name: 'basic-input',
  props: {
    name: String,
    label: String,
    vModel: String,
    placeholder: String
  },
  data () {
    return {
      hideLabel: false
    }
  },
  mounted () {
    this.label ? this.hideLabel = true : this.hideLabel = false
  }
}
</script>

<style lang="scss">
  .basic-input {
    display: flex;
    flex-direction: row;
    flex-wrap: row;
    align-items: center;
    &__label {
      padding-right: 20px;
    }
    &__field {
      width: 100%;
      input {
        width: 100%;
        padding: 10px 0px 10px 0px;
        border-radius: 3px;
        box-shadow: none;
        font-size: 14px;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        color: rgba(black, 0.85);
      }
    }
  }
</style>

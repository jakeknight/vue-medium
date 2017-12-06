<template lang="pug">
  .login-form
    .login-form__username
      basic-input()
    .login-form__password
      basic-input()
</template>

<script>
import BasicInput from '../../presentational/Forms/BasicInput.vue'
export default {
  components: {
    BasicInput
  }
}
</script>

<style lang="scss">
  .login-form {
    background-color: grey;
    padding: 20px;
    border-radius: 5px;
    &__username {

    }
    &__password {

    }
  }
</style>

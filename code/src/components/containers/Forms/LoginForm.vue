<template lang="pug">
  .login-form
    .login-form__username
      basic-input(
        placeholder="email"
      )
    .login-form__password
      basic-input(
        placeholder="password"
      )
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
    width: 40%;
    &__username {
      padding-bottom: 20px;
    }
    &__password {

    }
  }
</style>

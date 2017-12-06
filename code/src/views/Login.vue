<template lang="pug">
  .page.page--login
    .login
      .login__form
        login-form()
</template>

<script>
import LoginForm from '../components/containers/Forms/LoginForm.vue'
export default {
  name: 'login',
  components: {
    LoginForm
  }
}
</script>


<style lang="scss">
.login {
  display: flex;
  justify-content: center;
  &__form {
    width: 500px;
  }
}
</style>

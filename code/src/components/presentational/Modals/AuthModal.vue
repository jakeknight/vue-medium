<template lang="pug">
  .auth-modal
    .auth-modal__content
      .auth-modal__title(
        v-html="isSignUp === true ? '<h1>Sign-up.</h1>' : '<h1>Sign-in.</h1>'"
      )
      .auth-modal__text(
        v-show="!isSignUp"
      )
        span Are you new to Jakeium?
        span.auth-modal__text__sign-up(@click="signUp") &nbsp;Sign up.
      .auth-modal__options(v-show="!isSignUp")
        .auth-modal__options__google(@click="googleAuth")
          auth-button(
            text="Sign in with Google"
          )
        .auth-modal__options__facebook()
          auth-button(
            text="Sign in with Facebook"
          )
        .auth-modal__options__twitter
          auth-button(
            text="Sign in with Twitter"
            disabled="true"
          )
        .auth-modal__options__email
          auth-button(
            text="Sign in with email"
          )
      .auth-modal__sign-up(v-show="isSignUp")
        .auth-modal__sign-up__email
          basic-input(
            placeholder="Email"
          )
        .auth-modal__sign-up__email
          basic-input(
            placeholder="Password"
          )

</template>

<script>
import AuthButton from '../Buttons/AuthButton.vue'
import AuthService from '../../../auth/auth-service'
import BasicInput from '../Forms/BasicInput.vue'

const auth = new AuthService()
const { googleAuth, facebookAuth } = auth

export default {
  name: 'auth-modal',
  data () {
    return {
      isSignUp: false
    }
  },
  components: {
    AuthButton,
    BasicInput
  },
  methods: {
    googleAuth,
    facebookAuth,
    signUp () {
      this.isSignUp = true
    }
  }
}
</script>

<style lang="scss">
.auth-modal {
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.65);
  &__content {
    background-color: #ECECEC;
    width: 350px;
    min-height: 400px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,.15);
    padding: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  &__title {
    opacity: 0.8;
    h1 {
      font-weight: 600;
    }
  }
  &__text {
    padding-bottom: 20px;
    span {
      font-size: 14px;
    }
    &__sign-up {
      color: red;
      opacity: 0.7;
      cursor: pointer;
    }
  }
  &__options {
    width: 250px;
    &__google {}
    &__email {}
  }
  &__sign-up {
    padding-top: 30px;
    width: 250px;
    &__email {
      padding-bottom: 10px;
    }
    &__password {}
  }
}
</style>

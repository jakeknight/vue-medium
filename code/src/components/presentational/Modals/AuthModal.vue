<template lang="pug">
  .auth-modal
    .auth-modal__content
      .auth-modal__title
        h1 Sign-in.
      .auth-modal__text
      .auth-modal__options
        .auth-modal__options__google
        .auth-modal__options__email
</template>

<script>
export default {

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
    width: 450px;
    height: 520px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,.15);
    padding: 30px;
    display: flex;
    justify-content: center;
  }
  &__title {
    opacity: 0.8;
    h1 {
      font-weight: 600;
    }
  }
  &__text {

  }
}
</style>

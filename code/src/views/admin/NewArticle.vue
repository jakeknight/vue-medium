<template lang="pug">
  .page.page--new-article
    .new-article
      .new-article__title
        main-title(
          title="New article"
        )
      form.new-article__form
        .new-article__form__title
          basic-input(
            label="Title"
          )
        .new-article__form__author
          basic-input(
            label="Author"
          )
        .new-article__form__category
          basic-dropdown(
            label="Category"
            :list="dropdownData"
            vModel="new-article-category"
          )
        .new-article__form__img
          basic-input(
            label="Img URL"
          )
        .new-article__form__text-area
          basic-text-area(
            label="Content"
            rows="15"
          )
        .new-article__form__submit
          basic-button(
            text="Post"
            color="rgb(102, 187, 106)"
            size="14px"
          )
</template>

<script>
import MainTitle from '../../components/presentational/Titles/MainTitle.vue'
import BasicInput from '../../components/presentational/Forms/BasicInput.vue'
import BasicDropdown from '../../components/presentational/Forms/BasicDropdown.vue'
import BasicButton from '../../components/presentational/Buttons/BasicButton.vue'
import BasicTextArea from '../../components/presentational/Forms/BasicTextArea.vue'

export default {
  name: 'new-article',
  components: {
    MainTitle,
    BasicInput,
    BasicDropdown,
    BasicButton,
    BasicTextArea
  },
  data () {
    return {
      dropdownData: [
        'Technology',
        'Creative',
        'Health',
        'Design',
        'Culture',
        'Music'
      ]
    }
  }
}
</script>

<style lang="scss">
.new-article {

  &__title {}
  &__form {
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    &__title {
      padding-bottom: 25px;
    }
    &__author {
      padding-bottom: 25px;
    }
    &__category {
      padding-bottom: 25px;
    }
    &__img {
      padding-bottom: 25px;
      align-items: flex-end;
    }
  }
}
</style>

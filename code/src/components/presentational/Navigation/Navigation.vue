<template lang="pug">
  .main-navigation
    ul.main-navigation__list(v-for="item, index in navigationItems")
      li.main-navigation__list__item(:key="index" @click="setActiveTopic(item)")
        router-link(
          :to="item === 'home' ? {path:'/'} : {path: '/topic/' + item}") {{ item }}
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'navigation',
  data () {
    return {
      navigationItems: [
        'home',
        'technology',
        'creative',
        'health',
        'design',
        'culture',
        'music'
      ]
    }
  },
  methods: {
    ...mapActions([
      'setActiveTopic'
    ])
  }
}
</script>

<style lang="scss" scoped>
.main-navigation {
  display: none;
  @media screen and (min-width: 780px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }
  &__list {
    list-style-type: none;
    display: inline-block;
    &__item {
      font-size: 14px;
      text-transform: uppercase;
      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }

}
</style>

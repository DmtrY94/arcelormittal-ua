<template>
  <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
  >
    <div v-if="isOpen" class="navigation-mobile">
      <nav class="navigation-mobile__conteiner container">
        <ul class="navigation-mobile__list">
          <li
            v-for="item in menus"
            :key="item.node.id"
            class="navigation-mobile__item"
          >
            {{ item.node.label }}
          </li>
        </ul>
      </nav>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    menus: {},
    isOpen: {},
  },
  methods: {
    beforeEnter(el) {
      this.$gsap.set(el, {
        x: 150,
        opacity: 0,
      })
    },
    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 0.5,
      }),
      this.$gsap.fromTo(
        '.navigation-mobile__item',
        { opacity: 0, x: 50, },
        { opacity: 1, x: 0, duration: 0.3, stagger: 0.08 }
      )
    },
    leave(el, done) {
      this.$gsap.to(el, {
        x: 100,
        opacity: 0,
        duration: 0.35,
        onComplete: done,
      })
    },
  },
}
</script>
<style lang="scss">
.navigation-mobile {
  background: #fff;
  min-height: 100vh;

  overflow-x: hidden;
  overflow-y: scroll;
  position: fixed;
  top: 64px;

  z-index: 11;
  &--active {
    transform: translate3d(-100vw, 0, 0);
  }
  &__list {
    margin: 40px 0;
  }
  &__item {
    font-size: 32px;
    line-height: 37px;
    margin-bottom: 24px;
  }
}
</style>
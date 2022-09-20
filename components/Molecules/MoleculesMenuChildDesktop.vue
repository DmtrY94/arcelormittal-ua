<template>
  <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
  >
    <div
      @mouseover="$emit('mousechild')"
      @mouseleave="$emit('mouseleave')"
      v-if="isOpen === menuParent.node.id"
    >
      <ul>
        <li
          v-for="childItem in menuParent.node.childItems.edges"
          :key="childItem.id"
          class="menu-child-item__link"
        >
          <NuxtLink :to="childItem.node.path" class="header-menu__link">
            {{ childItem.node.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    menuParent: {},
    isOpen: {},
  },
  data() {
    return {
      isOpenChild: null,
    }
  },
  methods: {
    mousechild(paramID) {
      console.log(paramID)
      this.isOpenChild = paramID
    },
    mouseleave() {
      window.clearTimeout(this.$options.valueTimeOut)
      this.$options.valueTimeOut = window.setTimeout(() => {
        this.isOpenChild = null
      }, 200)
    },
    beforeEnter(el) {
      this.$gsap.set(el, {
        x: -50,
        opacity: 0,
      })
    },
    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 0.15,
      })
      this.$gsap.fromTo(
        '.menu-child-item__link',
        { opacity: 0, x: -25 },
        { opacity: 1, x: 0, duration: 0.1, stagger: 0.05 }
      )
    },
    leave(el, done) {
      this.$gsap.to(el, {
        x: -50,
        opacity: 0,
        onComplete: done,
      })
    },
  },
}
</script>
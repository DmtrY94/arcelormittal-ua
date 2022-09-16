<template>
  <div
    @mouseover="$emit('mouseover')"
    @mouseleave="$emit('mouseleave')"
    v-if="isOpen === menuParent.node.id"
    class="header-menu menu-desktop"
    :class="{ 'menu-desktop--active': isOpen }"
    v-gsap.fromTo="[
      { opacity: 0, y: -150 },
      { opacity: 1, y: 0, duration: 0.2 },
    ]"
  >
    <div class="container">
      <div class="header-menu__inner">
        <div
          class="header-menu__title header-menu__column"
          v-gsap.fromTo="[
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 0.36, delay: 0.2 },
          ]"
        >
          <h3>{{ menuParent.node.label }}</h3>
          <p class="menu-desktop-heading__text">
            ArcelorMittal Mines and Infrastructure Canada
          </p>
          <NuxtLink
            :to="menuParent.node.path"
            class="menu-desktop-heading__link"
            @click="closeMenu()"
          >
            Перейти на сторінку
          </NuxtLink>
        </div>
        <ul class="header-menu__list">
          <li
            v-for="childItem in menuParent.node.childItems.edges"
            :key="childItem.id"
            class="header-menu__item"
          >
            <NuxtLink :to="childItem.node.path" class="header-menu__link">{{
              childItem.node.label
            }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    menuParent: {},
    isOpen: {},
  },
  mounted() {
    this.staggering()
  },
  methods: {
    closeMenu() {
      this.isOpen === null
      console.log(this.isOpen)
    },
    staggering() {
      const gsap = this.$gsap
      gsap.to('.header-menu__item', {
        x: 300,
        stagger: 1,
      })
    },
  },
}
</script>
<style lang="scss">
.header-menu {
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  z-index: 998;
  padding-top: 114px;
  padding-bottom: 36px;
  background: #fff;
  box-shadow: 0 5px 5px 0 rgb(0 0 0 / 15%);
}
.header-menu__inner {
  display: flex;
}
.header-menu__column {
  width: 33.3333%;
}
.header-menu__item {
  display: block;
}
.header-menu__link {
  padding: 8px 32px 8px 8px;
  color: #151515;
  display: inline-block;
  font-size: 18px;
  font-weight: 100;
}
.menu-desktop-heading__text {
  display: block;
  margin-top: 22px;
  font-size: 18px;
  max-width: 230px;
}
.menu-desktop-heading__link {
  display: inline-block;
  margin-top: 24px;
  padding-bottom: 8px;
  border-bottom: 1px solid;
  font-size: 18px;
}
</style>
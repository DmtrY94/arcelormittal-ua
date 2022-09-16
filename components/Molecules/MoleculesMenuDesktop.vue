<template>
  <div
    @mouseover="$emit('mouseover')"
    @mouseleave="$emit('mouseleave')"
    v-if="isOpen === menuParent.node.id"
    class="header-menu menu-desktop"
    :class="{ 'menu-desktop--active': isOpen }"
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
            @mouseover="mousechild(childItem.node.id)"
            @mouseleave="mouseleave"
          >
            <NuxtLink :to="childItem.node.path" class="header-menu__link">{{
              childItem.node.label
            }} {{childItem.node.childItems.edges.length}}</NuxtLink>
            <div class="test">
              <ul>
                
                <li
                  v-for="item in childItem.node.childItems.edges"
                  :key="item.node.id"
                >
                  {{ item }}
                  {{ isOpenChild }}
                </li>
              </ul>
            </div>
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
  data() {
    return {
      isOpenChild: null,
    }
  },
  methods: {
    closeMenu() {
      this.isOpen === null
      console.log(this.isOpen)
    },
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
  },
  mounted() {
    console.log(this.menuParent)
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
  position: relative;
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
.test {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
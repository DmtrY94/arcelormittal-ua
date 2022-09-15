<template>
  <div v-if="isOpen === menuParent.node.id" class="header-menu menu-desktop">
    <div class="container">
      <div class="header-menu__inner">
        <div class="header-menu__title header-menu__column">
          <h3>{{ menuParent.node.label }}</h3>
        </div>
        <ul class="header-menu__list">
          <li
            v-for="childItem in menuParent.node.childItems.edges"
            :key="childItem.id"
          >
            {{ childItem.node.label }}
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
</style>
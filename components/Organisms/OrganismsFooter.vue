<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-block">
        <div class="footer-block__left">
          <div class="footer-block__logo">
            <NuxtLink :to="localePath('/')"><TheLogoColor /></NuxtLink>
          </div>
        </div>
        <div class="footer-block__right">
          <div
            v-for="item in menuParent"
            :key="item.node.id"
            class="footer-menu__list"
          >
            <div class="footer-menu__title">
              <NuxtLink :to="localePath(item.node.path)">{{
                item.node.label
              }}</NuxtLink>
            </div>
            <ul>
              <li
                v-for="childItem in item.node.childItems.edges"
                :key="childItem.node.id"
              >
                <NuxtLink :to="localePath(childItem.node.path)">{{
                  childItem.node.label
                }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import getMenu from '@/queries/getMenu'
export default {
  apollo: {
    getMenu: {
      prefetch: true,
      query: getMenu,
      variables() {
        return {
          locale: this.$i18n.locale.toUpperCase(),
        }
      },
      update(data) {
        return data.getMenu.edges
      },
    },
  },
  computed: {
    menuParent() {
      return this.getMenu.filter((i) => i.node.parentId === null)
    },
  },
}
</script>
<style lang="scss">
.footer {
  background: #3f3f3f;
  padding: 76px 0;
  &-block {
    display: flex;
    align-items: flex-start;
    &__logo {
      svg {
        color: #fff;
      }
    }
    &__left {
      width: 25%;
    }
    &__right {
      display: flex;
      flex-wrap: wrap;
      width: 75%;
    }
  }
}
.footer-menu__list {
  width: 50%;
  margin-bottom: 36px;
}
.footer-menu__title {
  margin-bottom: 16px;
}
</style>
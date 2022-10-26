<template>
  <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
  >
    <div
      @mouseover="$emit('mouseover')"
      @mouseleave="$emit('mouseleave')"
      v-if="isOpen === menuParent.node.id"
      class="header-menu menu-desktop"
      :class="{ 'menu-desktop--active': isOpen }"
    >
      <div class="container">
        <div class="header-menu__inner">
          <div class="header-menu__title header-menu__column">
            <h3>{{ menuParent.node.label }}</h3>
            <p v-if="getMenuDescription" class="menu-desktop-heading__text">
              {{ getMenuDescription.translation.formenu.menuDescription }}
            </p>
            <div @click="$emit('mouseleave')">
              <NuxtLink
                :to="menuParent.node.path"
                class="menu-desktop-heading__link"
              >
                {{$t('goToPage')}}
              </NuxtLink>
            </div>
          </div>
          <div class="header-menu__column">
            <ul class="header-menu__list">
              <li
                v-for="childItem in menuParent.node.childItems.edges"
                :key="childItem.id"
                class="header-menu__item"
                @mouseover="mousechild(childItem.node.id)"
                @mouseleave="mouseleave"
                @click="$emit('mouseleave')"
              >
                <NuxtLink
                  :to="childItem.node.path"
                  class="header-menu__link"
                  :class="{
                    'header-menu__link--active':
                      isOpenChild === childItem.node.id,
                  }"
                >
                  <span> {{ childItem.node.label }}</span>
                  <span
                    v-if="childItem.node.childItems.edges.length != 0"
                    class="header-menu__icon"
                  >
                    <TheArrow />
                  </span>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="header-menu__column">
            <MoleculesMenuChildDesktop
              @mouseover="mousechild(childItem.node.id)"
              @mouseleave="mouseleave"
              v-for="childItem in menuParent.node.childItems.edges"
              :key="childItem.id"
              :is-open="isOpenChild"
              :menu-parent="childItem"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import getMenuDescription from '@/queries/getMenuDescription'

export default {
  props: {
    menuParent: {},
    isOpen: {},
    locales: {},
  },
  data() {
    return {
      isOpenChild: null,
    }
  },
  apollo: {
    getMenuDescription: {
      prefetch: true,
      query: getMenuDescription,
      variables() {
        return {
          uri: this.menuslug,
          locale: this.$i18n.locale.toUpperCase(),
        }
      },
      update(data) {
        return data.getMenuDescription
      },
    },
  },
  methods: {
    closeMenu() {
      this.isOpenChild === null
      console.log(this.isOpenChild)
    },
    mousechild(paramID) {
      window.clearTimeout(this.$options.valueTimeOut)
      this.$options.valueTimeOut = window.setTimeout(() => {
        this.isOpenChild = paramID
      }, 10)
    },
    mouseleave() {
      window.clearTimeout(this.$options.valueTimeOut)
      this.$options.valueTimeOut = window.setTimeout(() => {
        this.isOpenChild = null
      }, 300)
    },
    beforeEnter(el) {
      this.$gsap.set(el, {
        y: -150,
        opacity: 0,
      })
    },
    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.15,
      }),
        this.$gsap.fromTo(
          '.header-menu__title',
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.36, delay: 0.15 }
        )
      this.$gsap.fromTo(
        '.header-menu__item',
        { opacity: 0, x: -25 },
        { opacity: 1, x: 0, duration: 0.1, stagger: 0.05 }
      )
    },
    leave(el, done) {
      this.$gsap.to(el, {
        y: -100,
        opacity: 0,
        duration: 0.35,
        onComplete: done,
      })
    },
  },
  computed: {
    menuslug() {
      const menuUrl = this.menuParent.node.path
      const menuSlugRepalce = menuUrl.replace('/', '')
      return menuSlugRepalce
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
  padding-bottom: 48px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 5px 5px 0 rgb(0 0 0 / 15%);
}
.header-menu__inner {
  display: flex;
  position: relative;
}
.header-menu__column {
  width: 33.3333%;
}
.header-menu__list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.header-menu__item {
  display: block;
  padding: 8px 32px 8px 8px;
}
.header-menu__link {
  color: #151515;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 100;
  &--active {
    color: var(--color-primary) !important;
  }
}
.header-menu__icon {
  margin-left: 16px;
}
.menu-desktop-heading__text {
  display: block;
  margin-top: 22px;
  font-size: 18px;
  line-height: 150%;
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
  position: relative;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
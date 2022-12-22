<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-block">
        <div class="footer-block__left">
          <div class="footer-block__logo">
            <NuxtLink :to="localePath('/')" class="footer-logo"
              ><TheFooterLogo
            /></NuxtLink>
          </div>
          <div class="footer-block__bottom">
            <AtomButton
              :button-name="`${$t('phoneFooter')}`"
              button-with="100%"
              button-link="/phone"
              type="white"
              class="footer-block-left__button"
            />
            <div class="">
              <p class="footer-adress">
                {{$t('adress')}}
              </p>
              <p class="footer-text">©{{ date }} ArcelorMittal Kryviy Rih</p>
            </div>
          </div>
        </div>
        <div class="footer-block__right">
          <div
            v-for="(item, index) in menuParent"
            :key="item.node.id"
            class="footer-menu__list"
          >
            <div
              class="footer-menu__title"
              :class="{
                'footer-menu__title--active': activeItemIndex == index,
              }"
            >
              <NuxtLink
                v-if="$device.isDesktop"
                :to="localePath(item.node.path)"
                >{{ item.node.label }}</NuxtLink
              >
              <div
                v-else-if="$device.isTablet || $device.isMobile"
                @click="toggleAccordion(index)"
                class="flex items-center space-x-3"
              >
                {{ item.node.label }}
              </div>
            </div>

            <ul
              v-show="activeItemIndex == index"
              class="footer-menu__block-inf"
            >
              <li
                v-for="childItem in item.node.childItems.edges"
                :key="childItem.node.id"
                class="footer-menu__item"
              >
                <NuxtLink
                  :to="localePath(childItem.node.path)"
                  class="footer-menu__link"
                  >{{ childItem.node.label }}</NuxtLink
                >
              </li>
            </ul>
            <ul v-if="$device.isDesktop" class="footer-menu__block-inf">
              <li
                v-for="childItem in item.node.childItems.edges"
                :key="childItem.node.id"
                class="footer-menu__item"
              >
                <NuxtLink
                  :to="localePath(childItem.node.path)"
                  class="footer-menu__link"
                  >{{ childItem.node.label }}</NuxtLink
                >
              </li>
            </ul>
            <div v-else></div>
          </div>
          <div class="footer-menu__href">
            <NuxtLink
              to="/contacts"
              class="footer-menu__link mobile-link-standart"
              >Контакти</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import getMenu from '@/queries/getMenu'
export default {
  data() {
    return {
      isOpen: false,
      activeItemIndex: null,
      date: new Date().toISOString().slice(0, 4),
    }
  },
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
  methods: {
    toggleAccordion(index) {
      if (this.activeItemIndex === index) {
        return (this.activeItemIndex = null)
      }
      this.activeItemIndex = index
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
    align-items: stretch;
    &__logo {
      padding-bottom: 20px;
      flex-grow: 1;
      svg {
        color: #fff;
      }
    }
    &__left {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      width: 35%;
      margin-right: 64px;
    }
    &__right {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        'first four'
        'second five'
        'third six';
      grid-gap: 32px 30px;
      flex-wrap: wrap;
      width: 65%;
    }
  }
}
.footer-block-left__button {
  margin-bottom: 36px;
}
.footer-menu__list {
  &:nth-child(1n) {
    grid-area: first;
  }
  &:nth-child(2n) {
    grid-area: second;
  }
  &:nth-child(3n) {
    grid-area: third;
  }
  &:nth-child(4n) {
    grid-area: four;
  }
  &:nth-child(5n) {
    grid-area: five;
  }
  &:nth-child(6n) {
    grid-area: six;
  }
}
.footer-menu__title,
.mobile-link-standart {
  display: inline-block;
  margin-bottom: 16px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 800;
}
.footer-menu__item {
  display: block;
  margin-bottom: 12px;
}
.footer-menu__link {
  color: #f0f0f0a6;
  font-size: 14px;
}
.footer-adress {
  font-size: 14px;
  line-height: 150%;
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: 32px;
  padding-bottom: 32px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.15);
}
.footer-text {
  font-size: 16px;
  line-height: 150%;
  color: rgba(255, 255, 255, 0.45);
}
@media (max-width: $mobile) {
  .footer-block {
    flex-direction: column-reverse;
    &__left,
    &__right {
      width: 100%;
    }
    &__right {
      display: block;
    }
    &__left {
      margin-top: 32px;
    }
  }
  .footer-logo {
    display: flex;
    justify-content: center;
  }
  .footer-block__logo {
    margin-bottom: 32px;
  }
  .footer-menu__list {
    padding-top: 24px;
    border-top: 1px solid #ffffff;
    &:last-child {
      border-bottom: 1px solid #ffffff !important;
    }
  }
  .footer-menu__title {
    position: relative;
    display: flex;
    padding-bottom: 24px;
    margin-bottom: 0;
    &::after,
    &::before {
      position: absolute;
      right: 10px;
      width: 2px;
      height: 12px;
      content: '';
      background-color: #ffffff;
      transition: 0.3s ease-in-out;
    }
    &::after {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }
    &--active::before {
      -webkit-transform: translateX(0) rotate(90deg);
      transform: translateX(0) rotate(90deg);
    }
  }
  .footer-menu__block-inf {
    padding-bottom: 24px;
  }
}
</style>
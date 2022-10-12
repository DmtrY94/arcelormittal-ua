<template>
  <header class="header">
    <div
      class="sticky-header header-desktop header-desktop--dark"
      :class="{
        'header-desktop--light': isOpen || isSearch,
      }"
    >
      <div class="header-desktop__container container">
        <NuxtLink :to="localePath('/')" class="header-desktop__logo">
          <TheLogoColor />
        </NuxtLink>
        <nav
          class="header-navigation"
          :class="{ 'header-navigation--search': isSearch }"
        >
          <ul v-if="!isSearch" class="header-navigation__list">
            <li
              v-for="item in menuParent"
              :key="item.node.id"
              class="header-navigation__item"
              @mouseenter="mouseover(item.node.id, $event)"
              @mouseleave="mouseleave($event)"
            >
              <NuxtLink
                :to="localePath(item.node.path)"
                class="header-navigation__link"
                :class="{ 'header-navigation__item--active': isOpen === item.node.id }"
              >
                {{ item.node.label }}
              </NuxtLink>
            </li>
          </ul>
          <div v-else class="header-search">
            <TheSearch />
            <input
              type="search"
              placeholder="Пошук"
              class="input header-search__input"
              name="searchText"
              id="searchText"
              v-model="searchText"
              autocomplete="off"
              @keyup.enter="submitSearch"
            />
            <span
              v-show="searchText"
              @click="clearInput"
              class="hero-search-container__clear"
            >
              <TheClose />
            </span>
          </div>
        </nav>
        <div class="header-toolbar">
          <div
            class="header-toolbar__lang"
            v-for="locale in availableLocales"
            :key="locale.code"
          >
            <a
              href="#"
              @click.prevent.stop="$i18n.setLocale(locale.code)"
              class="toolbar-text"
              >{{ locale.code }}</a
            >
          </div>
          <div class="header-toolbar__search">
            <span
              v-if="isSearch"
              @click="closeSearch()"
              class="toolbar-search__close"
            >
              <TheClose />
            </span>
            <span v-else @click="openSearch()" class="toolbar-search">
              <TheSearch />
            </span>
          </div>
          <div class="header-toolbar__menu" @click="openMenuMobile()">
            <TheMenu />
          </div>
        </div>
      </div>
    </div>
    <MoleculesMenuDesktop
      @mouseover="mouseover(item.node.id)"
      @mouseleave="mouseleave"
      v-for="item in menuParent"
      :key="item.node.id"
      :is-open="isOpen"
      :menu-parent="item"
      class="testttt"
    />
  </header>
</template>
<script>
import getMenu from '@/queries/getMenu'

export default {
  data() {
    return {
      isOpen: null,
      isSearch: false,
      getMenu: [],
      searchText: '',
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
    submitSearch() {
      this.$nuxt.$options.router.push(
        this.localePath({
          name: 'search',
          query: { searchText: this.searchText },
        })
      )
      this.isSearch = false
      this.searchText = ''
    },
    clearInput() {
      this.searchText = ''
    },
    handleSCroll() {
      let scrollPos = 70
      const nav = document.querySelector('.sticky-header')

      let windowY = window.scrollY
      if (windowY >= scrollPos) {
        // Scrolling UP
        nav.classList.add('header-desktop--light')
      } else {
        // Scrolling DOWN
        nav.classList.remove('header-desktop--light')
      }
      scrollPos = windowY
    },
    mouseover(paramID, event) {
      window.clearTimeout(this.$options.valueTimeOut)
      this.$options.valueTimeOut = window.setTimeout(() => {
        this.isOpen = paramID
      }, 400)
      if (event) {
        event.target.classList.add('header-navigation__item--active')
      }
    },
    mouseleave(event) {
      window.clearTimeout(this.$options.valueTimeOut)
      this.$options.valueTimeOut = window.setTimeout(() => {
        this.isOpen = false
      }, 200)
      if (event) {
        event.target.classList.remove('header-navigation__item--active')
      }
    },
    openMenuMobile() {
      this.isOpen = true
    },
    openSearch() {
      this.isSearch = true
    },
    closeSearch() {
      this.isSearch = false
    },
    staggering() {
      const gsap = this.$gsap
      gsap.fromTo(
        '.header-navigation__item',
        {
          y: -30,
          opacity: 0,
        },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, delay: 0.8 }
      )
    },
  },
  created() {
    if (process.client) {
      window.addEventListener('scroll', this.handleSCroll)
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleSCroll)
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    menuParent() {
      return this.getMenu.filter((i) => i.node.parentId === null)
    },
  },
  mounted() {
    this.$gsap.fromTo(
      '.header',
      { y: -270, opacity: 0 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
    this.$gsap.fromTo(
      '.header-desktop__logo',
      { x: -40, opacity: 0, ease: 'myEase' },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.8 }
    )
    this.$gsap.fromTo(
      '.header-toolbar',
      { x: 40, opacity: 0, ease: 'myEase' },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.8 }
    )
    this.staggering()
  },
}
</script>


<style lang="scss">
.header {
  position: relative;
  z-index: 4;
  display: block;
}
.header-desktop {
  display: flex;
  align-items: center;
  background: rgba(21, 21, 21, 0.35);
  border-bottom: 2px solid var(--color-primary);
  height: 76px;
  width: 100%;
  z-index: 999;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
}
.header-desktop--dark {
  .logo-shape,
  .logo-text,
  .header-toolbar__search,
  .toolbar-text {
    color: #fff;
  }
}
.header-desktop--light {
  background: #ffffff;
  transition: all 0.3s;
  .logo-shape {
    color: var(--color-primary);
  }
  .logo-text,
  .header-toolbar__search,
  .toolbar-text,
  .header-navigation__link {
    color: var(--color);
  }
  .header-toolbar__lang {
    border-right: 1px solid #000;
  }
}
.sticky-header {
  position: fixed;
}
.header-desktop__container {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  //overflow: hidden;
}
.header-navigation {
  display: flex;
  align-items: center;
  &--search {
    width: 100%;
    margin: 0 48px;
  }
}
.header-navigation__list {
  display: flex;
  align-items: center;
}

.header-navigation__link.header-navigation__item--active {
    color: var(--color-primary) !important;
  
}
.header-navigation__link {
  color: #ffffff;
  font-family: 'Gilroy';
  font-weight: 800;
  padding: 15px 20px 5px;
}
.header-toolbar {
  display: flex;
  align-items: flex-end;
}
.header-toolbar__lang {
  display: block;
  border-right: 1px solid rgba(255, 255, 255, 0.35);
  margin-right: 16px;
}
.header-toolbar__menu {
  display: none;
}
.toolbar-text {
  font-size: 16px;
  margin-right: 16px;
  text-transform: uppercase;
  font-weight: 800;
}
.header-toolbar__search {
  cursor: pointer;
}
.toolbar-search {
  &__close {
    cursor: pointer;
    display: flex;
  }
  svg {
    display: flex;
  }
}

.header-search {
  opacity: 1;
  width: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &__input {
    display: block;
    width: 100%;
    border: 0;
    background-color: transparent;
    color: #000;
    font-size: 16px;
    padding: 0 30px 0 16px;
    border-radius: 0;
    outline: none;
  }
}

.hero-search-container__clear {
  display: flex;
  cursor: pointer;
}

@media (max-width: $mobile) {
  .header {
  }
  .header-navigation {
    display: none;
  }
  .header-desktop {
    height: 64px;
  }
  .header-desktop__logo {
    svg {
      display: flex;
      width: 86px;
    }
  }
  .header-toolbar__lang {
    border-right: 0;
    margin-right: 0;
  }
  .header-toolbar__search {
    margin-right: 16px;
  }
  .header-toolbar__menu {
    display: block;
    border-left: 1px solid rgba(255, 255, 255, 0.35);
    padding-left: 16px;
    svg {
      display: flex;
      color: #fff;
    }
  }
}
</style>
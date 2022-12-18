<template>
  <section class="page-header hero-search">
    <div class="page-header-search__container container">
      <MoleculesBreadcrumbs :slug1="`${$t('searchPlaceholder')}`" />
      <p class="page-header-search__intro">
        {{ results }} {{ $t('searchResults') }}
      </p>
      <h1 class="page-header__title page-header__title--has-search">
        <span class="page-header-search__search"><TheSearch /></span>
        <input
          type="text"
          class="search__input"
          v-model="searchText"
          :placeholder="`${$t('searchPlaceholder')}`"
          @keyup.enter="submitSearch"
        />
        <span
          v-show="searchText"
          @click="clearInput"
          class="page-header-search__clear"
          ><TheClose
        /></span>
      </h1>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    searchText: {},
    results: {},
  },
  methods: {
    submitSearch() {
      this.$nuxt.$options.router.push(
        this.localePath({
          name: 'search',
          query: { searchText: this.searchText },
        })
      )
    },
    clearInput() {
      this.searchText = ''
    },
  },
  head: {
    title: 'Пошук',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'my website description',
      },
    ],
  },
}
</script>
<style lang="scss">
.hero-search {
  position: relative;
  margin-top: 76px;
  background: var(--color);
  min-height: calc(238px + 76px);
  .search__input {
    position: relative;
    background: none;
    border: 0;
    border-bottom: 2px solid var(--color-revers);
    color: inherit;
    padding-right: 40px;
    padding-left: 32px;
    width: 100%;
    font-size: 50px;
    font-weight: bold;
    line-height: 62px;
    color: var(--color-revers);
    &:focus {
      border-color: var(--color-primary);
    }
  }
}
.page-header__title {
  font-size: 50px;
  font-weight: 300;
  line-height: 1.25;
  margin: 0;
}
.page-header-search {
  &__container {
    position: relative;
    padding-top: 24px;
  }
  &__intro {
    display: block;
    margin-top: 48px;
    margin-bottom: 32px;
    font-size: 21px;
    color: #ffffff;
  }
  &__search {
    position: absolute;
    left: 0;
    color: #ffffff;
  }
  &__clear {
    position: absolute;
    right: 0;
    cursor: pointer;
    color: #ffffff;
  }
}
</style>
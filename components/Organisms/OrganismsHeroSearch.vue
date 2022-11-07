<template>
  <section class="page-header hero-search">
    <div class="page-header-search__container container">
      <p class="page-header-search__intro">17 результатів</p>
      <h1 class="page-header__title page-header__title--has-search">
        <span class="page-header-search__search"><TheSearch /></span>
        <input
          type="text"
          class="search__input"
          v-model="searchText"
          placeholder="Пошук"
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
  },
  methods: {
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
  padding-top: 76px;
  background: #f1e7f4;
  min-height: calc(238px + 76px);
  .search__input {
    position: relative;
    background: none;
    border: 0;
    border-bottom: 2px solid var(--color);
    color: inherit;
    padding-right: 40px;
    padding-left: 32px;
    width: 100%;
    font-size: 50px;
    font-weight: bold;
    line-height: 62px;
    color: var(--color);
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
    padding-top: 64px;
  }
  &__intro {
    margin-bottom: 32px;
    font-size: 21px;
  }
  &__search {
    position: absolute;
    left: 0;
  }
  &__clear {
    position: absolute;
    right: 0;
    cursor: pointer;
  }
}
</style>
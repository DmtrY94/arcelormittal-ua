<template>
  <section class="page-header hero-search">
    <div class="page-header__container container">
      <p class="page-header__intro">17 results found</p>
      <h1 class="page-header__title page-header__title--has-search">
        <input type="text" class="search__input" />
      </h1>
    </div>
  </section>
</template>
<style lang="scss">
.hero-search {
  position: relative;
  padding-top: 76px;
  background: var(--blue);
  min-height: calc(238px + 76px);
  .search__input {
    background: none;
    border: 0;
    border-bottom: 1px solid #fff;
    color: inherit;
    padding-right: 40px;
    width: 100%;
    font-size: 50px;
    line-height: 62px;
    color: #fff;
  }
}
.page-header__title {
  font-size: 50px;
  font-weight: 300;
  line-height: 1.25;
  margin: 0;
}
</style>
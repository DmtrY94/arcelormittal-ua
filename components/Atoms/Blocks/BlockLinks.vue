<template>
  <section class="ar-block-container section-links">
    <div class="container">
      <div class="section-links__wrapper">
        <div class="section-links__left">
          <h2>{{ $t('links') }}</h2>
        </div>
        <div class="section-links__right">
          <ul class="section-links__list">
            <li v-if="links.linkslist.linkItem1">
            <NuxtLink :to="urlRemove"  class="section-links__item">
              <span class="links-item__title">
                {{ links.linkslist.linkItem1.title }}
               
              </span>
              <span class="links-item__icon"><TheArrow /></span>
            </NuxtLink>
            </li>
            <li v-if="links.linkslist.linkItem3" class="section-links__item">
              <span class="links-item__title">
                {{ links.linkslist.linkItem3.title }}
              </span>
              <span class="links-item__icon"><TheArrow /></span>
            </li>
            <li v-if="links.linkslist.linkItem4" class="section-links__item">
              <span class="links-item__title">
                {{ links.linkslist.linkItem4.title }}
              </span>
              <span class="links-item__icon"><TheArrow /></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    links: {},
  },
  computed: {
    urlRemove() {
      return this.links.linkslist.linkItem1.url.replace(/^.*?:\/\/.*?(?=\/|$)/,'');
    },
  },
}
</script>
<style lang="scss">
.section-links {
  padding: 136px 0;
}
.section-links__wrapper {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 32px 30px;
  row-gap: 56px;
  column-gap: 30px;
  flex-wrap: wrap;
}
.section-links__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #212121;
}
.links-item__title {
  font-size: 21px;
  font-weight: 800;
}
</style>
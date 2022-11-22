<template>
  <section class="ar-block-container section-links">
    <div class="container">
      <div class="section-links__wrapper">
        <div class="section-links__left"><h2>{{$t('links')}}</h2></div>
        <div class="section-links__right">
          <ul class="section-links__list">
            <li class="section-links__item"><span class="links-item__title">{{links.linkslist.linkItem1.title}}</span></li>
            <li class="section-links__item">{{links.linkslist.linkItem3}}</li>
            <li class="section-links__item">{{links.linkslist.linkItem4}}</li>
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
    padding-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #212121;
}
.links-item__title {
    font-size: 21px;
    font-weight: 800;
}
</style>
<template >
  <section v-if="pages.edges.length != 0" class="related-pages">
    <div class="container">
      <AtomsTitle :title="`${$t('related')}`" />
      <div
        class="related-pages__wrapper"
        :class="[
          pages.edges.length === 2 ? 'gr-col-2' : '',
          pages.edges.length === 3 ? 'gr-col-3' : '',
          pages.edges.length === 4 ? 'gr-col-4' : '',
        ]"
      >
        <div
          v-for="page in pages.edges"
          :key="page.node.id"
          class="related-page"
        >
          <div class="related-page__image">
            <AtomsImage
              v-if="page.node.featuredImage"
              :image="page.node.featuredImage.node"
            />
            <figure v-else class="image-element">
              <nuxt-picture
                src="/images/images-null.png"
                loading="lazy"
                class="image-element__picture"
                alt="test"
                :imgAttrs="{
                  class: 'image-element__img',
                  style: 'display:block',
                  'data-my-data': 'my-value',
                }"
              />
            </figure>
          </div>
          <div class="related-page__content">
            <div class="related-page__title">
              <h4 class="Heading-h4">{{ page.node.title }}</h4>
              <NuxtLink :to="page.node.slug" class="related-page__readmore">{{
                $t('readMore')
              }}</NuxtLink>
            </div>
          </div>
          <NuxtLink :to="localePath(`/${slugParent}/${slug}/${page.node.slug}`)" class="related-page__link"></NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    pages: {},
    slug: {},
    slugParent: {},
  },
  date() {

  }
}
</script>
<style lang="scss">
.related-pages {
  position: relative;
  padding: 84px 0;
  background: #e6eaef;
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px 30px;
    row-gap: 32px;
    column-gap: 30px;
    flex-wrap: wrap;
  }
}
.related-page {
  position: relative;
  &__image {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
  }
  &__content {
    display: block;
    margin-top: 24px;
  }
  &__link {
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 2;
      content: '';
    }
  }
  &__readmore {
    display: inline-block;
    border-bottom: 1px solid;
    margin-top: 18px;
  }
}
</style>
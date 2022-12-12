<template>
  <section class="cover-image">
    <div class="cover-image__container">
      <figure v-if="image" class="cover-image__figure">
        <nuxt-picture
          :src="image.node.sourceUrl"
          class="cover-image__picture"
          :alt="image.node.altText"
          :imgAttrs="{
            class: 'cover-image__img',
            style: 'display:block',
            'data-my-data': 'my-value',
          }"
        />
        <figcaption>
          <span
            v-html="image.node.caption"
            class="cover-image__figcaption"
          ></span>
        </figcaption>
      </figure>
      <figure v-else>
        <nuxt-picture
          src="/images/images-null.png"
          class="cover-image__picture"
          alt="test"
          :imgAttrs="{
            class: 'cover-image__img',
            style: 'display:block',
            'data-my-data': 'my-value',
          }"
        />
      </figure>
    </div>
    <div class="hero-content" :class="[newsPage ? 'hero-content--news' : '']">
      <div class="container">
        <div class="hero-content__left">
          <MoleculesBreadcrumbs :slug1="title" :parent="parent" :breadcrumbs="breadcrumbs" />
          <div v-if="newsPage" class="hero-content-news__header">
            <div
              v-if="this.$i18n.locale == 'uk'"
              class="hero-content-news__date"
            >
              {{ $dateFns.format(date, 'd MMMM yyyy', { locale: 'uk' }) }}
            </div>
            <div v-else class="hero-content-news__date">
              {{ $dateFns.format(date, 'd MMMM yyyy', { locale: 'en-US' }) }}
            </div>
            <h1 class="hero-content-news__title">
              {{ title }}
            </h1>
          </div>
          <h1 v-else class="hero-content__title">
            {{ title }}
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    title: String,
    image: Object,
    parent: {},
    date: {},
    breadcrumbs: {}
  },
  data() {
    return {
      newsPage:
        this.$route.name === 'media-news-id___uk' ||
        this.$route.name === 'media-news-id___en',
    }
  },
  mounted() {
    this.titleAnimation()
    this.imageAnimation()
  },

  methods: {
    titleAnimation() {
      const gsap = this.$gsap
      gsap.fromTo(
        '.hero-content__title',
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.35,
        }
      )
    },
    imageAnimation() {
      const gsap = this.$gsap
      gsap.fromTo(
        '.cover-image__img',
        {
          scale: 1.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.35,
        }
      )
    },
  },
}
</script>
<style lang="scss">
.loading-page {
  height: 500px;
  position: relative;
  display: block;
  background: red;
}
.cover-image {
  position: relative;
  min-height: 500px;
  background: #000;
  &__container {
    width: 100%;
    height: 100vh;
    max-height: 632px;
    overflow: hidden;
    position: relative;
    z-index: 0;
    min-height: 500px;
  }
  &__picture {
    &::after {
      content: '';
      position: absolute;
      display: block;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 3;
      background: rgba(21, 21, 21, 0.66);
    }
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    -o-object-fit: cover;
    object-position: center;
    -o-object-position: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.hero-content__date {
  font-size: 16px;
  margin-top: 64px;
  color: rgba(255, 255, 255, 0.65);
}
.hero-content {
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 1;
  width: 100%;
  transform: translateY(-50%);
  &__title {
    color: #fff;
  }
  &--news {
    top: 100px;
    height: calc(100% - 100px);
    transform: inherit;
    .container,
    .hero-content__left {
      height: 100%;
    }
    .hero-content__left {
      display: flex;
      flex-direction: column;
    }
  }
}

.hero-content-news {
  &__header {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: flex-end;
    margin-bottom: 76px;
  }
  &__date {
    color: #fff;
    margin-bottom: 16px;
  }
  &__title {
    width: 80%;
    font-size: 50px;
    line-height: 120%;
    color: #fff;
  }
}

@media (max-width: $mobile) {
  .hero-content__left {
    height: 100%;
  }
  .hero-content--news {
    top: 64px;
    height: calc(100% - 64px);
  }
  .hero-content-news__header {
    margin-bottom: 48px;
  }
  .hero-content-news__title {
    width: 100%;
    font-size: 36px;
    line-height: 120%;
  }
}
</style>
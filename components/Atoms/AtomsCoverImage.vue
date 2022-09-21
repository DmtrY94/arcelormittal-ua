<template>
  <section class="cover-image">
    <div class="cover-image__container">
      <figure v-if="image" class="cover-image__figure">
        <nuxt-picture
          :src="image.node.sourceUrl"
          loading="lazy"
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
          loading="lazy"
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
    <div class="hero-content">
      <div class="container">
        <div class="hero-content__left">
          <h1 class="hero-content__title">{{ title }}</h1>
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
  },
  mounted() {
    this.titleAnimation()
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
  },
}
</script>
<style lang="scss">
.cover-image {
  position: relative;
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
      background: rgba(21, 21, 21, 0.4);
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
}
@media (max-width: $mobile) {
  .section-hero-home__title {
    max-width: 100%;
    font-size: 50px;
    line-height: 120%;
  }
}
</style>
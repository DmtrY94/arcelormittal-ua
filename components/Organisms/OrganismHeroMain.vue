<template>
  <div v-if="$apollo.loading">Loading...</div>
  <section
    v-else-if="heading.herovideoblock"
    class="section-hero-home"
    :style="{
      backgroundImage: `url(${heading.herovideoblock.videocover.sourceUrl})`,
    }"
  >
    <div class="container">
      <div class="section-hero-home__center">
        <h1 class="section-hero-home__title">
          {{ heading.herovideoblock.title }}
        </h1>
        <p class="section-hero-home__description">
          {{ heading.herovideoblock.description }}
        </p>
      </div>
    </div>

    <div class="section-hero-home__wrapper">
      <video
        class="hero-home-wrapper__video"
        playsinline=""
        autoplay=""
        muted=""
        loop=""
      >
        <source
          :src="`${heading.herovideoblock.videolink.mediaItemUrl}`"
          type="video/mp4"
        />
      </video>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    heading: {},
  },
  mounted() {
    this.boxRotation()
  },

  methods: {
    boxRotation() {
      const gsap = this.$gsap
      gsap.fromTo(
        '.section-hero-home__title',
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
.section-hero {
  &-home {
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    height: calc(100vh - 76px);
    overflow: hidden;
    &__center {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__wrapper {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
      &::before {
        content: '';
        display: block;
        position: absolute;
        background: rgba(0, 0, 0, 0.3);
        width: 100%;
        height: calc(100vh - 76px);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
      }
    }
    &__title {
      max-width: 50%;
      color: #fff;
    }
  }
}
.hero-home-wrapper {
  &__video {
    position: absolute;
    display: block;
    height: calc(100vh - 76px);
    left: 0;
    -o-object-fit: cover;
    object-fit: cover;
    position: absolute;
    right: 0;
    width: 100%;
  }
}
.section-hero-home__description {
  color: #fff;
  font-size: 18px;
  margin-top: 24px;
}
</style>
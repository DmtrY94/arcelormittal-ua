<template>
  <div>
    <section
      v-for="block in blocks"
      :key="block.__typename"
      class="ar-block-container"
    >
      <div v-html="block.saveContent"></div>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    blocks: {},
  },
  mounted() {
    this.$gsap.fromTo(
      '.wp-block-media-text',
      { x: -64, opacity: 0 },
      { opacity: 1, x: 0, duration: 0.8 }
    )
  },
}
</script>
<style lang="scss">
.ar-block-container {
  position: relative;
  .alignfull {
  }
  .wp-block-media-text {
    .wp-block-media-text__content {
      margin-left: 8.33333%;
    }
  }
  .has-media-on-the-right {
    flex-flow: row-reverse;
    .wp-block-media-text__content {
      margin-right: 8.33333%;
      margin-left: 0;
    }
  }
  .is-vertically-aligned-center, .wp-block-columns {
    display: flex;
    align-items: center;
  }
  .wp-block-columns {
    padding: 96px 0;
    justify-content: space-between;
    align-items: flex-start !important;
  }
  .has-blue-background-color {
    background: var(--blue);
  }
  .has-black-background-color {
    background: #3f3f3f;
  }
  .has-dark-background-color {
    background: #5f5f5f;
  }
  .has-grey-background-color {
    background: #e1e1e1;
  }
  .has-light-blue-background-color {
    background: #E6EAEF;
  }
  .wp-block-media-text__content {
    display: block;
    width: 45%;
    padding-top: 96px;
    padding-bottom: 96px;
    .has-white-color {
      color: #fff;
    }
    h3 {
      margin-bottom: 24px;
    }
    p {
      font-size: 16px !important;
      line-height: 150%;
      display: block;
    }
    p.has-white-color {
      color: rgba(255, 255, 255, 0.65);
    }
    p.has-black-color {
      color: #3f3f3f !important;
    }
  }
  .wp-block-media-text__media {
    position: relative;
    width: 55%;
    padding-top: 64px;
    padding-bottom: 64px;
    img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  .wp-block-buttons {
    margin-top: 48px;
  }
}
</style>
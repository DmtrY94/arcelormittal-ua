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
  }
}
</script>
<style lang="scss">
.ar-block-container {
  position: relative;
  .alignfull {
  }
  .wp-block-media-text {
  }
  .has-media-on-the-right {
    flex-flow: row-reverse;
    .wp-block-media-text__content {
      margin-right: 8.33333%;
    }
  }
  .is-vertically-aligned-center {
    display: flex;
    align-items: center;
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
  .wp-block-media-text__content {
    display: block;
    width: 50%;
    padding-top: 86px;
    padding-bottom: 86px;
    .has-white-color {
      color: #fff;
    }
    h3 {
      margin-bottom: 24px;
    }
    p {
      font-size: 16px !important;
      color: rgba(255, 255, 255, 0.65) !important;
      line-height: 150%;
      display: block;
    }
  }
  .wp-block-media-text__media {
    position: relative;
    width: 50%;
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
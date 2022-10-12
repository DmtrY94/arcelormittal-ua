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
  .wp-block-media-text__content {
    width: 50%;
    .has-white-color {
      color: #fff;
    }
    h3 {
      margin-bottom: 24px;
    }
    p {
      font-size: 16px;
      line-height: 120%;
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
}
</style>
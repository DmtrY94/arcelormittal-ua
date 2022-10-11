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
  }
  .is-vertically-aligned-center {
    display: flex;
    align-items: center;
  }
  .has-blue-background-color {
    background: var(--blue);
  }
  .wp-block-media-text__content {
    width: 50%;
    .has-white-color {
      color: #fff;
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
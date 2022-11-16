<template>
  <div class="site-content">
    <section
      v-for="block in blocks"
      :key="block.__typename"
      class="ar-block-container"
    >
      <!-- <div v-html="block.saveContent"></div>-->
      <div
        v-if="block.__typename == 'CoreParagraphBlock'"
        class="container container-sm"
      >
        <CoreParagraphBlock :attributes="block.attributes" />
      </div>
      <div v-else-if="block.__typename == 'CoreGalleryBlock'">
        <CoreGalleryBlock :attributes="block.innerBlocks" />
      </div>
      <div
        v-else-if="block.__typename == 'CoreListBlock'"
        class="container container-sm"
      >
        <CoreListBlock :attributes="block" />
      </div>
      <div v-else-if="block.__typename == 'CoreGroupBlock'">
        <CoreGroupBlock :attributes="block" />
      </div>
      <div
        v-else-if="block.__typename == 'CoreHeadingBlock'"
        class="container container-sm"
      >
        <CoreHeadingBlock :attributes="block.attributes" />
      </div>
      <div
        v-else-if="block.__typename == 'CoreFileBlock'"
        class="container container-sm"
      >
        <CoreFileBlock :attributes="block.attributes" />
      </div>
      <div v-else-if="block.__typename == 'CoreQuoteBlock'" class="quote-block">
        <CoreQuoteBlock :attributes="block.attributes" />
      </div>
    </section>
  </div>
</template>
<script>
import { parse } from 'node-html-parser'

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
  computed: {
    test() {
      const t = this.blocks.map((m) => m.saveContent)
      const parrse = parse(t)
      console.log(parrse)
      return parrse
    },
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
  .is-vertically-aligned-center,
  .wp-block-columns {
    display: flex;
    align-items: center;
  }
  .wp-block-columns {
    padding-top: 96px;
    padding-bottom: 96px;
    justify-content: space-between;
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
    background: #e6eaef;
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

.container-management {
  align-items: flex-start !important;
  .card-management {
    flex-basis: 0;
    flex-grow: 1;
    .wp-block-image {
      width: 100%;
      flex: 1;
      position: relative;
      &::before {
        display: block;
        padding-top: 103.333%;
        content: '';
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
      }
    }
  }
  .card-management__title {
    margin-top: 24px;
  }
  .card-management__position {
    margin-top: 16px;
  }
  .card-management__link {
    display: inline-block;
    margin-top: 24px;
    border-bottom: 1px solid;
  }
}
.quote-block {
  background-color: #f8f6f2;
  padding: 48px 0;
}
@media (max-width: $mobile) {
  .container-management {
    display: flex;
    flex-direction: column;
    align-items: inherit !important;
  }
}
</style>
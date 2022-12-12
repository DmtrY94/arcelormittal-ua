<template>
  <div class="image-block">
    <div class="container">
      <figure v-if="attributes" class="image-block__figure">
        <nuxt-picture
          :src="attributes.url"
          loading="lazy"
          class="image-block__picture"
          :imgAttrs="{
            class: 'image-block__img',
            style: 'display:block',
            'data-my-data': 'my-value',
          }"
        />
      </figure>
      <figcaption>
        <p class="image-block__caption" v-html="attributes.caption" />
      </figcaption>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    attributes: {},
  },
}
</script>
<style lang="scss">
.image-block {
    margin-top: 24px;
    margin-bottom: 24px;
    position: relative;
    &__caption {
        margin-top: 16px;
        font-size: 14px;
    }
}
</style>
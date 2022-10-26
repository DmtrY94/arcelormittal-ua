<template>
  <figure v-if="image.sourceUrl" class="image-element">
    <nuxt-picture
      :src="image.sourceUrl"
      loading="lazy"
      class="image-element__picture"
      :imgAttrs="{
        class: 'image-element__img',
        style: 'display:block',
        'data-my-data': 'my-value',
      }"
    />
  </figure>
</template>
<script>
export default {
  props: {
    image: Object,
  },
}
</script>
<style lang="scss">
.image-element {
  position: relative;
  z-index: -1;
  overflow: hidden;
  &::before {
    display: table;
    border-radius: inherit;
    content: '';
    padding-bottom: 66.66%;
  }
}
.image-element__picture {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.15s ease-in-out 0s;
}
.image-element__img {
  position: absolute;
  top: 0;
  left: 50%;
  z-index: -1;
  display: block;
  min-width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center top;
  object-position: center top;
  transform: translateX(-50%);
}
</style>
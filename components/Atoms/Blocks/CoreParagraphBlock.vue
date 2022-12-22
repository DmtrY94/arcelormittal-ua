<template>
  <div class="text-block text-block-width">
    <p v-html="attributes.content"></p>
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
.text-block {
  &-width {
    max-width: 1028px;
  }
  p {
    font-size: 21px;
    line-height: 150%;
    margin-bottom: 32px;
    strong {
      font-weight: 800;
    }
  }
  em {
    font-style: italic;
  }
}
</style>
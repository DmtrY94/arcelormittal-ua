<template>
  <h3 class="title-block">
    {{ title }}
  </h3>
</template>
<script>
export default {
  props: {
    title: {},
  },
}
</script>
<style lang="scss">
.title-block {
    display: block;
    margin-bottom: 64px;
}
@media (max-width: $mobile) {
  .title-block {
    margin-bottom: 32px;
  }
}
</style>
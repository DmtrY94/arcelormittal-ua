<template>
  <div v-html="attributes.saveContent"></div>
</template>
<script>
export default {
  props: {
    attributes: {},
  },
}
</script>
<template>
  <div v-if="attributes.attributes.className == 'block-manadger'">
    <div>{{attributes}} fdfd</div>
  </div>
</template>
<script>
export default {
  props: {
    attributes: {},
  },
}
</script>
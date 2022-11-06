<template>
  <div v-html="attributes.saveContent">
    <div>{{ attributes }} fdfd</div>
  </div>
</template>
<script>
export default {
  props: {
    attributes: {},
  },
}
</script>
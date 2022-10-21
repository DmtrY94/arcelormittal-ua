<template>
  <div class="layout">
    <OrganismHeader />
    <OrganismsMenu />

    <Nuxt />

    <OrganismsFooter />
  </div>
</template>
<script>
export default {
  data() {
    return {
      test: this.$route.name,
    }
  },
}
</script>
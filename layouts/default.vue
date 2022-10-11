<template>
  <div class="layout">
    <OrganismHeader />
    <OrganismsMenu />
    <main class="page-content">
      <Nuxt />
      {{ test }}
    </main>
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
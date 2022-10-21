<template>
  <main class="page-content">
    <OrganismsHeroSearch />
    {{ test }}
  </main>
</template>
<script>
export default {
  data() {
    return {
      test: this.$route.query.searchText,
    }
  },
}
</script>
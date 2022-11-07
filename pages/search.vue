<template>
  <main class="page-content">
    <OrganismsHeroSearch :search-text="searchText"/>
    {{ test }}
  </main>
</template>
<script>
export default {
  data() {
    return {
      searchText: '' || this.$route.query.searchText,
    }
  },
}
</script>
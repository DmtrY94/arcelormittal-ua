<template>
  <div>
    <OrganismsHeroSearch />
    {{ test }}
  </div>
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
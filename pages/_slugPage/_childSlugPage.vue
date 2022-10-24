<template>
  <main class="page-content">
    <AtomsCoverImage v-if="getPages" :image="getPages.featuredImage" :title="getPages.title" />
    <OrganismsBlocks v-if="getPages" :blocks="getPages.blocks" />
  </main>
</template>
<script>
import getPages from '@/queries/getPages'

export default {
  apollo: {
    getPages: {
      query: getPages,
      prefetch: true,
      variables() {
        return {
          uri: `${this.$route.params.slugPage}/${this.$route.params.childSlugPage}`,
          locale: this.$i18n.locale.toUpperCase(),
        }
      },
      error() {
        this.$root.error({ statusCode: 404, message: 'Error 400. Bad request' })
      },
      update(data) {
        return data.getPages.translation
      },
    },
  },
}
</script>
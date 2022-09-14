<template>
  <div v-if="getPages" class="site-content">
    <AtomsCoverImage :image="getPages.featuredImage" :title="getPages.title" />
    {{ getPages }}
  </div>
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
          uri: this.$route.params.slugPage,
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
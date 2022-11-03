<template>
    <main class="page-content page-no-hero">
        <div class="container">
            {{getManagement}}
        </div>
    </main>
</template>
<script>
import getManagement from '@/queries/getManagement'

export default {
  apollo: {
    getManagement: {
      query: getManagement,
      prefetch: true,
      variables() {
        return {
          slug: this.$route.params.id,
          locale: this.$i18n.locale.toUpperCase(),
        }
      },
      error() {
        this.$root.error({ statusCode: 404, message: 'Error 400. Bad request' })
      },
      update(data) {
        return data.getManagement.translation
      },
    },
  },
}
</script>
<template>
  <div v-if="$apollo.error">error</div>
  <AtomsLoading v-else-if="$apollo.loading" type="page" />
  <main v-else-if="getPages" class="page-content">
    <AtomsCoverImage
      :image="getPages.featuredImage"
      :title="getPages.translation.title"
      :breadcrumbs="getPages.translation.seo.breadcrumbs"
    />
    <OrganismsBlocks :blocks="getPages.translation.blocks" />
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
          uri: this.$route.params.slugPage,
          locale: this.$i18n.locale.toUpperCase(),
        }
      },
      prefetch: ({ route }) => {
        return {
          uri: route.params.slugPage,
        }
      },
      result(result) {
        if (result.data.getPages === null) {
          this.$root.error({ statusCode: 404, message: 'Article Not Found' })
        }
      },
      error() {
        this.$root.error({ statusCode: 404, message: 'Error 400. Bad request' })
      },
      update(data) {
        return data.getPages
      },
    },
  },
  mounted() {
    console.log(this.getPages)
  },
  head() {
    return {
      title: this.getPages?.translation?.seo?.title,
      link: [
        {
          rel: 'canonical',
          href: 'https://metalurg.online/',
        },
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.getPages?.translation?.seo?.metaDesc,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.getPages?.translation?.seo?.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.getPages?.translation?.seo?.metaDesc,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.getPages?.translation?.seo?.opengraphImage?.sourceUrl,
        },
      ],
    }
  },
}
</script>
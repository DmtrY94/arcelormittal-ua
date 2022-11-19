<template>
  <AtomsLoading v-if="$apollo.loading" type="page" />
  <main v-else class="page-content">
    <AtomsCoverImage
      v-if="getPages"
      :image="getPages.featuredImage"
      :parent="getPages.parent.node"
      :title="getPages.title"
    />
    <OrganismsBlocks v-if="getPages" :blocks="getPages.blocks" />
    <OrganismsRelatedPages
      v-if="getPages"
      :pages="getPages.children"
      :slug="this.$route.params.childSlugPage"
      :slug-parent="this.$route.params.slugPage"
    />
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
  head() {
    return {
      title: this.getPages?.seo?.title,
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
          content: this.getPages?.seo?.metaDesc,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.getPages?.seo?.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.getPages?.seo?.metaDesc,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.getPages?.seo?.opengraphImage?.sourceUrl,
        },
      ],
    }
  },
}
</script>
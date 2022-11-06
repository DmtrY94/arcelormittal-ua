<template>
  <main v-if="getManagement" class="page-content page-no-hero">
    <div class="container">
      <MoleculesBreadcrumbs
        :slug1="getManagement.title"
        class="breadcrumbs-container--page-no-cover"
      />
      <div class="wrapper-block">
        <div class="wrapper-block__content">
          <h3 class="wrapper-block__title">{{ getManagement.title }}</h3>
          <p class="wrapper-block__label">
            {{ getManagement.ManagementPosition.position }}
          </p>
          <div v-html="getManagement.content" class="wrapper-block__text"></div>
        </div>
        <div class="wrapper-block__iamge">
          <nuxt-picture
            v-if="getManagement.featuredImage"
            :src="getManagement.featuredImage.node.sourceUrl"
            loading="lazy"
            class="wrapper-block__picture"
            :imgAttrs="{
              class: 'image-element__img',
              style: 'display:block',
              'data-my-data': 'my-value',
            }"
          />
        </div>
      </div>
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
  head() {
    return {
      title: this.getManagement?.seo?.title,
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
          content: this.getManagement?.seo?.metaDesc,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.getManagement?.seo?.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.getManagement?.seo?.metaDesc,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.getManagement?.seo?.opengraphImage?.sourceUrl,
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.wrapper-block {
  margin-top: 64px;
  margin-bottom: 96px;
  display: flex;
  justify-content: space-between;
  &__content {
    position: relative;
    width: calc(50% - 15px);
  }
  &__iamge {
    position: relative;
    width: calc(50% - 15px);
  }
  &__title {
    margin-bottom: 4px;
  }
  &__label {
    position: relative;
    color: var(--color-primary);
  }
  &__text {
    margin-top: 32px;
    p {
      font-size: 21px;
      line-height: 150%;
    }
  }
  &__picture {
    position: relative;
    background: #e1e1e1;
    &::before {
      content: '';
      display: table;
      padding-bottom: 106.66%;
    }
  }
}
@media (max-width: $mobile) {
  .wrapper-block {
    margin-top: 32px;
    margin-bottom: 64px;
    flex-direction: column-reverse;
    &__content,
    &__iamge {
      width: 100%;
    }
    &__iamge {
      margin-bottom: 32px;
    }
    &__text {
      margin-top: 24px;
      p {
        font-size: 16px;
      }
    }
  }
}
</style>
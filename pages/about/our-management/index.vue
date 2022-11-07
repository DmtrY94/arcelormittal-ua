<template>
  <div v-if="$apollo.error" class="container-error">error</div>
  <main v-else-if="getAllManagement" class="page-content">
    <AtomsCoverImage :title="`${$t('pageAllManagement')}`" />
    <div v-if="getAllManagement" class="container">
      <div class="allmanagement-page">
        <div
          v-for="card in getAllManagement.edges"
          :key="card.node.id"
          class="management-cards"
        >
          <div class="management-cards__image">
            <div v-if="card.node.featuredImage" class="image-card__container">
              <nuxt-picture
                :src="card.node.featuredImage.node.sourceUrl"
                loading="lazy"
                class="image-card__picture"
                :imgAttrs="{
                  class: 'image-card__img',
                  style: 'display:block',
                  'data-my-data': 'my-value',
                }"
              />
            </div>
          </div>

          <div class="management-cards__content">
            <h5 class="management-cards__title">{{ card.node.title }}</h5>
            <p class="management-cards__position">
              {{ card.node.ManagementPosition.position }}
            </p>

            <NuxtLink
              :to="`/about/our-management/${card.node.slug}`"
              class="management-cards__more"
            >
              {{ $t('readMore') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import getAllManagement from '@/queries/getAllManagement'

export default {
  apollo: {
    getAllManagement: {
      prefetch: true,
      query: getAllManagement,
      variables() {
        return {
          locale: this.$i18n.locale.toUpperCase(),
        }
      },
      update(data) {
        return data.getAllManagement
      },
    },
  },
}
</script>
<style lang="scss">
.allmanagement-page {
  margin-top: 72px;
  margin-bottom: 96px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px 30px;
  row-gap: 32px;
  column-gap: 30px;
  flex-wrap: wrap;
}
.management-cards {
  position: relative;
  &__image {
    overflow: hidden;
    position: relative;
    background: #e1e1e1;
    margin-bottom: 24px;
    &::before {
      display: block;
      padding-top: 108.8888%;
      content: '';
    }
  }
  &__title {
    display: block;
    margin-bottom: 16px;
  }
  &__position {
    display: block;
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 120%;
  }
  &__more {
    display: inline-block;
    border-bottom: 1px solid;
  }
}

.image-card__container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.image-card__picture {
  display: flex;
  width: 100%;
  height: 100%;
}
.image-card__img {
  -o-object-fit: cover;
  object-fit: cover;
  font-family: 'object-fit: cover;object-position: center;';
  -o-object-position: center;
  object-position: center;
  width: 100%;
  height: 100%;
}
@media (max-width: $mobile) {
  .allmanagement-page {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-top: 32px;
    margin-bottom: 64px;
  }
}
</style>
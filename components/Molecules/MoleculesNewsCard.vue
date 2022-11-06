<template>
  <div class="large-card">
    <div v-if="post.featuredImage" class="large-card__image">
      <AtomsImage :image="post.featuredImage.node" />
    </div>
    <div class="large-card__content">
      <div class="large-card__title">
        <h3 v-if="!post.excerpt" class="Heading-h3">
          {{ post.title }}
        </h3>
        <h4 v-else class="Heading-h4">{{ post.title }}</h4>
      </div>
      <div class="large-card__excerpt" v-html="post.excerpt" />
      <div class="large-card__footer">
        <client-only>
          <div class="article-item__footer-data">
            {{ $dateFns.format(post.date, 'd MMMM yyyy', { locale: 'uk' }) }}
          </div>
        </client-only>
      </div>
    </div>
    <NuxtLink
      :to="`/media/news/${post.slug}`"
      class="large-card__link"
    ></NuxtLink>
  </div>
</template>
<script>
import AtomsImage from '@/components/Atoms/AtomsImage.vue'

export default {
  props: {
    post: {},
  },
  components: {
    AtomsImage,
  },
}
</script>
<style lang="scss">
.large-card {
  position: relative;
  padding-top: 24px;
  padding-bottom: 24px;
  &:first-child {
    border-top: 0;
  }
  &:hover {
    .image-element__picture {
      top: -8px;
      right: -8px;
      bottom: -8px;
      left: -8px;
    }
    .large-card__title .Heading-h4 {
      opacity: 0.75;
    }
  }
}
.large-card__image {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.large-card__content {
  display: flex;
  flex-direction: column;
}
.large-card__title {
  margin-top: 16px;
  margin-bottom: 16px;
}
.large-card__excerpt {
  font-size: 15px;
  line-height: 120%;
  color: #5f5f5f;
  flex-grow: 1;
  margin-bottom: 16px;
  transition: all 0.4s ease;
}
.large-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.large-card__icon-podcast {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 32px);
  height: 100%;
}
.large-card__link {
  &:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    content: '';
  }
}
@media (max-width: 1024px) {
  .large-card {
    padding: 16px 0;
    flex-direction: column;
  }
  .large-card__image {
    width: 100%;
    padding-right: 0;
    margin-bottom: 12px;
  }
  .large-card__content {
    width: 100%;
  }
  .large-card__title {
    margin-top: 8px;
    margin-bottom: 16px;
  }
  .large-card__excerpt {
    margin-bottom: 24px;
    font-size: 13px;
  }
  .large-card__icon-podcast {
    width: 100%;
  }
}
@media (min-width: 1025px) and (max-width: 1235px) {
  .large-card__title {
    .Heading-h3 {
      font-size: 21px;
      line-height: 120%;
    }
    .Heading-h4 {
      font-size: 18px;
      line-height: 120%;
    }
  }
}
</style>
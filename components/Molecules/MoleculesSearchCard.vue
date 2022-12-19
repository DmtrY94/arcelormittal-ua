<template>
  <div class="large-card">
    <div class="large-card__image">
      <AtomsImage v-if="post.featuredImage" :image="post.featuredImage.node" />
      <figure v-else class="image-element">
        <nuxt-picture
          src="/images/images-null.png"
          loading="lazy"
          class="image-element__picture"
          alt="test"
          :imgAttrs="{
            class: 'image-element__img',
            style: 'display:block',
            'data-my-data': 'my-value',
          }"
        />
      </figure>
    </div>
    <div class="large-card__content">
      <div class="large-card__footer">
        <div class="card-type">
          <span v-if="post.contentTypeName === 'news'">{{
            $t('pageAllNews')
          }}</span>
          <span v-else-if="post.contentTypeName === 'management'">{{
            $t('pageAllManagement')
          }}</span>
        </div>
      </div>
      <div class="large-card__title">
        <h4 class="Heading-h4">{{ post.title }}</h4>
      </div>
      <div
        v-if="post.excerpt"
        class="large-card__excerpt"
        v-html="post.excerpt"
      />
      <div class="large-card__footer">
        <client-only v-if="post.contentTypeName === 'news'">
          <div
            v-if="this.$i18n.locale == 'uk'"
            class="article-item__footer-data"
          >
            {{ $dateFns.format(post.date, 'd MMMM yyyy', { locale: 'uk' }) }}
          </div>
          <div v-else class="article-item__footer-data">
            {{ $dateFns.format(post.date, 'd MMMM yyyy', { locale: 'en-US' }) }}
          </div>
        </client-only>
        <div v-else-if="post.contentTypeName === 'management'">
          <p class="wrapper-block__label-search">
            {{ post.ManagementPosition.position }}
          </p>
        </div>
        <div>
          <NuxtLink
            v-if="post.contentTypeName === 'news'"
            :to="localePath(`/media/news/${post.translation.slug}`)"
            class="large-card__link"
          ></NuxtLink>
          <NuxtLink
            v-else-if="post.contentTypeName === 'management'"
            :to="localePath(`/about/our-management/${post.translation.slug}`)"
            class="large-card__link"
          ></NuxtLink>
          <NuxtLink
            v-else-if="post.contentTypeName === 'page'"
            :to="localePath(post.translation.uri)"
            class="large-card__link"
          ></NuxtLink>
        </div>
      </div>
    </div>
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
  flex-direction: column;
  align-items: flex-start;
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

.card-type {
  margin-top: 24px;
  span {
    font-size: 18px;
    color: var(--color-primary);
  }
}

.wrapper-block__label-search {
  color: #000;
}

@media (max-width: 1024px) {
  .large-card {
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
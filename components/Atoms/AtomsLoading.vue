<template>
  <div
    v-if="
      type === 'cards-page' || type === 'page' || type === 'cards-page-news'
    "
  >
    <div class="loading-block">
      <div class="loading-cover"></div>
      <div class="container">
        <div v-if="type === 'page'">
          <div class="loading-text__list">
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
          </div>
        </div>
        <div
          v-else
          class="loading__cards"
          :class="{ 'loading-news__cards': type === 'cards-page-news' }"
        >
          <div class="loading__item">
            <div class="loading-item__cover"></div>
            <div class="loading-item__content"></div>
            <div class="loading-item__content"></div>
          </div>
          <div class="loading__item">
            <div class="loading-item__cover"></div>
            <div class="loading-item__content"></div>
            <div class="loading-item__content"></div>
          </div>
          <div class="loading__item">
            <div class="loading-item__cover"></div>
            <div class="loading-item__content"></div>
            <div class="loading-item__content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="type === 'page-manager'" class="loading-block">
    <div class="container">
      <div class="loading-block__page-m">
        <div class="loading-page-m__text">
          <div class="loading-text__list">
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
            <div class="loading-text__item"></div>
          </div>
        </div>
        <div class="loading-page-m__image"></div>
      </div>
    </div>
  </div>
  <div v-else-if="type === 'main-page'">
    <div class="loading-block">
      <div class="loading-cover loading-cover__video"></div>
      <div class="container">
        <div class="loading__cards">
          <div class="loading__item">
            <div class="loading-item__cover"></div>
            <div class="loading-item__content"></div>
            <div class="loading-item__content"></div>
          </div>
          <div class="loading__item">
            <div class="loading-item__cover"></div>
            <div class="loading-item__content"></div>
            <div class="loading-item__content"></div>
          </div>
          <div class="loading__item">
            <div class="loading-item__cover"></div>
            <div class="loading-item__content"></div>
            <div class="loading-item__content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {},
  },
}
</script>
<style lang="scss">
.loading {
  &-block {
    position: relative;
    height: 100%;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.35);
      background-repeat: no-repeat;
      transform: translateZ(0);
      -webkit-animation-name: Skeleton-materialSkeleton;
      animation-name: Skeleton-materialSkeleton;
      -webkit-animation-duration: 5s;
      animation-duration: 5s;
      -webkit-animation-timing-function: linear;
      animation-timing-function: linear;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
      content: '';
    }
    &__page-m {
      margin-top: 179px;
      margin-bottom: 96px;
      display: flex;
      justify-content: space-between;
    }
  }
  &-cover {
    background: #F2F2F2;
    position: relative;
    width: 100%;
    min-height: 632px;
    overflow: hidden;
    z-index: 0;
    &__video {
      height: calc(100vh - 76px);
    }
  }
  &__cards {
    margin-top: 72px;
    margin-bottom: 96px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px 30px;
    row-gap: 32px;
    column-gap: 30px;
    flex-wrap: wrap;
  }
  &__item {
    position: relative;

    overflow: hidden;
  }
}
.loading-item {
  &__cover {
    overflow: hidden;
    position: relative;
    background: #F2F2F2;
    margin-bottom: 24px;
    &::before {
      display: block;
      padding-top: 108.8888%;
      content: '';
    }
  }
  &__content {
    height: 24px;
    margin-bottom: 16px;
    position: relative;
    background: #F2F2F2;
  }
}

.loading-page-m {
  &__image {
    overflow: hidden;
    position: relative;
    background: #F2F2F2;
    margin-bottom: 24px;
    width: calc(50% - 15px);
    &::before {
      display: block;
      padding-top: 108.8888%;
      content: '';
    }
  }
  &__text {
    width: calc(50% - 15px);
    .loading-text__list {
      margin-top: 0;
    }
    .loading-text__item {
      width: 100%;
      &:nth-of-type(2n) {
      width: 90%;
    }
    }
  }
}

.loading-text {
  &__list {
    margin-top: 64px;
    display: block;
  }
  &__item {
    width: 80%;
    height: 24px;
    background: #F2F2F2;
    margin-bottom: 24px;
    &:nth-of-type(2n) {
      width: 50%;
    }
  }
}

.loading-news__cards {
  .loading-item__cover {
    &::before {
      padding-top: 66.6666%;
    }
  }
}

@keyframes Skeleton-materialSkeleton {
  0% {
    right: 100%;
    left: 0;
  }

  50% {
    right: 0;
    left: 0;
  }

  100% {
    right: 0;
    left: 100%;
  }
}
@media (max-width: $mobile) {
  .loading__cards {
    margin-top: 32px;
    margin-bottom: 64px;
  }
  .loading-text {
    &__list {
      margin-top: 32px;
      margin-bottom: 64px;
    }
    &__item {
      height: 18px;
      margin-bottom: 18px;
      width: 100%;
      &:nth-of-type(2n) {
        width: 90%;
      }
    }
  }
  .loading__cards {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }
  .loading-block__page-m {
    display: flex;
    flex-direction: column-reverse;
  }
  .loading-page-m__text, .loading-page-m__image {
    width: 100%;
  }
  .loading-page-m__image {
    margin-bottom: 32px;
  }
  .loading-block__page-m {
    margin-top: 120px;
  }
}
</style>
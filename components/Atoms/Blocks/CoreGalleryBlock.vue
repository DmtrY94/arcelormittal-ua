<template>
  <div class="slider-block">
    <div class="swiper container">
      <div class="swiper-wrapper">
        <div
          v-for="image in attributes"
          :key="image.mediaItem.node.__typename"
          class="swiper-slide"
        >
          <div class="slider-content">
            <nuxt-picture
              :src="image.mediaItem.node.link"
              class="slider-content__picture"
              :imgAttrs="{
                class: 'slider-content__img',
                style: 'display:block',
                'data-my-data': 'my-value',
              }"
            />
          </div>
        </div>
      </div>
      <div class="slider-block__controls">
        <div class="slider-block__next"><TheNextIcon /></div>
        <div class="swiper-pagination"></div>
        <div class="slider-block__prev"><TheNextIcon /></div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  props: {
    attributes: {},
  },

  mounted() {
    // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
    // previously it was before export default. Moved here for performance issues. Move back in case of problems.
    // add or remove unused modules

    Swiper.use([Navigation, Pagination, Autoplay])

    // init Swiper:
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      // @see https://swiperjs.com/swiper-api#parameters
      direction: 'horizontal',
      loop: false,
      slidesPerView: 2,
      spaceBetween: 30,
      reverseDirection: true,
      speed: 300,
      // remove unused modules if needed
      modules: [Navigation, Pagination, Autoplay],
      // Pagination if needed
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      // Autoplay if needed
      autoplay: {
        delay: 3000,
      },
      // Navigation arrows if needed
      navigation: {
        nextEl: '.slider-block__next',
        prevEl: '.slider-block__prev',
      },
      // Configure other options. Not tested
    })
  },
}
</script>
<style lang="scss">
.slider-block {
  background: var(--text-secondary);
  padding: 96px 0;
  margin-bottom: 48px;
  overflow: hidden;
  &__controls {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 16px;
    .swiper-pagination {
      position: relative;
    }
    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      margin: 0 10px;
      background: rgba(255, 255, 255, 0.2);
    }
    .swiper-pagination-bullet-active {
      background: #ffffff;
    }
  }
  &__next {
    display: block;
    cursor: pointer;
    color: #ffffff;
    margin-right: 24px;
    .next-icon-slider {
      display: flex;
    }
  }
  &__prev {
    display: block;
    cursor: pointer;
    color: #ffffff;
    margin-left: 24px;
    .next-icon-slider {
      display: flex;
      transform: rotate(180deg);
    }
  }
}
.swiper {
  position: relative;
}
.swiper-wrapper {
  align-items: center;
}
.swiper-slide {
  align-items: center;
  display: flex;
  justify-content: center;
}
.slider-content {
  position: relative;
  &__picture {
    position: relative;
  }
  img {
    max-width: 100%;
    max-height: 460px;
  }
}
</style>
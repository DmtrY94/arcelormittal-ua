<template>
  <a
    v-if="!buttonLink"
    :href="buttonA"
    class="button-content"
    :class="[type === 'white' ? 'white-style' : 'color-style']"
    :style="{ width: buttonWith }"
  >
    <span class="button-content__name">{{ buttonName }}</span>
    <span class="button-content__icon">
      <svg
        width="25"
        height="11"
        viewBox="0 0 25 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.3379 0.295044L24.9998 5.49104L19.3674 10.705L18.7385 10.0253L23.1129 5.97536L0.281615 5.93029L0.279785 5.00584L23.1553 5.05076L18.7148 0.975181L19.3379 0.295044Z"
          fill="currentColor"
        />
      </svg>
    </span>
  </a>
  <NuxtLink
    v-else
    :to="localePath(buttonLink)"
    class="button-content"
    :class="[type === 'white' ? 'white-style' : 'color-style']"
    :style="{ width: buttonWith }"
  >
    <span class="button-content__name">{{ buttonName }}</span>
    <span class="button-content__icon">
      <svg
        width="25"
        height="11"
        viewBox="0 0 25 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.3379 0.295044L24.9998 5.49104L19.3674 10.705L18.7385 10.0253L23.1129 5.97536L0.281615 5.93029L0.279785 5.00584L23.1553 5.05076L18.7148 0.975181L19.3379 0.295044Z"
          fill="currentColor"
        />
      </svg>
    </span>
  </NuxtLink>
</template>
<script>
export default {
  props: {
    buttonName: {
      type: String,
      default: '',
    },
    buttonWith: {
      type: String,
      default: '',
    },
    buttonLink: {
      type: String,
      default: '',
    },
    type: {},
    buttonA: {},
  },
}
</script>
<style lang="scss">
.button-content {
  z-index: 0;
  background: transparent;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  padding: 0 30px;
  line-height: 72px;
  height: 72px;
  color: var(--color);
  border: 1px solid #ff3700;
  cursor: pointer;
  font-family: inherit;
  transition: 0.5s border;
  &.white-style {
    border: 1px solid #ffffff;
    .button-content__name,
    .button-content__icon {
      color: #ffffff;
    }
  }
  &.color-style {
    border: 1px solid #ff3700;
    .button-content__name {
      color: #212121;
    }
    .button-content__icon {
      color: #ff3700;
    }
  }
  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 0%;
    top: 0;
    right: -50%;
    border-radius: inherit;
    background: linear-gradient(
      89.92deg,
      #460a78 -19.92%,
      #be2878 11.7%,
      #fc3e44 44.86%,
      #f58746 66.81%
    );
    transition: left 0.65s ease-in-out, right 0.65s ease-in-out,
      width 0.65s ease-in-out;
    z-index: -1;
  }
  &:hover {
    color: #ffffff !important;
    border: 1px solid transparent;
    .button-content__name {
      color: #ffffff !important;
    }
  }
  &:hover .button-content__icon {
    color: #ffffff;
  }
  &:hover:before {
    left: 0%;
    width: 150%;
  }
}
.button-content__name {
  font-size: 18px;
  transition: all 0.4s ease 0s;
}
.button-content__icon {
  color: #fff;
}
</style>
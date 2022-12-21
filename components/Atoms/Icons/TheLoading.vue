<template>
  <svg
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.6934 2.38574C9.40909 2.38574 2.69336 9.10147 2.69336 17.3857C2.69336 25.67 9.40909 32.3857 17.6934 32.3857C25.9776 32.3857 32.6934 25.67 32.6934 17.3857C32.6934 9.10147 25.9776 2.38574 17.6934 2.38574ZM0.693359 17.3857C0.693359 7.9969 8.30452 0.385742 17.6934 0.385742C27.0822 0.385742 34.6934 7.9969 34.6934 17.3857C34.6934 26.7746 27.0822 34.3857 17.6934 34.3857C8.30452 34.3857 0.693359 26.7746 0.693359 17.3857Z"
      fill="currentColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.6934 2.38574C9.40909 2.38574 2.69336 9.10147 2.69336 17.3857H0.693359C0.693359 7.9969 8.30452 0.385742 17.6934 0.385742V2.38574Z"
      fill="#FF3700"
    />
  </svg>
</template>
<style lang="scss" scoped>
svg {
  color: #e1e1e1;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1turn);
  }
}
</style>
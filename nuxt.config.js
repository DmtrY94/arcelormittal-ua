export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'arcelormittal-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/Organisms',
      '~/components/Atoms',
      '~/components/Atoms/Icons'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    'nuxt-gsap-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/i18n',
    '@nuxtjs/pwa',
    '@nuxt/image',
  ],

  image: {
    domains: ['staticarcelormittalkr.local'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
  },

  i18n: {
    skipSettingLocaleOnNavigate: true,
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'uk',
        name: 'Ukraine'
      },
    ],
    defaultLocale: 'uk',
    vueI18n: {
      fallbackLocale: 'uk',
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  gsap: {
    extraPlugins: {
      scrollTrigger: true
    }
  },

  apollo: {
    tokenName: "apollo-token", // default value
    tokenExpires: 10, // default 7 days
    includeNodeModules: true, // this includes graphql-tag for node_modules
    authenticationType: "Basic",
    errorHandler: "~/plugins/apollo-error-handler.js",
    clientConfigs: {
      default: {
        httpEndpoint: 'https://arc-test.metalurg.online/graphql',
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

export default {
  
  publicRuntimeConfig: {
    myPublicURL: process.env.BASE_URL,
  },
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
    '@/assets/scss/main.scss',
    '@/assets/scss/_variables.scss'
  ],

  router: {
    extendRoutes(routes, resolve) {
      setTimeout(()=> {
        routes.push({
          name: 'custom',
          path: '*',
          component: resolve(__dirname, 'pages/404.vue'),
          redirect: '/404/'
        })
      })
    }
  },

  styleResources: {
    scss: ['@/assets/scss/_variables.scss']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-social-sharing.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/Organisms',
      '~/components/Atoms',
      '~/components/Atoms/Icons',
      '~/components/Atoms/Blocks'
    ]
  },

  dateFns: {
    locales: ["uk", "en-US" ],
    fallbackLocale: "uk"
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxt/postcss8',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    'nuxt-gsap-module',
    '@nuxtjs/date-fns',
    '@nuxtjs/device',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/apollo',
    '@nuxtjs/i18n',
    '@nuxtjs/pwa',
    '@nuxt/image',
  ],

  image: {
    domains: ['arc-test.metalurg.online'],
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
    locales: [
      {
        code: 'uk',
        file: 'uk-UA.js'
      },
      {
        code: 'en',
        file: 'en-US.js'
      },
    ],
    lazy: true,
    langDir: 'lang/',
    vueI18n: {
      fallbackLocale: 'uk',
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'uk',
      name: 'ArcelorMittal Kryvyi Rih',
      short_name: "ArcelorMittal",
      display: 'standalone'
    },
    icon: {
      fileName: 'icon-arc.png',
    },
    meta: {
      /* meta options */
      appleStatusBarStyle: 'default',
      name: 'ArcelorMittal Kryvyi Rih',
    }
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
      default: '@/graphql/config/config.js'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  },
}

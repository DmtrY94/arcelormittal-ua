<template>
  <div v-if="$apollo.error">error</div>
  <main v-else-if="getSearch" class="page-content">
    <section class="page-header hero-search">
      <div class="page-header-search__container container">
        <MoleculesBreadcrumbs :slug1="`${$t('searchPlaceholder')}`" />
        <h1 class="page-header__title page-header__title--has-search">
          <span class="page-header-search__search"><TheSearch /></span>
          <input
            type="text"
            class="search__input"
            v-model="searchText"
            :placeholder="`${$t('searchPlaceholder')}`"
            @keyup.enter="submitSearch"
          />
          <span
            v-show="searchText"
            @click="clearInput"
            class="page-header-search__clear"
            ><TheClose
          /></span>
        </h1>
      </div>
    </section>

    <div v-if="getSearch.pageInfo" class="container">
      <div v-if="!this.searchText" class="page-search__start">
        <span>Пошук по матеріалам</span>
      </div>
      <div v-else class="search-page">
        <MoleculesSearchCard
          v-for="post in getSearch.edges"
          :key="post.id"
          :post="post.node"
        />

        <div
          v-if="getSearch.pageInfo.hasNextPage"
          @click="showMore"
          class="list-container__button-block"
        >
          <div v-if="loadinge" class="search-loading">завантаженя</div>
          <div
            v-else-if="getSearch.edges.length === 0"
            class="page-search__start"
          >
            <span>Нічого не знайшли</span>
          </div>
          <AtomButton
            v-else
            :button-name="`${$t('loadMore')}`"
            button-with="254px"
            button-link="none"
            type="color"
            class="button-container"
          />
        </div>
        <div v-else></div>
      </div>
    </div>
  </main>
  <main v-else><AtomsLoading type="cards-page-news" /></main>
</template>
<script>
import getSearch from '@/queries/getSearch'

const pageSize = 6

export default {
  data() {
    return {
      searchText: '' || this.$route.query.searchText,
      getSearch: [],
      page: 0,
      showMoreEnabled: true,
      loading: false,
    }
  },
  apollo: {
    getSearch: {
      query: getSearch,
      prefetch: true,
      loadingKey: 'loadings',
      variables() {
        return {
          search: this.searchText || this.$route.query.searchText,
          first: pageSize,
          after: null,
          locale: this.$i18n.locale.toUpperCase(),
        }
      },
      skip() {
        return !this.searchText
      },
    },
  },
  methods: {
    submitSearch() {
      this.$nuxt.$options.router.push(
        this.localePath({
          name: 'search',
          query: { searchText: this.searchText },
        })
      )
    },
    clearInput() {
      this.searchText = ''
    },
    showMore() {
      this.$apollo.queries.getSearch.fetchMore({
        loadingKey: 'loadinge',
        variables: {
          first: 6,
          search: this.searchText,
          after: this.getSearch.pageInfo.endCursor,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newEdges = fetchMoreResult.getSearch.edges
          const pageInfo = fetchMoreResult.getSearch.pageInfo

          this.showMoreEnabled = pageInfo.hasNextPage
          return {
            getSearch: {
              __typename: previousResult.getSearch.__typename,
              // Merging the tag list
              edges: [...previousResult.getSearch.edges, ...newEdges],
              pageInfo,
            },
          }
        },
      })
    },
  },
  mounted() {
    console.log(this.getSearch)
    console.log(this.showMoreEnabled)
  },
  head: {
    title: 'Пошук',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'my website description',
      },
    ],
  },
}
</script>
<style lang="scss">
.search-page {
  margin-top: 64px;
  margin-bottom: 96px;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px 30px;
  row-gap: 32px;
  column-gap: 30px;
  flex-wrap: wrap;
}
.hero-search {
  position: relative;
  margin-top: 76px;
  background: var(--color);
  min-height: calc(238px + 76px);
  .search__input {
    position: relative;
    background: none;
    border: 0;
    border-bottom: 2px solid var(--color-revers);
    color: inherit;
    padding-right: 40px;
    padding-left: 32px;
    width: 100%;
    font-size: 50px;
    font-weight: bold;
    line-height: 62px;
    color: var(--color-revers);
    &:focus {
      border-color: var(--color-primary);
    }
  }
}
.page-header__title {
  font-size: 50px;
  font-weight: 300;
  line-height: 1.25;
  margin: 0;
  margin-top: 72px;
}
.page-header-search {
  &__container {
    position: relative;
    padding-top: 24px;
  }
  &__intro {
    display: block;
    margin-top: 48px;
    margin-bottom: 32px;
    font-size: 21px;
    color: #ffffff;
  }
  &__search {
    position: absolute;
    left: 0;
    color: #ffffff;
  }
  &__clear {
    position: absolute;
    right: 0;
    cursor: pointer;
    color: #ffffff;
  }
}
.page-search__start {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  span {
    font-size: 21px;
    font-weight: 800;
  }
}
@media (max-width: $mobile) {
  .search-page {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-top: 32px;
    margin-bottom: 64px;
  }
  .hero-search {
    margin-top: 64px;
  }
  .hero-search .search__input {
    font-size: 28px;
    padding-right: 28px;
  }
  .page-header-search__search {
    left: 15px;  
  }
  .page-header-search__clear {
    right: 15px;
  }
}
</style>
<template>
  <layout-main>
    <search-bar v-model="searchTerm" @search="search" />
  </layout-main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LayoutMain from '@/components/layouts/main'
import SearchBar from '@/components/ui/SearchBar'

export default {
  components: {
    LayoutMain
  },
  data() {
    return {
      searchTerm: ''
    }
  },
  methods: {
    search(searchTerm) {
      this.$router.push({name: 'shops', query: {searchTerm: searchTerm} })
    }
  }
}
</script>

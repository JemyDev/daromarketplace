<template>
  <div>
    <search-bar v-model="searchTerm" @search="search" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SearchBar from '@/components/ui/SearchBar'

export default {
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

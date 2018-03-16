<template>
  <layout-main>
    <div class="row justify-content-center" style="margin-top: 8%;">
      <div class="col col-md-6">
          <div id="logo" class="text-center">
            <h1>{{ $appName }}</h1>
            <p>Retrouvez tous les shops du serveur Ragnarok DARO !</p>
          </div>
        <search-bar v-model="searchTerm" @search="search" />
      </div>
    </div>
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

<style>
@import '../../assets/css/Home.css';
</style>

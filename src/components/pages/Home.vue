<template>
  <layout-main>
    <div class="row justify-content-center" style="margin-top: 8%;">
      <div class="col col-md-6">
          <div id="logo" class="text-center">
            <h1>{{ $appName }}</h1>
            <p>Retrouvez tous les shops du serveur Ragnarok DARO !</p>
          </div>

        <search-bar v-model="searchTerm" @search="search" autofocus />

        <div v-if="shops.isLoading">
          <p>Loading...</p>
        </div>
        <div v-else>
          <sortable-table
              :datas="shops.list"
              :columns="listColumns"
              @onRowClick="redirectToShop" />
        </div>

      </div>
    </div>
  </layout-main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import vLoading from 'vuex-loading/src/v-loading.vue'
import vLoadingSpinner from 'vuex-loading/src/spinners/spinner.vue'
import LayoutMain from '@/components/layouts/main'
import SearchBar from '@/components/ui/SearchBar'
import SortableTable from '@/components/ui/SortableTable'

export default {
  components: {
    LayoutMain,
    SortableTable,
    vLoading,
    vLoadingSpinner
  },
  data() {
    return {
      searchTerm: '',
      tableSearchTerm: null,
      listColumns: [
          {name: 'title', label: 'Vendeur'},
          {name: 'map', label: 'Emplacement', filters: ['capitalize']}
      ]
    }
  },
  computed: {
    ...mapGetters({
      shops: 'allShops'
    })
  },
  methods: {
    ...mapActions([
      'getAllShops'
    ]),
    search(searchTerm) {
      this.$router.push({name: 'shops', query: {searchTerm: searchTerm} })
    },
    redirectToShop(shopId) {
      this.$root.$router.push({name: 'shop', params: {id: shopId}})
    }
  },
  mounted: function() {
    this.getAllShops();
  }
}
</script>

<style>
@import '../../assets/css/Home.css';
</style>

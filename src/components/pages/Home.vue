<template>
  <layout-main>
    <div class="row justify-content-center" style="margin-top: 8%;">
      <div class="col col-md-6">
          <div id="logo" class="text-center">
            <h1>{{ $appName }}</h1>
            <p>Retrouvez tous les shops du serveur Ragnarok DARO !</p>
          </div>
        <search-bar v-model="searchTerm" @search="search" />
        <sortable-table
            v-if="items.length > 0"
            :datas="items"
            :columns="listColumns"
            :filterKey="tableSearchTerm" />
      </div>
    </div>
  </layout-main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LayoutMain from '@/components/layouts/main'
import SearchBar from '@/components/ui/SearchBar'
import SortableTable from '@/components/ui/SortableTable'

export default {
  components: {
    LayoutMain,
    SortableTable
  },
  data() {
    return {
      searchTerm: '',
      tableSearchTerm: null,
      listColumns: [
          {name: 'title',   label: 'Vendeur'},
          {name: 'map',    label: 'Emplacement'}
      ]
    }
  },
  computed: {
    items() {
      return this.$store.state.marketplace.allShops;
    }
  },
  methods: {
    search(searchTerm) {
      this.$router.push({name: 'shops', query: {searchTerm: searchTerm} })
    }
  },
  created() {
    this.$store.dispatch('allShops');
  }
}
</script>

<style>
@import '../../assets/css/Home.css';
</style>

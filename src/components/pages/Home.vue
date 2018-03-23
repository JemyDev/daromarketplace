<template>
  <layout-main>
    <div class="row justify-content-center" style="margin-top: 8%;">
      <div class="col col-md-6">
          <div id="logo" class="text-center">
            <h1>{{ $appName }}</h1>
            <p>Retrouvez tous les shops du serveur Ragnarok DARO !</p>
          </div>

        <search-bar @search="search" autofocus>

          <span><strong>Options avancées</strong> (optionnel)</span>
          <div class="form-group row mt-3">
            <label for="country" class="col-md-3 col-form-label">Catégories</label>
            <select class="custom-select col-md-9" id="categories" v-model="searchDatas.type">
              <option value="">Choisir...</option>
              <option v-for="category in orderBy(categories, 'type')" :key="category.id" :value="category.id">{{category.type}}</option>
            </select>
          </div>
          <div class="row mt-3">
            <div class="col-md-6">
              <div class="row">
                <label for="country" class="col-md-6 col-form-label">Prix min</label>
                <input type="text" name="price_min" id="price_min" class="col-md-6 form-control" v-model.lazy.number="searchDatas.prixMin">
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <label for="country" class="col-md-6 col-form-label">Prix max</label>
                <input type="text" name="price_max" id="price_max" class="col-md-6 form-control" v-model.lazy.lazy.number="searchDatas.prixMax">
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-6">
              <div class="row">
                <label for="country" class="col-md-6 col-form-label">Raffinage min</label>
                <select class="custom-select col-md-6" id="upgrade_min" v-model.lazy="searchDatas.refineMin">
                  <option :value="val" v-for="(val, index) in refine" :key="index">+{{val}}</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <label for="country" class="col-md-6 col-form-label">Raffinage max</label>
                <select class="custom-select col-md-6" id="upgrade_max" v-model.lazy="searchDatas.refineMax">
                  <option :value="val" v-for="(val, index) in refine" :key="index">+{{val}}</option>
                </select>
              </div>
            </div>
          </div>
        </search-bar>

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
import LayoutMain from '@/components/layouts/main'
import SearchBar from '@/components/ui/SearchBar'
import SortableTable from '@/components/ui/SortableTable'
import { removeEmpty } from "@/helpers/helpers";


export default {
  components: {
    LayoutMain,
    SortableTable,
  },
  data() {
    return {
      searchDatas: {
        type: '',
        prixMin: null,
        prixMax: null,
        refineMin: null,
        refineMax: null
      },
      tableSearchTerm: null,
      listColumns: [
          {name: 'title', label: 'Vendeur'},
          {name: 'map', label: 'Emplacement', filters: ['capitalize']}
      ]
    }
  },
  computed: {
    ...mapGetters({
      shops: 'allShops',
      categories: 'categories'
    }),
    refine() {
      return Array.apply(null, {length: 11}).map(Number.call, Number)
    }
  },
  watch: {
    searchDatas: {
     handler(val){
        if (val.prixMin && val.prixMin !== '' && val.prixMax && val.prixMax !== '') {
          if (val.prixMin > val.prixMax)
            this.searchDatas.prixMin = val.prixMax - 1

          if (val.prixMax < val.prixMin)
            this.searchDatas.prixMax = val.prixMin + 1

          if (val.prixMin < 0)
            this.searchDatas.prixMin = 0

          if (val.prixMax <= 0)
            this.searchDatas.prixMax = 1
        }

        if (val.refineMin && val.refineMax) {
          if (val.refineMin > val.refineMax)
            this.searchDatas.refineMin = val.refineMax

          if (val.refineMax < val.prixMin)
            this.searchDatas.refineMax = val.prixMin
        }

     },
     deep: true
  }
  },
  methods: {
    ...mapActions([
      'getAllShops'
    ]),
    search(searchTerm) {
      if (!searchTerm) return

      let query = removeEmpty(this.searchDatas)

      query.filtre = searchTerm

      this.$router.push({name: 'shops', query: query })
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

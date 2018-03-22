<template>
    <layout-main>
        <h2>Résultat(s) pour la recherche : {{searchTerm}}</h2>

        <form id="search" class="form-inline">
            <div class="form-group">
                <div class="input-group">
                    <label>Rechercher dans la liste : </label>
                    <input class="form-control mr-sm-2" name="query" v-model="tableSearchTerm">
                </div>
            </div>
        </form>

        <div v-if="shops.isLoading">
          <p>Loading...</p>
        </div>
        <div v-else>
          <sortable-table
            :datas="shops.list"
            :columns="listColumns"
            :filter-key="tableSearchTerm"
            @onRowClick="redirectToShop" />
        </div>

    </layout-main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import vLoading from 'vuex-loading/src/v-loading.vue'
import vLoadingSpinner from 'vuex-loading/src/spinners/spinner.vue'
import LayoutMain from '@/components/layouts/main'
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
            searchTerm: this.$route.query.searchTerm,
            tableSearchTerm: null,
            listColumns: [
                {name: 'name',   label: 'Nom objet', filters: ['formatItemName']},
                {name: 'prix',   label: 'Prix', align: 'right', filters: ['formatCurrency']},
                {name: 'refine', label: 'Refine'},
                {name: 'title',  label: 'Vendeur'},
                {name: 'map',    label: 'Emplacement', filters: ['capitalize']}
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
            'getShopsByItem'
        ]),
        redirectToShop(shopId) {
            this.$root.$router.push({name: 'shop', params: {id: shopId}})
        }
    },
    mounted() {
        this.getShopsByItem(this.$route.query.searchTerm);
    },
    updated() {
        if (this.searchTerm !== this.$route.query.searchTerm)
            this.searchTerm = this.$route.query.searchTerm
    }
}
</script>

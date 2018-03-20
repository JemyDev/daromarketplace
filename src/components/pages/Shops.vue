<template>
    <layout-main>
        <h2>Résultat(s) pour la recherche : {{searchTerm}}</h2>

        <form id="search">
            <span>Rechercher dans ce tableau :</span>
            <input name="query" v-model="tableSearchTerm">
        </form>

        <v-loading loader='load items by shop'>
            <template slot='spinner'>
                <v-loading-spinner height='60px' width='60px' />
            </template>

            <sortable-table
                :datas="items"
                :columns="listColumns"
                :filter-key="tableSearchTerm"
                :on-row-click="redirectToShop" />
        </v-loading>

    </layout-main>
</template>

<script>
import { mapGetters } from 'vuex'
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
                {name: 'refine', label: 'Reffinage'},
                {name: 'title',  label: 'Vendeur'},
                {name: 'map',    label: 'Emplacement'}
            ]
        }
    },
    computed: mapGetters({
        items: 'shopsByItem'
    }),
    methods: {
        redirectToShop(shopId) {
            this.$root.$router.push({name: 'shop', params: {id: shopId}})
        }
    },
    created() {
        this.$store.dispatch('getShopsByItem', {searchTerm : this.searchTerm})
    },
    updated() {
        if (this.searchTerm !== this.$route.query.searchTerm)
            this.searchTerm = this.$route.query.searchTerm


    }
}
</script>

<style>
.pointer {
    cursor: pointer;
}
</style>

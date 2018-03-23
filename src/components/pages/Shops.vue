<template>
    <layout-main>
        <h2>Résultat(s) pour la recherche : {{searchTerm}}</h2>

        <div v-if="shops.list.length > 0">
            <div v-if="shops.isLoading">
                <p>Loading...</p>
            </div>
            <div v-else>
                <sortable-table
                    :datas="localShopsList"
                    :columns="listColumns"
                    has-search
                    @onRowClick="redirectToShop" />
            </div>
        </div>
        <div v-else>
            <div class="alert alert-danger" role="alert">
                <p>Aucun résultat !</p>
            </div>
        </div>

    </layout-main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LayoutMain from '@/components/layouts/main'
import SortableTable from '@/components/ui/SortableTable'

export default {
    components: {
        LayoutMain,
        SortableTable
    },
    data() {
        return {
            searchTerm: this.$route.query.filtre,
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
    computed: {
        ...mapGetters({
            shops: 'allShops'
        }),
        localShopsList() {
            return this.shops.list
        }
    },
    methods: {
        ...mapActions([
            'getShopsByItem'
        ]),
        redirectToShop(shopId) {
            this.$router.push({name: 'shop', params: {id: shopId}})
        }
    },
    created () {
        if (!this.searchTerm)
            this.$router.push({name: 'home'})

        this.getShopsByItem(this.$route.query)
    },
    updated() {
        if (this.searchTerm !== this.$route.query.filtre)
            this.searchTerm = this.$route.query.filtre
    }
}
</script>

<style>
.pointer {
    cursor: pointer;
}
</style>

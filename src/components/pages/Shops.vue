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
import helpers from '@/helpers/helpers'
import { mapGetters } from 'vuex'
import LayoutMain from '@/components/layouts/main'
import SortableTable from '@/components/ui/SortableTable'

export default {
    components: {
        LayoutMain,
        SortableTable
    },
    data() {
        return {
            searchTerm: this.$route.query.searchTerm,
            tableSearchTerm: null,
            listColumns: [
                {key: 'name',   title: 'Nom objet', filters: ['formatItemName']},
                {key: 'prix',   title: 'Prix', align: 'right', filters: ['formatCurrency']},
                {key: 'refine', title: 'Reffinage'},
                {key: 'title',  title: 'Vendeur'},
                {key: 'map',    title: 'Emplacement'}
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
        redirectToShop(shopId) {
            this.$router.push({name: 'shop', params: {id: shopId}})
        },
        getImageSrc(itemId) {
            return helpers.getImageItem(itemId);
        }
    },
    created () {
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
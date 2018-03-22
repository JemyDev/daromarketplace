<template>
    <layout-main>
        <h2>Résultat(s) pour la recherche : {{searchTerm}}</h2>

        <form id="search">
            <span>Rechercher dans ce tableau :</span> <input name="query" v-model="tableSearchTerm">
        </form>

        <sortable-table
            :data="items"
            :columns="listColumns"
            :filter-key="tableSearchTerm" />

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
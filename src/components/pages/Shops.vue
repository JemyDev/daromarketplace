<template>
    <layout-main>
        <h2>Résultat(s) pour la recherche : {{searchTerm}}</h2>

        <form id="search">
            <span>Rechercher dans ce tableau :</span> <input name="query" v-model="tableSearchTerm">
        </form>

        <list-items
            :data="items"
            :columns="listColumns"
            :filter-key="tableSearchTerm" />

    </layout-main>
</template>

<script>
import { mapGetters } from 'vuex'
import LayoutMain from '@/components/layouts/main'
import ListItems from '@/components/ui/ListItems'

export default {
    components: {
        LayoutMain,
        ListItems
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
    computed: mapGetters({
        items: 'shopsByItem'
    }),
    methods: {
        redirectToShop(shopId) {
            this.$router.push({name: 'shop', params: {id: shopId}})
        }
    },
    created () {
        this.$store.dispatch('getShopsByItem', {searchTerm : this.searchTerm});
    },
    updated() {
        if (this.searchTerm !== this.$route.query.searchTerm)
            this.searchTerm = this.$route.query.searchTerm


    }
}
</script>

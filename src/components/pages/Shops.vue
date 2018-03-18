<template>
    <layout-main>
        <h2>Résultat(s) pour la recherche : {{searchTerm}}</h2>
<<<<<<< HEAD
        <table class="table" v-if="items.length > 0">
            <thead>
                <tr>
                    <th class="text-center" colspan="2">Nom objet</th>
                    <th class="text-center">Prix</th>
                    <th class="text-center">Vendeur</th>
                    <th class="text-center">Localisation</th>
                </tr>
            </thead>
            <tr v-for="(item, index) in items" :key="index" @click="redirectToShop(item.id_shop)" class="pointer">
                <td class="text-center"><img :src="getImageSrc(item.item_id)" :alt="item.name + '_icon'"></td>
                <td class="text-center">
                    <span valign="middle">{{item.name  | formatItemName}}</span>
                </td>
                <td class="text-center">{{item.prix | formatCurrency }}</td>
                <td class="text-center">{{item.title}}</td>
                <td class="text-center">
                    {{item.map}}, {{ item.x }}/{{ item.y }}
                    <!--<input type="hidden" v-model="copiedLocation" />
                    <button type="button" v-clipboard:copy="copiedLocation" v-clipboard:success="onCopy" v-clipboard:error="onError">Copier dans le clipboard</button>-->
                </td>
            </tr>
        </table>
        <div v-else class="alert alert-danger" role="alert">
            Aucun shop trouvé !
        </div>
=======

        <form id="search">
            <span>Rechercher dans ce tableau :</span> <input name="query" v-model="tableSearchTerm">
        </form>

        <list-items
            :data="items"
            :columns="listColumns"
            :filter-key="tableSearchTerm" />

>>>>>>> 65686f5febc5926eaae9079d50d2d7bcaa139fac
    </layout-main>
</template>

<script>
import helpers from '@/helpers/helpers'
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
<<<<<<< HEAD
            imageItemSrc: ''
        }
    },
    computed: {
        items() {
            return this.$store.state.shop.shopsByItem;
=======
            tableSearchTerm: null,
            listColumns: [
                {key: 'name',   title: 'Nom objet', filters: ['formatItemName']},
                {key: 'prix',   title: 'Prix', align: 'right', filters: ['formatCurrency']},
                {key: 'refine', title: 'Reffinage'},
                {key: 'title',  title: 'Vendeur'},
                {key: 'map',    title: 'Emplacement'}
            ]
>>>>>>> 65686f5febc5926eaae9079d50d2d7bcaa139fac
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
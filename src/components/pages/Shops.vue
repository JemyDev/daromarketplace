<template>
    <layout-main>
        <h2>Résultat(s) pour la recherche : {{searchTerm}}</h2>
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
    </layout-main>
</template>

<script>
import helpers from '@/helpers/helpers'
import { mapGetters } from 'vuex'
import LayoutMain from '@/components/layouts/main'

export default {
    components: {
        LayoutMain
    },
    data() {
        return {
            searchTerm: this.$route.query.searchTerm,
            imageItemSrc: ''
        }
    },
    computed: {
        items() {
            return this.$store.state.shop.shopsByItem;
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
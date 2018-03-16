<template>
    <layout-main>
        <table class="table" v-if="isShops">
            <thead align="left">
                <th>Magasin</th>
                <th>Localisation</th>
                <th>Nom objet</th>
                <th>Prix</th>
            </thead>
            <tr v-for="(item, index) in items" :key="index" @click="redirectToShop(item.id)">
                <td>{{item.title}}</td>
                <td>
                    {{item.map}}, {{ item.x }}/{{ item.y }}
                    <!--<input type="hidden" v-model="copiedLocation" />
                    <button type="button" v-clipboard:copy="copiedLocation" v-clipboard:success="onCopy" v-clipboard:error="onError">Copier dans le clipboard</button>-->
                </td>
                <td>{{item.name  | formatItemName}}</td>
                <td align="right">{{item.prix | formatCurrency }}</td>
            </tr>
        </table>
        <div v-else class="alert alert-danger" role="alert">
            Aucun shop trouvé !
        </div>
    </layout-main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LayoutMain from '@/components/layouts/main'

export default {
    components: {
        LayoutMain
    },
    data() {
        return {
            isShops: Object.keys(this.$store.state.shop.shopsByItem).length === 0
        }
    },
    computed: 
        mapGetters({
            items: 'shopsByItem'
        }),
    methods: {
        redirectToShop(shopId) {
            this.$router.push({name: 'shop', params: {id: shopId}})
        }
    },
    created () {
        this.$store.dispatch('getShopsByItem', {searchTerm : this.$route.query.searchTerm});
    }
}
</script>

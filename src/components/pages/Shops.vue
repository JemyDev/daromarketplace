<template>
    <layout-main>
        <h2>Résultat(s) pour la recherche : {{searchTerm}}</h2>
        <table class="table" v-if="items.length > 0">
            <thead>
                <tr>
                    <th>Nom objet</th>
                    <th class="text-right">Prix</th>
                    <th>Vendeur</th>
                    <th>Localisation</th>
                </tr>
            </thead>
            <tr v-for="(item, index) in items" :key="index" @click="redirectToShop(item.id)">
                <td>
                    <img src="@/assets/img/ro-generic-card.jpg" :alt="item.name + '_icon'">
                    <span valign="middle">{{item.name  | formatItemName}}</span>
                </td>
                <td align="right">{{item.prix | formatCurrency }}</td>
                <td>{{item.title}}</td>
                <td>
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
import { mapGetters } from 'vuex'
import LayoutMain from '@/components/layouts/main'

export default {
    components: {
        LayoutMain
    },
    data() {
        return {
            searchTerm: this.$route.query.searchTerm
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

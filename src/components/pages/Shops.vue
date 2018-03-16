<template>
    <div>
        <p>{{ $route.params.searchTerm }}</p>

        <table cellspacing="10">
            <thead align="left">
                <th>Magasin</th>
                <th>Lieu</th>
                <th>Nom objet</th>
                <th align="right">Prix</th>
                <th align="right">Raffinage</th>
            </thead>
            <tr v-for="(item, index) in items" :key="index" @click="redirectToShop(item.id)">
                <td>{{item.title}}</td>
                <td>{{item.map}}</td>
                <td>{{item.name}}</td>
                <td align="right">{{item.prix | zenyCurrency }}</td>
                <td align="right">{{item.refine}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: mapGetters({
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

<template>
    <layout-main>
        <article id="shop" class="row">
            <div v-if="shop.shopInfo != null" class="col">
                <h1>Nom du shop - <small class="text-muted">{{ shop.shopInfo.title }}</small></h1>
                <h2>Localisation - <small class="text-muted">{{ shop.shopInfo.map }} {{ shop.shopInfo.x }}/{{ shop.shopInfo.y }}</small></h2>
                <h3>Liste des items</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prix</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in shop.items" :key="index">
                            <td>{{ item.name | formatItemName }}</td>
                            <td>{{ item.prix | formatCurrency }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else class="col">
                <div class="alert alert-danger" role="alert">
                    Ce shop n'existe pas !
                </div>
            </div>
        </article>
    </layout-main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LayoutMain from '@/components/layouts/main'

export default {
    components: {
        LayoutMain
    },
    computed: mapGetters({
        shop: 'shop'
    }),
    created () {
        this.$store.dispatch('getShop', {id : this.$route.params.id});
    }
}
</script>

<style></style>
<template>
    <layout-main>
        <article id="shop" class="row">
            <div v-if="shop.shopInfo != null" class="col">
                <v-loading loader='load shop by shops'>
                    <template slot='spinner'>
                        <v-loading-spinner height='60px' width='60px' />
                    </template>
                    <h1>Nom du shop - <small class="text-muted">{{ shop.shopInfo.title }}</small></h1>
                    <h2>Localisation - <small class="text-muted">{{ shop.shopInfo.map }} {{ shop.shopInfo.x }}/{{ shop.shopInfo.y }}</small></h2>
                    <h3>Liste des items</h3>
                    <sortable-table
                        v-if="shop.items.length > 0"
                        :datas="shop.items"
                        :columns="listColumns"
                        :filterKey="tableSearchTerm" />
                </v-loading>
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
import { mapGetters } from 'vuex'
import vLoading from 'vuex-loading/src/v-loading.vue'
import vLoadingSpinner from 'vuex-loading/src/spinners/spinner.vue'
import LayoutMain from '@/components/layouts/main'
import SortableTable from '@/components/ui/SortableTable'

export default {
    components: {
        LayoutMain,
        SortableTable,
        vLoading,
        vLoadingSpinner
    },
    data() {
        return {
            tableSearchTerm: null,
            listColumns: [
                {name: 'name', label: 'Objet', filters: ['formatItemName']},
                {name: 'prix', label: 'Prix', filters: ['formatCurrency']}
            ]
        }
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
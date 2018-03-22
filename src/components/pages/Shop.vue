<template>
    <layout-main>
        <article id="shop" class="row">
            <div class="col">
                <div v-if="shop.data">
                    <div v-if="shop.isLoading">
                        <p>Loading...</p>
                    </div>
                    <div v-else>
                        <h1>Nom du shop - <small class="text-muted">{{ shop.data.shopInfo.title }}</small></h1>
                        <h2>Localisation - <small class="text-muted">{{ shop.data.shopInfo.map }} {{ shop.data.shopInfo.x }}/{{ shop.data.shopInfo.y }}</small></h2>
                        <h3>Liste des items</h3>
                        <sortable-table
                            v-if="shop.data.items.length > 0"
                            :datas="shop.data.items"
                            :columns="listColumns"
                            :filterKey="tableSearchTerm" />
                    </div>
                </div>
                <div v-else class="alert alert-danger" role="alert">
                    <p>Ce shop n'existe pas !</p>
                </div>
            </div>
        </article>
    </layout-main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
    computed: {
        ...mapGetters(['shop'])
    },
    methods: {
        ...mapActions([
            'getShop'
        ])
    },
    mounted() {
        this.getShop(this.$route.params.id);
    },
    updated() {
        console.log(this.shop)
    }
}
</script>

<style></style>

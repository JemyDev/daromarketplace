<template>
    <layout-main>
        <p>{{ $route.params.searchTerm }}</p>
        <p>{{ shops }}</p>
        <!-- <ul>
            <li v-for="(item, index) in items" :key="index">
            {{ item.title }} - {{ item.prix }}
            </li>
        </ul> -->
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
        shops: 'shopsByItem'
    }),
    created () {
        this.$store.dispatch('getShopsByItem', {searchTerm : this.$route.query.searchTerm});
    }
}
</script>

<template>
    <div>
        <p>{{ $route.params.searchTerm }}</p>
        <p>{{ shops }}</p>
    <!-- <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item.title }} - {{ item.prix }}
      </li>
    </ul> -->
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: mapGetters({
        shops: 'shopsByItem'
    }),
    created () {
        this.$store.dispatch('getShopsByItem', {searchTerm : this.$route.query.searchTerm});
    }
}
</script>

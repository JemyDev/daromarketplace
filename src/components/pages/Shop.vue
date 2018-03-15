<template>
    <div>
        {{ $route.params.id }}
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: mapGetters({
        shop: 'shop'
    }),
    created () {
        this.$store.dispatch('getShop', {id : this.$route.params.id});
    }
}
</script>

<style></style>
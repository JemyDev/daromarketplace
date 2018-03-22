<template>
    <div class="bg-light">
        <nav class="navbar navbar-light  justify-content-between container">
            <a href="/" class="navbar-brand">{{ $appName }}</a>
            <form class="form-inline">
                <search-bar :cls="cls" @search="search"></search-bar>
            </form>
        </nav>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import SearchBar from '@/components/ui/SearchBar'

export default {
    data() {
        return {
            searchTerm: '',
            lastSearchTerm: null,
            cls: ['mr-sm-2']
        }
    },
    methods: {
        ...mapActions([
            'getShopsByItem'
        ]),
        search(searchTerm) {
            if (this.lastSearchTerm && this.lastSearchTerm === searchTerm)
                return

            let routeQuery = {
                query: { searchTerm }
            }

            if (this.$route.name === 'shops') {
                this.getShopsByItem(searchTerm);
            } else {
                routeQuery.name = 'shops'
            }

            this.$router.push(routeQuery);

            this.lastSearchTerm = searchTerm;
        }
    }
};
</script>

<style></style>

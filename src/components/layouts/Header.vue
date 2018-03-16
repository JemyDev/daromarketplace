<template>
    <nav class="navbar navbar-light bg-light justify-content-between">
        <a href="/" class="navbar-brand">{{ $appName }}</a>
        <form class="form-inline">
            <search-bar :customClasses="customClasses" @search="search"></search-bar>
        </form>
    </nav>
</template>

<script>
import SearchBar from '@/components/ui/SearchBar'
export default {
    data() {
        return {
            searchTerm: '',
            customClasses: ['mr-sm-2']
        }
    },
    methods: {
        search(searchTerm) {
            let currentRoute = this.$route.path;
            if(currentRoute = '/shops') {
                this.$router.query.searchTerm = searchTerm
            } else {
                this.$router.push({name: 'shops', query: {searchTerm: searchTerm} })
            }
        }
    }
};
</script>

<style></style>
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
import SearchBar from '@/components/ui/SearchBar'

export default {
    data() {
        return {
            searchTerm: '',
            cls: ['mr-sm-2']
        }
    },
    methods: {
        search(searchTerm) {
            if (this.$route.name === 'shops') {
                console.log('reload shops data')
                this.$emit('updateItemList', {searchTerm})
            } else {
                this.$router.push({name: 'shops', query: {searchTerm: searchTerm} })
            }
        }
    }
};
</script>

<style></style>

<template>
  <form @submit.prevent="search">
    <input type="text" name="searchBar" v-model="searchTerm" />
  </form>
</template>

<script>
import Vue from "vue";

let SearchBar = Vue.component('search-bar', {
  data() {
   return {
     searchTerm: ''
   }
 },
 methods: {
    search() {
      this.$emit('search', this.searchTerm)
    }
  }
});

export default SearchBar
</script>

<template>
  <form @submit.prevent="search" id="form-buscar">
    <div class="form-group">
      <div class="input-group">
        <input type="search" name="searchBar" class="form-control" :class="cls" :placeholder="placeholder" v-model="searchTerm" :autofocus="autofocus" />
        <span class="input-group-btn">
          <button class="btn btn-success" type="submit">
            <i class="fa fa-search"></i> Rechercher
          </button>
        </span>
      </div>
    </div>
  </form>
</template>

<script>
import Vue from "vue";

let SearchBar = Vue.component('search-bar', {
  data() {
   return {
     searchTerm: null
   }
 },
 props: {
   placeholder: {
     type: String,
     default: 'Rechercher un item...'
   },
   cls: {
     type: Array,
     default: () => { return [] }
   },
   autofocus : Boolean
 },
 methods: {
    search() {
      this.$emit('search', this.searchTerm)

      this.searchTerm = null
    }
  }
});

export default SearchBar
</script>

<template>
  <div>
    <search-bar />

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
  /* computed: mapGetters({
    items: 'allItems'
  }),
  created () {
    this.$store.dispatch('getAllItems')
  } */
}
</script>

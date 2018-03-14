<template>
  <div id="app">
    <header>
      <h1>Daro marketplace</h1>
      <search-bar v-if="!isHome" />
    </header>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isHome: true
    }
  }
}
</script>

<template>
  <div>
    <Header v-if="currentRoot != '/'"></Header>
    <section class="container">
      <slot/>
    </section>
  </div>
</template>

<script>
import Header from '@/components/layouts/Header'
export default {
  data() {
    return {
      currentRoot: this.$route.path
    }
  },
  components: {
    Header
  }
};
</script>

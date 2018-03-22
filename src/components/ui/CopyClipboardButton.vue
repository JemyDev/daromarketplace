<template>
  <button type="button"
      v-clipboard:copy="message"
      v-clipboard:success="onCopy">
        <slot></slot>
      </button>
</template>

<script>

import Vue from 'Vue'

export default Vue.component('copy-clipboard-button', {
  props: {
    message: String
  },
  methods: {
    onCopy: function (e) {
      e.stopPropagation();
      alert('You just copied: ' + e.text)
    }
  }
})
</script>


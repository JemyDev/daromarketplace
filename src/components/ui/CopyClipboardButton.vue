<template>
  <button type="button"
      v-clipboard="message"
      @success="onCopy">
        <slot></slot>
      </button>
</template>

<script>
export default {
  props: {
    message: String
  },
  methods: {
    onCopy: function (e) {
      e.stopPropagation();
      alert('You just copied: ' + e.text)

    }
  }
}
</script>


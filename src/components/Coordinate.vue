<template>
  {{coordinate}}
</template>

<script>
export default {
  props: ['value', 'type'],
  computed: {
    coordinate() {
      const val = this.value.lat.toFixed(5).toString().replace('.', '°')
      return val.substr(0, 5) + '.' + val.substr(index);
    }
  }
}
</script>

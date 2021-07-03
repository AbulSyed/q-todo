<template>
  <q-card-actions align="right">
    <q-btn
      type="submit"
      :disabled="!name"
      v-close-popup
      flat
      label="Save"
      color="primary" />
  </q-card-actions>
</template>

<script>
  export default {
    props: ['name']
  }
</script>

<style lang="scss" scoped>

</style>
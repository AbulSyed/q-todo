<template>
  <div class="row q-mb-xs">
    <q-input
      :rules="[val => !!val || 'Field is required']"
      :value="name"
      @input="$emit('update:name', $event)"
      autofocus
      clearable
      class="col"
      outlined
      label="name" />
  </div>
</template>

<script>
  export default {
    props: ['name']
  }
</script>

<style lang="scss" scoped>

</style>
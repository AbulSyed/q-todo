<template>
  <div class="row q-mb-xs">
    <q-input
      :rules="[val => !!val || 'Field is required']"
      :value="name"
      @input="$emit('update:name', $event)"
      autofocus
      v-select-all
      clearable
      class="col"
      outlined
      label="name" />
  </div>
</template>

<script>
  export default {
    props: ['name'],
    directives: {
      selectAll: {
        bind(el){
          let input = el.querySelector('.q-field__native')
          input.addEventListener('focus', () => {
            if(input.value.length){
              input.select()
            }
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
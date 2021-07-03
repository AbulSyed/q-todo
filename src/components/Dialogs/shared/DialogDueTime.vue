<template>
  <div
    v-if="dueDate"
    class="row">
    <q-input
      class="col"
      outlined
      readonly
      :value="dueTime"
      @input="$emit('update:dueTime', $event)"
      label="Due time">
      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time :value="dueTime" @input="$emit('update:dueTime', $event)">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
  export default {
    props: ['dueDate', 'dueTime']
  }
</script>

<style lang="scss" scoped>

</style>
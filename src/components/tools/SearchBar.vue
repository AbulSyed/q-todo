<template>
  <q-input
    outlined
    v-model="searchInput"
    class="col"
    label="Search"
  >

    <template v-slot:append>
      <q-icon v-if="searchInput !== ''" name="close" @click="searchInput = ''" class="cursor-pointer" />
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('tasks', ['search']),
    searchInput: {
      get(){
        return this.search
      },
      set(value){
        this.setSearch(value)
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['setSearch']),
  }
}
</script>

<style lang="scss" scoped>

</style>
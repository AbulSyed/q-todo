<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions('settings', ['setSettings'])
  },
  mounted(){
    this.setSettings()
  }
}
</script>

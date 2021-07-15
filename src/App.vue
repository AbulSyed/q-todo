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
    ...mapActions('settings', ['setSettings']),
    ...mapActions('auth', ['getUser'])
  },
  mounted(){
    this.setSettings()
    this.getUser()
  }
}
</script>

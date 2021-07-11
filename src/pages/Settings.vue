<template>
  <q-page class="q-pa-md">
    <q-list
      dense
      bordered
      padding>
      <q-item-label header>Settings</q-item-label>

      <q-item v-ripple>
        <q-item-section>
          <q-item-label>Show hourly format</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle
            v-model="showHourlyTime" />
        </q-item-section>
      </q-item>

    </q-list>
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('settings', ['settings']),
    showHourlyTime: {
      get(){
        return this.settings.showHourlyTime
      },
      set(value){
        this.setShowHourlyTime(value)
      }
    }
  },
  methods: {
    ...mapActions('settings', ['setShowHourlyTime'])
  }
}
</script>

<style>

</style>
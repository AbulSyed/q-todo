<template>
  <q-page class="q-pa-md">
    <q-list
      bordered
      separator
    >
      <Task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key"
      />
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import Task from '../components/Task.vue'

export default {
  components: { Task },
  computed: {
    ...mapGetters('tasks', ['tasks'])
  }
}
</script>

<style>

</style>
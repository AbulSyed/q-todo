<template>
  <q-page class="q-pa-md">
    <q-list
      v-if="Object.keys(tasks).length"
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

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        @click="showDialog = !showDialog"
        round
        color="primary"
        size="24px"
        icon="add"
      />
    </div>

    <q-dialog v-model="showDialog">
      <AddTaskDialog />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import Task from '../components/Task.vue'
import AddTaskDialog from '../components/Dialogs/AddTaskDialog.vue'

export default {
  components: { Task, AddTaskDialog },
  data(){
    return {
      showDialog: true
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasks'])
  }
}
</script>

<style>

</style>
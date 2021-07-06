<template>
  <q-page class="q-pa-md">

    <q-banner v-if="!Object.keys(tasksTodo).length" inline-actions class="bg-grey-3">
      <template v-slot:avatar>
        <q-icon name="check" color="primary" />
      </template>
      No tasks to do!
      <template v-slot:action>
        <q-btn
          @click="showDialog = true"
          flat
          color="primary"
          label="Add a task" />
      </template>
    </q-banner>

    <Banner v-if="Object.keys(tasksTodo).length" bgColor="bg-orange">Todo</Banner>
    <q-list
      v-if="Object.keys(tasksTodo).length"
      bordered
      separator
    >
      <Task
        v-for="(task, key) in tasksTodo"
        :key="key"
        :task="task"
        :id="key"
      />
    </q-list>
    
    <Banner v-if="Object.keys(tasksCompleted).length" bgColor="bg-green" class="q-mt-lg">Completed</Banner>
    <q-list
      v-if="Object.keys(tasksCompleted).length"
      bordered
      separator
    >
      <Task
        v-for="(task, key) in tasksCompleted"
        :key="key"
        :task="task"
        :id="key"
      />
    </q-list>

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        @click="showDialog = true"
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
import Banner from '../components/Banner.vue'

export default {
  components: { Task, AddTaskDialog, Banner },
  data(){
    return {
      showDialog: false
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted'])
  }
}
</script>

<style>

</style>
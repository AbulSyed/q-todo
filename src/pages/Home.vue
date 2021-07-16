<template>
  <q-page class="">

    <div class="q-pa-md absolute full-width full-height column">

      <template v-if="tasksLoaded">

        <div class="row q-mb-lg">
          <SearchBar></SearchBar>
        </div>

        <q-scroll-area class="q-scroll-area-tasks">

          <q-banner v-if="!tasksTodo.length && !search" inline-actions class="bg-grey-3">
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

          <Banner v-if="tasksTodo.length" bgColor="bg-orange">Todo</Banner>
          <q-list
            v-if="tasksTodo.length"
            bordered
            separator
          >
            <Task
              v-for="task in tasksTodo"
              :key="task.id"
              :task="task"
              :id="task.id"
            />
          </q-list>
          
          <Banner v-if="tasksCompleted.length" bgColor="bg-green" class="q-mt-lg">Completed</Banner>
          <q-list
            v-if="tasksCompleted.length"
            bordered
            separator
          >
            <Task
              v-for="task in tasksCompleted"
              :key="task.id"
              :task="task"
              :id="task.id"
            />
          </q-list>

        </q-scroll-area>

        <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
          <q-btn
            @click="showDialog = true"
            class="all-pointer-events"
            round
            color="primary"
            size="24px"
            icon="add"
          />
        </div>

      </template>

      <template v-else>
        <div class="absolute-center">
          <q-spinner-hourglass
            color="primary"
            size="4em"
          />
        </div>
      </template>

    </div>

    <q-dialog v-model="showDialog">
      <AddTaskDialog />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import Task from '../components/Task.vue'
import AddTaskDialog from '../components/Dialogs/AddTaskDialog.vue'
import Banner from '../components/Banner.vue'
import SearchBar from '../components/tools/SearchBar.vue'

export default {
  components: { Task, AddTaskDialog, Banner, SearchBar },
  data(){
    return {
      showDialog: false
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted']),
    ...mapState('tasks', ['search', 'tasksLoaded'])
  },
  methods: {
    ...mapActions('tasks', ['fetchTasks'])
  },
  mounted(){
    this.fetchTasks()
  }
}
</script>

<style>
.q-scroll-area-tasks {
  display: flex;
  flex-grow: 1;
}
</style>
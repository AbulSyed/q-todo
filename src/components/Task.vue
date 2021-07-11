<template>
  <q-item
    clickable
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    :class="task.completed ? 'bg-green-3' : 'bg-grey-1'"
    v-ripple
    v-touch-hold.mouse="handleHold"
  >
    <q-item-section side top>
      <q-checkbox
        :value="task.completed"
        class="no-pointer-events"
      />
    </q-item-section>

    <q-item-section>
      <q-item-label
        :class="{ 'text-strike': task.completed }"
      >
        {{ task.name }}
      </q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-item-label caption>{{ formatDate(task.dueDate) }}</q-item-label>
      <q-item-label caption>{{ taskDueTime }}</q-item-label>
    </q-item-section>

    <q-item-section side top>
      <div class="row">
        <q-btn
          @click.stop="showDialog = true"
          flat
          round
          color="primary"
          icon="edit"
        />
        <q-btn
          @click.stop="handleDelete(id)"
          flat
          round
          color="red-4"
          icon="delete"
        />
      </div>
    </q-item-section>

    <q-dialog v-model="showDialog">
      <EditTaskDialog :task="task" :id="id" />
    </q-dialog>
  </q-item>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import EditTaskDialog from './Dialogs/EditTaskDialog.vue'
import { date } from 'quasar'

export default {
  props: ['task', 'id'],
  components: { EditTaskDialog },
  data() {
    return {
      showDialog: false
    }
  },
  computed: {
    ...mapState('settings', ['settings']),
    taskDueTime(){
      if(this.settings.showHourlyTime){
        // formateDate expecting like 2021/07/09
        return date.formatDate(this.task.dueDate + ' ' + this.task.dueTime, 'h:mm A')
      }
      return this.task.dueTime
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    handleDelete(id){
      this.$q.dialog({
        title: 'Confirm',
        message: 'Really delete?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        console.log('>>>> OK')
        this.deleteTask(id)
      }).onCancel(() => {
        console.log('>>>> Cancel')
      })
    },
    handleHold(){
      this.showDialog = true
    },
    formatDate(dueDate){
      return date.formatDate(dueDate, 'D MMM YY')
    }
  }
}
</script>

<style>

</style>
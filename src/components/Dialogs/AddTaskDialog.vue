<template>
  <q-card>
    <DialogHeader>Add task</DialogHeader>

    <q-form @submit.prevent="handleSubmit">
      <q-card-section class="q-pt-none">

        <DialogTaskName :name.sync="name"></DialogTaskName>

        <DialogDueDate :dueDate.sync="dueDate"></DialogDueDate>

        <DialogDueTime :dueDate="dueDate" :dueTime.sync="dueTime"></DialogDueTime>

      </q-card-section>

      <DialogButtons :name="name"></DialogButtons>

      <pre>{{ name }} - {{ dueDate }} - {{ dueTime }} - {{ completed }}</pre>
    </q-form>

  </q-card>
</template>

<script>
import { mapActions } from 'vuex'
import DialogHeader from './shared/DialogHeader.vue'
import DialogTaskName from './shared/DialogTaskName.vue'
import DialogDueDate from './shared/DialogDueDate.vue'
import DialogDueTime from './shared/DialogDueTime.vue'
import DialogButtons from './shared/DialogButtons.vue'

export default {
  components: { DialogHeader, DialogTaskName, DialogDueDate, DialogDueTime, DialogButtons },
  data(){
    return {
      name: '',
      dueDate: '',
      dueTime: '',
      completed: false
    }
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    handleSubmit(){
      this.addTask({
        name: this.name,
        dueDate: this.dueDate,
        dueTime: this.dueTime,
        completed: this.completed
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @media screen and (min-width: 600px) {
    .q-card {
      min-width: 500px;
    }
  }
</style>
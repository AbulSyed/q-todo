<template>
  <q-item
    clickable
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    :class="task.completed ? 'bg-green-3' : 'bg-grey-1'"
    v-ripple
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
      <q-item-label caption>{{ task.dueDate }}</q-item-label>
      <q-item-label caption>{{ task.dueTime }}</q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-btn
        @click.stop="handleDelete(id)"
        flat
        round
        color="red-4"
        icon="delete"
      />
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['task', 'id'],
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
    }
  }
}
</script>

<style>

</style>
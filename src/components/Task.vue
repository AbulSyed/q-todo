<template>
  <q-item
    clickable
    @click="task.completed = !task.completed"
    :class="task.completed ? 'bg-green-3' : 'bg-grey-1'"
    v-ripple
  >
    <q-item-section side top>
      <q-checkbox v-model="task.completed" />
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
  </q-item>
</template>

<script>
export default {
  props: ['task', 'id']
}
</script>

<style>

</style>
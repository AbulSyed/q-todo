<template>
  <q-page class="q-pa-md">
    <q-list
      bordered
      separator
    >

      <q-item
        v-for="(task, key) in tasks"
        :key="key"
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

    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('tasks', ['tasks'])
  }
}
</script>

<style>

</style>
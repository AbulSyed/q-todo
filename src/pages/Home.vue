<template>
  <q-page class="q-pa-md">
    <q-list
      bordered
      separator
    >

      <q-item 
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed = !task.completed"
        :class="task.completed ? 'bg-green-3' : 'bg-grey-1'"
        clickable
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
export default {
  data(){
    return {
      tasks: [
        {
          id: 1,
          name: 'finish homework',
          completed: false,
          dueDate: '2021/06/26',
          dueTime: '12:00'
        },
        {
          id: 2,
          name: 'get food',
          completed: true,
          dueDate: '2021/06/27',
          dueTime: '14:00'
        },
        {
          id: 3,
          name: 'chill',
          completed: false,
          dueDate: '2021/06/28',
          dueTime: '16:00'
        }
      ]
    }
  }
}
</script>

<style>

</style>
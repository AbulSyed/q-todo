<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add task</div>
      <q-space />
      <q-btn
        v-close-popup
        dense
        flat
        round
        color="primary"
        icon="close"
      />
    </q-card-section>

    <q-form @submit.prevent="handleSubmit">
      <q-card-section class="q-pt-none">
        <div class="row q-mb-xs">
          <q-input
            :rules="[val => !!val || 'Field is required']"
            autofocus
            clearable
            class="col"
            outlined
            v-model="name"
            label="name" />
        </div>

        <div class="row q-mb-md">
          <q-input
            class="col"
            readonly
            outlined
            v-model="dueDate"
            label="Due date">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="dueDate">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div
          v-if="dueDate"
          class="row">
          <q-input
            class="col"
            outlined
            readonly
            v-model="dueTime"
            label="Due time">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="dueTime">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          type="submit"
          :disabled="!name"
          v-close-popup
          flat
          label="Save"
          color="primary" />
      </q-card-actions>
    </q-form>

  </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
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
import Vue from 'vue'
import { uid } from 'quasar'

export default {
  namespaced: true,
  state: {
    tasks: {
      'ID1': {
        name: 'finish homework',
        completed: false,
        dueDate: '2021/06/26',
        dueTime: '12:00'
      },
      'ID2': {
        name: 'get food',
        completed: true,
        dueDate: '2021/06/27',
        dueTime: '14:00'
      },
      'ID3': {
        name: 'chill',
        completed: false,
        dueDate: '2021/06/28',
        dueTime: '16:00'
      }
    }
  },
  mutations: {
    UPDATE_TASK(state, task){
      Object.assign(state.tasks[task.id], task.updates)
    },
    DELETE_TASK(state, id){
      Vue.delete(state.tasks, id) // Vue2 - !needed in Vue3
    },
    ADD_TASK(state, task){
      Vue.set(state.tasks, task.id, task.task) // Vue2 - !needed in Vue3
    }
  },
  actions: {
    updateTask(context, task){
      context.commit('UPDATE_TASK', task)
    },
    deleteTask(context, id){
      context.commit('DELETE_TASK', id)
    },
    addTask(context, task){
      let id = uid()
      const payload = {
        id,
        task
      }
      context.commit('ADD_TASK', payload)
    }
  },
  getters: {
    tasks: (state) => {
      return state.tasks
    }
  }
}
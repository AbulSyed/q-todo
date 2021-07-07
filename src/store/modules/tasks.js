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
    },
    search: ''
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
    },
    SET_SEARCH(state, search){
      state.search = search
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
    },
    setSearch(context, search){
      context.commit('SET_SEARCH', search)
    }
  },
  getters: {
    tasksFiltered: state => {
      let tasksFiltered = {}
      if(state.search){
        Object.keys(state.tasks).forEach(key => {
          let task = state.tasks[key]
          if(task.name.toLowerCase().includes(state.search.toLowerCase())){
            tasksFiltered[key] = task
          }
        })
        return tasksFiltered
      }
      return state.tasks
    },
    tasksTodo: (state, getters) => {
      let tasksFiltered = getters.tasksFiltered
      let tasks = {}
      Object.keys(tasksFiltered).forEach(key => {
        let task = tasksFiltered[key]
        if(!task.completed){
          tasks[key] = task
        }
      })
      return tasks
    },
    tasksCompleted: (state, getters) => {
      let tasksFiltered = getters.tasksFiltered
      let tasks = {}
      Object.keys(tasksFiltered).forEach(key => {
        let task = tasksFiltered[key]
        if(task.completed){
          tasks[key] = task
        }
      })
      return tasks
    }
  }
}
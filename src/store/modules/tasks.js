import Vue from 'vue'
import { uid } from 'quasar'

export default {
  namespaced: true,
  state: {
    tasks: [],
    search: ''
  },
  mutations: {
    UPDATE_TASK(state, update){
      state.tasks = state.tasks.map(task => {
        if(task.id == update.id){
          return update
        }else{
          return task
        }
      })
    },
    DELETE_TASK(state, id){
      state.tasks = state.tasks.filter(task => task.id !== id)
    },
    ADD_TASK(state, task){
      state.tasks = state.tasks.concat(task)
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
      context.commit('ADD_TASK', { id, ...task })
    },
    setSearch(context, search){
      context.commit('SET_SEARCH', search)
    }
  },
  getters: {
    tasks: (state) => {
      return state.tasks
    },
    tasksFiltered: state => {
      let tasksFiltered = []
      if(state.search){
        state.tasks.forEach(task => {
          if(task.name.toLowerCase().includes(state.search.toLowerCase())){
            tasksFiltered.push(task)
          }
        })
        return tasksFiltered
      }
      return state.tasks
    },
    tasksTodo: (state, getters) => {
      let tasksFiltered = getters.tasksFiltered
      let tasks = []
      
      tasksFiltered.forEach(task => {
        if(!task.completed){
          tasks.push(task)
        }
      })
      return tasks
    },
    tasksCompleted: (state, getters) => {
      let tasksFiltered = getters.tasksFiltered
      let tasks = []

      tasksFiltered.forEach(task => {
        if(task.completed){
          tasks.push(task)
        }
      })
      return tasks
    }
  }
}
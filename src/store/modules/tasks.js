import { firestoreService } from 'src/boot/firebase'
import { showError } from 'src/functions/showError'
import { Notify } from 'quasar'
import { watchEffect } from 'vue'

export default {
  namespaced: true,
  state: {
    tasks: [],
    search: '',
    tasksLoaded: false
  },
  mutations: {
    SET_TASKS(state, tasks){
      state.tasks = tasks
    },
    // REDUNDANT DUE TO FIRESTORE REALTIME LISTNER :(
    // UPDATE_TASK(state, update){
    //   state.tasks = state.tasks.map(task => {
    //     if(task.id == update.id){
    //       return update
    //     }else{
    //       return task
    //     }
    //   })
    // },
    // DELETE_TASK(state, id){
    //   state.tasks = state.tasks.filter(task => task.id !== id)
    // },
    // ADD_TASK(state, task){
    //   state.tasks = state.tasks.concat(task)
    // },
    SET_SEARCH(state, search){
      state.search = search
    },
    SET_TASKS_LOADED(state, tasksLoaded){
      state.tasksLoaded = tasksLoaded
    }
  },
  actions: {
    async fetchTasks(context){
      let tasks = []

      const query = ['userId', '==', context.rootState.auth.user.id]

      let collectionRef = firestoreService.collection('tasks').where(...query)

      collectionRef.onSnapshot(snap => {
        context.commit('SET_TASKS_LOADED', true)
        let results = []
        snap.docs.forEach(doc => {
          results.push({ ...doc.data(), id: doc.id })
        })
        tasks = results
        context.commit('SET_TASKS', tasks)
      }, (err) => {
        // showError(err.message)
        console.log(err.message)
      })
    },
    async addTask(context, task){
      try {
        const res = await firestoreService.collection('tasks').add({ ...task, userId: context.rootState.auth.user.id })
        Notify.create('Task added')
        return res
      }catch(err){
        showError(err.message)
      }
    },
    async updateTask(context, task){
      try {
        await firestoreService.collection('tasks').doc(task.id).update(task.updates)
        Notify.create('Task updated')
      }catch(err){
        showError(err.message)
      }
    },
    async deleteTask(context, id){
      try {
        await firestoreService.collection('tasks').doc(id).delete()
        Notify.create('Task deleted')
      }catch(err){
        showError(err.message)
      }
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
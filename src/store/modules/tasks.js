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
    SET_TASK(state, task){
      Object.assign(state.tasks[task.id], task.updates)
    }
  },
  actions: {
    updateTask(context, task){
      context.commit('SET_TASK', task)
    }
  },
  getters: {
    tasks: (state) => {
      return state.tasks
    }
  }
}
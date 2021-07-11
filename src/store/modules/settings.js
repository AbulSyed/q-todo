export default {
  namespaced: true,
  state: {
    settings: {
      showHourlyTime: false
    }
  },
  mutations: {
    SET_SHOW_HOURLY_TIME(state, value){
      state.settings.showHourlyTime = value
    },
    SET_SETTINGS(state, settings){
      state.settings = settings
    }
  },
  actions: {
    setShowHourlyTime(context, value){
      context.commit('SET_SHOW_HOURLY_TIME', value)
      context.dispatch('saveSettings')
    },
    saveSettings(context){
      localStorage.setItem('settings', JSON.stringify(context.state.settings))
    },
    setSettings(context){
      if(localStorage.getItem('settings')){
        context.commit('SET_SETTINGS', JSON.parse(localStorage.getItem('settings')))
      }
    }
  },
  getters: {
    
  }
}
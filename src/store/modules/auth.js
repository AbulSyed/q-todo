import { authService } from "src/boot/firebase"
import { showError } from 'src/functions/showError'
import { Loading } from 'quasar'

export default {
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    SET_USER(state, user){
      state.user = user
    }
  },
  actions: {
    async getUser(context){
      authService.onAuthStateChanged(user => {
        console.log('User status changed to', user)
        Loading.hide()
        if(user){
          context.commit('SET_USER', { user: user.email, id: user.uid })
          this.$router.push('/')
        }else{
          context.commit('SET_USER', null)
          this.$router.push('/auth')
        }
      })
    },
    async registerUser(context, user){
      Loading.show()
      try {
        const res = await authService.createUserWithEmailAndPassword(user.email, user.password)
        console.log(res)
      }catch(err){
        showError(err.message)
      }
    },
    async loginUser(context, user){
      Loading.show()
      try {
        const res = await authService.signInWithEmailAndPassword(user.email, user.password)
        console.log(res)
      }catch(err){
        showError(err.message)
      }
    },
    async logout(context){
      try {
        await authService.signOut()
      }catch(err){
        console.log(err.message)
      }
    }
  },
  getters: {

  }
}
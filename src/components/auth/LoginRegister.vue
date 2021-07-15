<template>
  <q-form @submit.prevent="handleSubmit">
    <div class="row q-mb-md">
      <q-input
        v-model="email"
        :rules="[val => isValidEmail(val) || 'please use valid email']"
        lazy-rules
        outlined
        class="col"
        label="email" />
    </div>

    <div class="row q-mb-md">
      <q-input
        v-model="password"
        type="password"
        :rules="[val => val.length >= 6 || 'please use min 6 character length']"
        lazy-rules
        outlined
        class="col"
        label="password" />
    </div>
    
    <div class="row">
      <q-space />
      <q-btn
        color="primary"
        :label="tab"
        type="submit"  
      />
    </div>
  </q-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['tab'],
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('auth', ['registerUser', 'loginUser']),
    handleSubmit() {
      if(this.tab == 'login'){
        this.loginUser({
          email: this.email,
          password: this.password
        })
      }else if(this.tab == 'register'){
        this.registerUser({
          email: this.email,
          password: this.password
        })
      }
    },
    isValidEmail(email){
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    }
  },
}
</script>

<style>

</style>
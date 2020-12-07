<template>
    <div class="container LoginForm">
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="usr">Name:</label>
          <input type="text" class="form-control" id="usr" v-model="creds.username" placeholder="name">
        </div>

        <div class="form-group">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control" id="pwd" v-model="creds.password" placeholder="password">
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>


    </div>
</template>

<script>

export default {
  data(){
    return{
      creds:{
        username: undefined,
        password: undefined
      }
    }
  },
  name: 'LoginForm',

  methods:{
    login(){
      //alert(this.username + ' ' + this.password)
      /*this.$store.dispatch('loginAction', this.creds)
      .then(() => this.$router.push('/'))
      .catch(error => console.log(error))*/
      this.$http.post('/api/auth', this.creds)
      .then(() => this.$emit('LoginForm::loginResult', {loginResult: true}),
      (error) => {alert(error)})
    }
  }
}

</script>
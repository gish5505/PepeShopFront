<!--<template>
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
</template>-->

<template>
    <div id="login">
        <h2>Вход в систему</h2>
        <div  class="form-group">
            <input type="text" class="form-control" name="username" v-model="creds.username" placeholder="Username" />
        </div>
        <div  class="form-group">
            <input type="password" class="form-control" name="password" v-model="creds.password" placeholder="Password" />
        </div>
        <div class="row">
            <div class="col-sm-2">
                <button type="button" class="btn btn-primary" v-on:click="login()">Вход</button>
            </div>
            <div id="err" v-if="!isValid" class="col-sm-10">
                <code>Invalid credentials</code>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data(){
    return{
      creds:{
        username: undefined,
        password: undefined
      },
      isValid: true
    }
  },
  
  methods:{
    login(){
      //alert(this.username + ' ' + this.password)
      /*this.$store.dispatch('loginAction', this.creds)
      .then(() => this.$router.push('/'))
      .catch(error => console.log(error))*/
      if(this.creds != "" && this.creds.password != "")
      {      
        this.$http
        .post('/api/auth', this.creds)
        .then(response => this.$emit('authenticated', {authenticated: true, role: response.data.role, user_id: response.data.id}),
        () => this.isValid = false)
      }  
      else
      {
        console.log("A username and password must be present");
        this.isValid = false;
      }    
    }
  }
}

</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
    #err {
        height: 100%;
        vertical-align: middle;
    }
</style>
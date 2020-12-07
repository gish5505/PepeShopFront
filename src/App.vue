<template>
  <div id="app"  class="container-fluid">

<nav class="navbar navbar-dark bg-dark navbar-expand-sm">
  <ul class="navbar-nav">
    <a class="navbar-brand" href="#"></a>
    <img src="@/assets/img/pepe.png" width="50" height="50" alt="">
    <li class="nav-item">
      <router-link class="nav-link" to="/loginForm">Login</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/about">About</router-link><span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/loggedOn">Profile</router-link>
    </li>
  </ul>
  
</nav>

     <router-view v-if="isLoggedIn" /><!-- entry point for page content -->
     <LoginForm v-else @LoginForm::loginResult = "handleLoginResult" />

  </div>
</template>


<script>
import LoginForm from './components/LoginForm'

export default {
  components: {LoginForm},
  data(){
    return{
      userIsLoggedIn: false
    }
  },
  computed:{
    isLoggedIn(){
      return this.userIsLoggedIn
    }
  },
  methods:{
    handleLoginResult({loginResult}) {
      this.userIsLoggedIn = loginResult
    }
  }
}
</script>
<!--
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
-->

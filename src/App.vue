<template>
<div id="app"  class="container-fluid">
  <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
    <ul class="navbar-nav">
      <a class="navbar-brand" href="#"></a>
      <img src="@/assets/img/pepe.png" width="50" height="50" alt="">
      <!--<li class="nav-item">
        <router-link class="nav-link" to="/loginForm">Login</router-link>
      </li>-->
        <li class="nav-item">
          <router-link class="nav-link" v-if="authenticated && role == 'Manager'" to="/products">Каталог</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" v-if="authenticated && role == 'Customer'" to="/orders">Заказы</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" v-if="authenticated && role == 'Admin'" to="/users">Пользователи</router-link>
        </li>            
        <li class="nav-item">
          <router-link class="nav-link .text-right" v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Выход</router-link>
        </li>
    </ul>
    
  </nav>
  <router-view v-on:authenticated="setAuthenticated" /><!-- entry point for page content -->     
</div>
</template>


<script>
export default {
  name: 'App',
  data(){
    return{
      authenticated: false,
      role: undefined,
      user_id: undefined,
      defaultAccount: {
        username: "admin",
        password: "admin",
        role: "admin"
      }
    }
  },
  // mounted() {
  //           if(!this.authenticated) {
  //               this.$router.replace({ name: "login" });
  //           }
  //       },
  methods:{
            setAuthenticated(auth_result) {
              this.authenticated = auth_result.authenticated;
              this.role = auth_result.role;
              this.user_id = auth_result.user_id;

              switch (this.role)
              {
                case "Admin":
                    this.$router.replace({ name: "users" });
                    break;
                case "Manager":
                    this.$router.replace({ name: "products" });
                    break;
                case "Customer":
                    this.$router.replace({ name: "orders" });
                    break;
              }
            },
            logout() {
                this.authenticated = false;
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

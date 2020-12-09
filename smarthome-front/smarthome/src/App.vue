<template>
    <div id="app" class="container-fluid">   

        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <a class="navbar-brand" href="#">Logo</a>
          <!-- Links -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" v-if="authenticated && role != 'Customer'" to="/products">Каталог</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" v-if="authenticated" to="/orders">Заказы</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" v-if="authenticated && role == 'Admin'" to="/users">Пользователи</router-link>
            </li>            
            <li class="nav-item">
              <router-link class="nav-link .text-right" v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Выход</router-link>
            </li>
          </ul>
        </nav>        
        <router-view v-on:authenticated="setAuthenticated" />
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
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
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(auth_result) {
                this.authenticated = auth_result.authenticated;
                this.role = auth_result.role;
                this.userId = auth_result.user_id;

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

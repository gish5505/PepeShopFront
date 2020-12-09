<template>
    <div id="login">
        <h2>Вход в систему</h2>
        <div  class="form-group">
            <input type="text" class="form-control" name="username" v-model="input.username" placeholder="Username" />
        </div>
        <div  class="form-group">
            <input type="password" class="form-control" name="password" v-model="input.password" placeholder="Password" />
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
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                },
                isValid: true
            }
        },
        methods: {
            login() {
                //alert(this.$parent.defaultAccount.password);
                if(this.input.username != "" && this.input.password != "") 
                {
                    this.$http
                        .post("auth", this.input)
                        .then(response => this.$emit("authenticated", { authenticated: true, role: response.data.role, user_id: response.data.id }),
                        () => this.isValid = false)

/*                    
                    if(this.input.username == this.$parent.defaultAccount.username && this.input.password == this.$parent.defaultAccount.password) 
                    {
                        this.$emit("authenticated", { authenticated: true, role: "admin"});                        
                        this.$router.replace({ name: "users" });
                    } 
                    else 
                    if (this.input.username == "manager" && this.input.password == "manager")
                    {
                        this.$emit("authenticated", { authenticated: true, role: "manager"});
                        this.$router.replace({ name: "products" });
                    }
                    else
                    {
                        console.log("The username and / or password is incorrect");
                        this.isValid = false;
                    }
*/                    
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
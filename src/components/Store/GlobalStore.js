import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
currentUserState: {
    status: '',
    //token: localStorage.getItem('userRole'),
    //userName: localStorage.getItem('userName'),
    //userId: localStorage.getItem('userId'),
    //userRole:localStorage.getItem('userRole'),
    token: localStorage.getItem('token') || '',
    user: {}
},

actions:{
    loginAction({commit}, user){
        return new Promise((resolve, reject) => {
            commit('auth_request')
            axios.post('http://localhost:5000/api/auth',user)
            .then(
            response => {
                const token = response.data.role
                const user = response.data.name
            localStorage.setItem('token', token)
            localStorage.setItem('userName',user)
            //localStorage.setItem('userId',userId)
            //localStorage.setItem('userRole',userRole)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(response)})
              .catch(error => {commit('auth_error')
              localStorage.removeItem('userName')
              //localStorage.removeItem('userId')
              //localStorage.removeItem('userRole')
              localStorage.removeItem('token')
              reject(error)
              alert(error)
              this.$router.push('loginFailed')}) //(this.$router.query.redirect || '/') or (this.$router.push('/loggedOn/${userId}'))     
        })
    },
    
    logoutAction({commit}){
        return new Promise((resolve) =>{
            commit('logout')
            localStorage.removeItem('userName')
            //localStorage.removeItem('userId')
            //localStorage.removeItem('userRole')
            localStorage.removeItem('token')
            axios.defaults.headers.common['Authorization'] = null
            resolve()            
        })
    }
},
mutations:{
    auth_request(state){
        state.status = 'loading'
    },

    auth_success(state, token, user){
        state.status = 'success'
        state.userName = user
        //state.userId = userId
        //state.userRole = userRole
        state.token = token
    },

    auth_error(state){
        state.status = 'error'
    },

    logout(state){
        state.status = ''
        state.userName = ''
        state.userId = ''
        state.userRole = ''
        state.token = ''
    }
},
getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status

}
})
<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div>
        Aguarde...
    </div>
</template>
<script>
    export default{
        created() {
           setTimeout(()=>{
               // if user is logged in via auth0
               if (this.$auth.loggedIn) this.$auth.logOut();

               // If JWT login
               if(localStorage.getItem("loggedIn")) {
                   localStorage.removeItem("loggedIn")
               }

               if(localStorage.getItem("tokenExpiry")) {
                   localStorage.removeItem("tokenExpiry")
               }

               if(localStorage.getItem("accessToken")) {
                   localStorage.removeItem("accessToken")
               }

               // Change role on logout. Same value as initialRole of acj.js
               this.$acl.change('admin')
               localStorage.removeItem('userInfo')

               // This is just for demo Purpose. If user clicks on logout -> redirect
               this.$router.push({name:'admin'}).catch(() => {})
           }, 2000)
        }
    }
</script>

<style lang="scss">
    #page-login {
        .social-login-buttons {
            .bg-facebook { background-color: #1551b1 }
            .bg-twitter { background-color: #00aaff }
            .bg-google { background-color: #4285F4 }
            .bg-github { background-color: #333 }
        }
    }
</style>

<template>
 <img  class="logo" alt="Vue logo" src="../assets/life.svg">
<h1>sign up</h1>

<div class="register">
    <input type="text" v-model="name" placeholder="name">
    <input type="text" v-model="email" placeholder="email">
    <input type="password" v-model="passworde" placeholder="password">
    <button v-on:click="sigUp">Sign Up</button>
    <p> <router-link to="/login">login</router-link> </p>
</div>


</template>

<script>
import axios  from 'axios';

export default {
    name : 'signUp',
    data(){
        return {
            name : '',
            email: '',
            passworde: ''
        }
    },
    methods:{
         async sigUp(){
            // console.warn("signup method" , this.name,this.email,this.passworde);
 
            let result =  await axios.post('http://localhost:3000/user' ,  {
                'name':this.name,
                'email': this.email,
                'password':this.passworde     
            });

            console.warn(result);

            if(result.status===201){
                alert("sign up successfully");
                localStorage.setItem("user-info",JSON.stringify(result.data));
                this.$router.push({name : 'HomePage'});
            }


        }
    },
    mounted(){
        // this function is to check the user is login or not
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name : 'HomePage'});
        }
    }
}

</script>

<style>
.logo{
  width: 100px;
  height: 100px;
}

.register input {
    width: 300px;
    padding-left: 25px;
    height: 40px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid red;

}

.register button {
   width : 325px;
   height : 40px;
   border: 1px solid red;
   background : red;
   color :  white;
   cursor :  pointer;
}
</style>
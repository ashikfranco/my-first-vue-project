<template>
 <div class="login-page">
    <div class="login-container">
      <div class="loginForm">
        <h1>Login</h1>
        <div class="register">
          <input type="text" v-model="email" placeholder="email">
          <input type="password" v-model="password" placeholder="password">
          <button @click="login">Login</button>
          <p><router-link to="/sign-up">Sign Up</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
    name : 'loginPage',
    data(){
      return{
        email: "",
        password : ""
      }
    },
    methods : {
     async login(){
        // console.warn(this.email,  this.password);
        let result =  await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`);
        console.log(result);

        if(result.status===200 && result.data.length>0){
                alert("login successfully");
                localStorage.setItem("user-info",JSON.stringify(result.data[0]));
                this.$router.push({name : 'HomePage'});
            }
      }

    },
    mounted(){
      let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name : 'HomePage'});
        }
    }

}



</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.login-container {
  width: 100%;
  max-width: 400px;
  padding: 20px;
}

.loginForm {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 30px;
  text-align: center;
}

.loginForm h1 {
  margin-bottom: 20px;
  color: #333;
}

.register {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
}

button {
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

p {
  margin-top: 15px;
}

a {
  color: #1877f2;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
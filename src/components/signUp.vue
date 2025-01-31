<template>
 <img  class="logo" alt="Vue logo" src="../assets/life.svg">
<h1>sign up</h1>

<div class="register">
    <input type="text" placeholder="name">
    <input type="text" placeholder="email">
    <input type="password" placeholder="password">
    <button>Sign Up</button>
</div>


</template>

<script>
export default {
    name : 'signUp'
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
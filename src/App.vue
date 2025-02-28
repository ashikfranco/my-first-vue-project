<template>
 
  <!-- <signUp/> -->
   <router-view/>

</template>

<script>

// import signUp from './components/signUp.vue';
export default {
  name: 'App',
//  components : {
//   signUp
//  }
  
}
</script>

<style>

 /* global css  can be written here */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*   */
}

body {
  padding: 0px ;
  margin: 0px;
}

.add input {
    width: 300px;
    padding-left: 25px;
    height: 40px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid red;

}

.add button {
   width : 325px;
   height : 40px;
   border: 1px solid red;
   background : red;
   color :  white;
   cursor :  pointer;
}


</style>

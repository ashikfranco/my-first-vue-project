<template>
    <HeaderComponet/>
    
        <h1> hello user, welcome to the Update Page</h1>

    

        <form class="add">
            <input type="text" name="text" v-model="restuarant.name" placeholder="Enter Name">
            <input type="text" name="address" v-model="restuarant.address" placeholder="Enter Address">
            <input type="text" name="contact" v-model="restuarant.contact" placeholder="Enter Contact">
            <button v-on:click="addRestuarant()" type="button">update Restuarant</button>
        </form>
    
   
    
    </template>
    
    <script>
    
    // import header from './header.vue';
    import HeaderComponet from './header.vue'
    import axios from 'axios';
    
    export default {
        name : 'UpdatePage',
        components : {
            HeaderComponet
        },
        data(){
            return {
                restuarant:{
                    name:'',
                    address:'',
                    contact:''
                }
            }
        },
        async mounted(){
            // this function is to check the user is login or not
            let user = localStorage.getItem('user-info');
            if(!user){
                this.$router.push({name : 'signUp'});
            }

            console.warn(this.$route.params.id);
             
                let result = await axios.get(`http://localhost:3000/restuarants/`+ this.$route.params.id);
                console.warn(result.data);

             this.restuarant=result.data;
      
   
            
        }
    }
    </script>
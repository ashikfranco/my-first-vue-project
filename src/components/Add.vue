<template>
    <HeaderComponet/>
    
        <h1> hello user, welcome to the Add Page</h1>

        <form class="add">
            <input type="text" name="text" v-model="restuarant.name" placeholder="Enter Name">
            <input type="text" name="address" v-model="restuarant.address" placeholder="Enter Address">
            <input type="text" name="contact" v-model="restuarant.contact" placeholder="Enter Contact">
            <button v-on:click="addRestuarant()" type="button">Add New Restuarant</button>
        </form>
    
    </template>
    
    <script>
    
    // import header from './header.vue';
    import axios from 'axios';
import HeaderComponet from './header.vue'
    
    export default {
        name : 'AddPage',
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
        methods:{
            async addRestuarant(){
                console.log("Added", this.restuarant);
                const result = await axios.post("http://localhost:3000/restuarants",{
                    "name": this.restuarant.name,
                    "address": this.restuarant.address,
                    "contact" :  this.restuarant.contact
                });

                if(result.status==201){
                    this.$router.push({name:'HomePage'})
                }
                console.warn("result", result);
            }
        },
   
        mounted(){
            // this function is to check the user is login or not
            let user = localStorage.getItem('user-info');
            if(!user){
                this.$router.push({name : 'signUp'});
            }
        }
    }
    

    </script>
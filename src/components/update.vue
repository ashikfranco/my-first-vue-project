<template>
    <HeaderComponet/>
    
        <h1> hello user, welcome to the Update Page</h1>
    
    </template>
    
    <script>
    
    // import header from './header.vue';
    import HeaderComponet from './header.vue'
    
    export default {
        name : 'UpdatePage',
        components : {
            HeaderComponet
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
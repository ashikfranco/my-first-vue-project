<template>
<HeaderComponet/>

    <h1> hello user : {{ name }}, welcome to the Home Page</h1>

    <table>

        <tr v-for="item in restuarants" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.contact }}</td>
          <td>{{ item.address }}</td>
        </tr>
    </table>

</template>

<script>

// import header from './header.vue';
import HeaderComponet from './header.vue'
import axios from 'axios';

export default {
    name : 'HomePage',
    components : {
        HeaderComponet
    },
    data(){
        return {
            name: '',
            restuarants : []
        }
    },
     async mounted(){
        // this function is to check the user is login or not
        let user = localStorage.getItem('user-info');
        console.log(user);
        this.name = JSON.parse(user).username;
        if(!user){
            this.$router.push({name : 'signUp'});
        }

        let result =  await axios.get("http://localhost:3000/restuarants");
        console.log(result);
        this.restuarants= result.data;
    }
}
</script>
<template>

<div class="nav">
    <!-- <a href="#">Home</a>
    <a href="#">Add Restuarant</a>
    <a href="#">Update Restuarant</a>
    <a v-on:click="logOut" href="#">LogOut</a> -->

    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restuarant</router-link>
    <router-link to="/update">Update Restuarant</router-link>
    <a v-on:click="logOut" href="#">LogOut</a>
    

</div>
</template>

<script>
export default {
    name : 'HeaderComponent',
    methods: {
        logOut(){
            localStorage.clear();
            this.$router.push({
                name : "loginPage"
            })
        }
    }
}

</script>

<style>

.nav {
    background-color: black;
    overflow: hidden;
}

.nav a {
    float: left;
    color: azure;
    padding: 16px 14px;
    text-align: end;
    font-size: 18px;
    text-decoration: none;
    margin-right: 5px;
}

.nav a:hover {
    background-color: brown;
    color: white;

}
</style>
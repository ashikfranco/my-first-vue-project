import home from "./components/home.vue";
import signUp from "./components/signUp.vue";
import {createRouter, createWebHistory} from "vue-router";
import login from "./components/login.vue";
import  Add from "./components/Add.vue";
import update from "./components/update.vue";


const routes = [

{
    name : "HomePage",
    component : home,
    path : "/"
},
{
    name : "signUp",
    component : signUp,
    path : "/sign-up"
},
{
    name : "loginPage",
    component : login,
    path : "/login"
},
{
    name : "UpdatePage",
    component : update,
    path : "/update"
},
{
    name : "AddPage",
    component : Add,
    path : "/add"
}



];


const router = createRouter({
    history: createWebHistory(),  // Call createWebHistory function here
    routes
});

export default router;
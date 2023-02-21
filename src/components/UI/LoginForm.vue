<template>
    <h1>beaufity</h1>
    <form @submit.prevent="logIn()" v-if="!validStatus">

        <div class="input--info">
        <label for="name">E-mail</label>
        <input type="text" id="name" v-model="name">
        <label for="password">Password</label>
        <input type="text" id="password" v-model="password">
        </div>
    </form>    
        <div class="form--next">
            <div class="checkbox--tick">
                <input type="checkbox">
                <label for="remember">Remember me</label>
            </div>
            <button @click="proceedNext">Login</button>
        </div>

<basic-info v-if="validStatus" :key="name" :name="name"></basic-info>
</template>

<script>

import BasicInfo from '../partials/BasicInfo.vue';

import { mapGetters } from 'vuex'
export default {
    components: {
        BasicInfo
    },
    data() {
        return {
            name: '',
            password: '',
            validStatus: false
        }
    },
    methods: {
        proceedNext() {
            if (this.loggedStatus != '') {
                if (this.loggedStatus === this.password) {
                    this.validStatus = true
                }
            }
        }
    },
    computed: {
        ...mapGetters(['loggedStatus'])
    }
}
</script>
<style>
/* added vue material icons */

:root{
    --black: #101010;
    --orange: #FDAF01;
    --white: #FFFFFF;
}

*{
   padding: 0;
   margin: 0;
   box-sizing: border-box;

    color: var(--white);
}


html, body{
    min-height: 100%;
}

h1{
   color: var(--white);

   font-size: 2.5rem;
   font-weight: 100;

   /* padding: 0 0 30vw 0; */
}

label{
    color: var(--white);
    
    margin: 10px 0px;

    font-size: 0.75rem;
}

input{
    border-radius:7.5px;
    border: 1px var(--white) solid;

    padding: 10px;
    margin: 5px 0;
}

button{
    border: var(--orange) solid;
   background-color: var(--orange);
   border-radius: 5px;

   padding: 10px;
   margin: 5px 20px;

   color: var(--white);
   
   font-size: 1rem;

}

input[type="checkbox"]{
    appearance: none;
    background-color: transparent;
    margin: 0;
    width: 1.15em;
    height: 1.15em;
    border: 1px solid var(--white);
    border-radius: 5px;

 
}

input[type="checkbox"]:focus{
    outline: max(2px, 0.15em) solid transparent;
    outline-offset: max(2px, 0.15em);
    background-color: #FDAF01;


}

#tick-mark {
    position: absolute;
    display: inline;
    width: 15px;
    height: 15px;
    
}

.checkbox--tick{
    display: flex;
    align-items: center;

    margin: 5px 20px;
    gap: 10px;
}

.input--info{
    display: flex;
    flex-direction: column;

    padding: 30vw 0;

    margin: 5px 35px;
}

form {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.form--next {
    display: flex;
    flex-direction: column;

}

</style>
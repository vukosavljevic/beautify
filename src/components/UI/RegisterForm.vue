<template>
    <h1>beaufity</h1>
    <form class="form--register" @submit.prevent="logIn()">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="nameUser" required>
        <label for="password">Lastname</label>
        <input type="text" id="password" v-model="lastName" required>
        <label for="Email">Email</label>
        <input type="text" id="Email" v-model="email" required>
        <label for="Password">Password</label>
        <input type="text" id="Password" v-model="passwordUser" required>
    </form>
        <div class="form--next">
            <div>
                <input type="checkbox">
                <label for="remember">Remember me</label>
            </div>
           <button >  <router-link to="/login" class="button--bg">Let's start</router-link></button>
        </div>

</template>
<script>
export default {
    data() {
        return {
            nameUser: '',
            lastName: '',
            email: '',
            passwordUser: ''
        }
    },
    methods: {
        logIn() {
            this.$store.commit('registerUser', this.passwordUser)
            console.log('sent data')
        }
    }
}
</script>
<style>

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

.form--register{
    
    display: flex;
    flex-direction: column;
    margin: 0px 35px;

    padding: 50px 0;
}



.form--next > div{
    display: flex;
    align-items: center;

    padding: 10px;
    margin: 5px 20px;

    gap: 5px;
}

.button--bg{
    background-color: var(--orange);
}

</style>
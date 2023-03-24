<template>
    <h1>beautify</h1>
    <form class="form--register" @submit="logIn()">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="nameUser" required>
        <label for="password">Lastname</label>
        <input type="text" id="password" v-model="lastName" required>
        <label for="Email">Email</label>
        <input type="text" id="Email" v-model="email" required>
        <label for="Password">Password</label>
        <input type="password" id="Password" v-model="passwordUser" required>
        <div class="checkbox--wrapper">
            <div>
                <input type="checkbox" value="yes">
                <label for="remember" class="remember">I accept terms and conditions of beautify and I accept to receive
                    newsletter</label>
            </div>
            <div class="text-align">
                <router-link to="/login" class="button--bg" @click="logIn()">Let's start</router-link>
            </div>
        </div>

    </form>
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
:root {
    --black: #101010;
    --orange: #FDAF01;
    --white: #FFFFFF;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    color: var(--white);
}
.text-align{
    text-align: center;
    margin-top: 2rem;
}
.form--register {

    display: flex;
    flex-direction: column;
    margin: 0px 35px;

    padding: 50px 0;
}



.form--next>div {
    display: flex;

    padding: 10px;
    margin: 5px 20px;

    gap: 5px;
}

.button--bg {
    background-color: var(--orange);
    text-align: center;
    padding: 1rem 3rem;
    border-radius: 10px;
}

.checkbox--wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

}

.remember {
    margin-left: 1rem;
}
</style>
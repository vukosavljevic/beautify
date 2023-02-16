<template>
    <h1>beaufity</h1>
    <form @submit.prevent="logIn()">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="nameUser" required>
        <label for="password">Lastname</label>
        <input type="text" id="password" v-model="lastName" required>
        <label for="Email">Email</label>
        <input type="text" id="Email" v-model="email" required>
        <label for="Password">Password</label>
        <input type="text" id="Password" v-model="passwordUser" required>
        <div class="form--next">
            <div>
                <input type="checkbox">
                <label for="remember">Remember me</label>
            </div>
           <button> <router-link to="/login">Let's start</router-link></button>
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
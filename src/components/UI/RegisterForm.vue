<template>
    <h1>beautify</h1>
    <form @submit.prevent="logIn()">
        
        <div class="beautify--register">
            <div class="beautify--input">            
                <label for="name">First Name</label>
                <input type="text" id="name" v-model="nameUser" required>
            </div>
            <div class="beautify--input">
                <label for="password">Last Name</label>
                <input type="text" id="password" v-model="lastName" required>
            </div>

            <div class="beautify--input">
                <label for="Email">Email</label>
                <input type="text" id="Email" v-model="email" required>
            </div>

            <div class="beautify--input">
                <label for="Password">Password</label>
                <input type="text" id="Password" v-model="passwordUser" required>
            </div>

        </div>
            <div class="form--next">
                <div class="beautify--terms">
                    <input type="checkbox">
                    <label for="remember">I accept the terms and conditions</label>
                </div>
                    <button> <router-link to="/login">Let's start!</router-link></button>
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
<style scoped>

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

.beautify--register{
    
    display: flex;
    flex-direction: column;

    padding: 20px 30px 0px 30px;
}


label{
    text-align: left;

    font-weight: 100;
    font-size: small;

}



button{


    border: var(--orange) solid;
   background-color: var(--orange);
   border-radius: 5px;

   padding: 10px;

   font-size: 1rem;
   font-weight: 700;

    width: 100%;
}

a{
    background-color: var(--orange);
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

input{
    border-radius:7.5px;
    border: 1px var(--white) solid;

    padding: 10px;
    margin: 5px 0px ;
}

.beautify--terms{
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;
    
    font-size: small;
    gap: 15px;
    
    padding: 50px 0;
    margin: 5px 50px;
}

.beautify--input{
    display: flex;
    flex-direction: column;

    padding: 5px 0;

    
}

.form--next{
    padding: 0px 10px;
}
</style>
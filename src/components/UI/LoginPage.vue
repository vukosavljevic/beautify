<template>
   <div>
        <h1>beutify</h1>
   </div>
   <div class="beaufiy--login">
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Sign up</router-link>
   </div>
</template>

<style scoped>

/* 375px x 667px: rezolucija ekrana */
:root{
    --black: #101010;
    --orange: #FDAF01;
    --white: #FFFFFF;
}

*{
   padding: 0;
   margin: 0;
   box-sizing: border-box;
}


h1{
   color: var(--white);

   font-size: 5rem;


   padding: 40vw 0;
}
.beaufiy--login{
   display: flex;
   flex-direction: column;
}

a{
   border: var(--orange) solid;
   background-color: var(--orange);
   border-radius: 5px;

   padding: 10px;
   margin: 5px 20px;

   color: var(--white);

   font-size: 1rem;

}
</style>
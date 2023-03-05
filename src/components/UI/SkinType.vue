
<template>
    <h1>Beautify</h1>

    <div class="skintype--wrapper">
        <h1 class="skintype--header">Choose your skin type</h1>

        <div class="skintype--checkobx">

            <div class="skintype--input">
                <input type="checkbox" aria-required>
                <label>Oily</label>
            </div>

            <div class="skintype--input">
                <input type="checkbox" aria-required>
                <label>Dry</label>
            </div>

            <div class="skintype--input">
                <input type="checkbox" aria-required>
                <label>Sensitive</label>
            </div>

            <div class="skintype--input">
                <input type="checkbox" aria-required>
                <label>Combination</label>
            </div>
        </div>

        <button><router-link to="/products">Find me a solution</router-link></button>
    </div>
</template>

<style scoped>

.skintype--wrapper{
    text-align: left;
    padding: 0 10px;
}

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

input{
    border-radius:7.5px;
    border: 1px var(--white) solid;

    padding: 10px;
    margin: 5px 0px;

    font-weight: 100;
}

a{
    background-color: var(--orange);
}

button{
    border: var(--orange) solid;
   background-color: var(--orange);
   border-radius: 5px;


   padding: 10px;

   color: var(--white);
   
   font-size: 1rem;

   width: 100%;

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

.skintype--wrapper{
    text-align: left;
}

.skintype--checkobx{
    display: flex;
    flex-direction: column;

    padding: 25px 0 75px 0;
}

.skintype--input{
    display: flex;
    flex-direction: row;

    font-weight: 600;

    gap: 15px;
    padding: 10px 0;
}

.skintype--header{
    font-size: 1.25rem;

    padding-top: 50px;
}
</style>

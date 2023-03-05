<template>
    <div class="productpage--wrapper">
        <h2>We have found perfect solution(s) for you!</h2>
        <div class="product--item">
            <img src="../../assets/first.png" alt="">
                <label>Cetaphil Gentle Skin Cleanser</label>

                <input type="checkbox" aria-required>

        </div>
        <div class="product--item">
            <img src="../../assets/second.jpg" alt="">
                <label>CeraVe Hydrating Facial Cleanser</label>
                <input type="checkbox" aria-required>

        </div>
        <div class="product--item">
            <img src="../../assets/third.jpg" alt="">


                <label>Alaffia Everyday Coconut Face Toner</label>
                <input type="checkbox" aria-required>

        </div>
        <div class="product--item">
            <img src="../../assets/forth.jpg" alt="">


                <label>Cocokind Rosewater Facial Toner</label>
                <input type="checkbox" aria-required>

        </div>
        <button><router-link to="rateus">Go to seller</router-link></button>
</div>
</template>

<style scoped>
:root{
    --black: #101010;
    --orange: #FDAF01;
    --white: #FFFFFF;
}

*,*::before{
    color: var(--white);
}

a{
    background-color: var(--orange);
    color: var(--white);
}

button{
    width: 100%;

    border: var(--orange) solid;
   background-color: var(--orange);
   border-radius: 5px;

   padding: 10px;
   margin-top: 5px;

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

.productpage--wrapper{
    text-align: left;

    padding: 0 10px;
}



.product--item{
    display: flex;

    /* gap: 5vw; */
    align-items: center;
    justify-items: center;
    
    justify-content: space-between;
    font-size: 0.65em;

    padding: 7.5px 0;
}
.product--item label{
    text-align: left;
}


img {
    width: 75px;
    height: 75px;

    background-color: var(--white);

    border-radius: 10px;
}
</style>
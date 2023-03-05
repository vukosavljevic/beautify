<template>
    <h1>beautify</h1>
    <div class="rateus--wrapper">
        <h2 class="rateus--header">Rate us!</h2>
        <div class="rating">
            <button class="button--rating">1</button>
            <button class="button--rating">2</button>
            <button class="button--rating">3</button>
            <button class="button--rating">4</button>
            <button class="button--rating">5</button>
        </div>
        <button>Rate us</button>
        <div class="affiliate--div">
            <h2 class="affiliate--header">Our affiliate program</h2>
            <p>Our affiliate(adviser) program gives you the opportunity to earn extra money, the job is to write posts on
                our
                platform (adviser) about the advice you received that helped. In return, the Beautify platform pays you $4
                per
                post, along with the tips you must write the name of the product that helped you.</p>
                <button>Become an advisor</button>
        </div>
    </div>
</template>

<style scoped>

:root{
    --black: #101010;
    --orange: #FDAF01;
    --white: #FFFFFF;
}

*,*::after{
    box-sizing: border-box;

    color: var(--white);
}
.rateus--wrapper {
    text-align: left;
}
.button--rating{
    height: 35px;
    width: 35px;
    display: flex;
    align-items: center;
    border-radius:50%;
    background-color: transparent;
}
.rating{
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0 0 5vw 0;
    gap: 25px;
}
button{
    width: 100%;

    border: var(--orange) solid;
   background-color: var(--orange);
   border-radius: 5px;

   padding: 10px;

   color: var(--white);
   
   font-size: 1rem;


}
.affiliate--div{
    padding: 25px 0 0 0;
}

.rateus--header{
    padding: 10px 0;
}

.affiliate--header, .rateus--header{
    padding: 0 2.5vw;
} 

p{
    line-height: 1.25rem;

    margin: 0 0 30px 0;
}

</style>
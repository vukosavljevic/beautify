<template>
    <h1>beautify</h1>
    <div class="rateus--wrapper">
        <h2>Rate us!</h2>
        <div class="rating">
            <button class="button--rating">1</button>
            <button class="button--rating">2</button>
            <button class="button--rating">3</button>
            <button class="button--rating">4</button>
            <button class="button--rating">5</button>
        </div>

        <button class="button">Rate us</button>
        <div class="affiliate--div">
            <h2>Our affiliate program</h2>
            <p>Our affiliate (adviser) program gives you the opportunity to earn extra money, the job is to write posts on
                our
                platform (adviser) about the advice you received that helped. In return, the Beautify platform pays you $4
                per
                post, along with the tips you must write the name of the product that helped you.</p>
            </div>
                <button>Become an advisor</button>
    </div>
</template>

<style scoped>
.rateus--wrapper {
    text-align: left;
    padding: 0 5vw;
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
    padding: 5vw 0;
    gap: 25px;
}

button{
    width: 100%;
}

.affiliate--div{
    padding: 50px 0 75px 0;
}

h2{
    padding: 10px;
}

p{
    line-height: 1.25rem;
}

</style>
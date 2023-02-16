<template>
    <div>
        <h2>We have found perfect solution(s) for you!</h2>
        <div class="product--item">
            <img src="../../assets/first.png" alt="">
            <h4>Cetaphil Gentle Skin Cleanser</h4>
        </div>
        <div class="product--item">
            <img src="../../assets/second.jpg" alt="">
            <h4>CeraVe Hydrating Facial Cleanser</h4>
        </div>
        <div class="product--item">
            <img src="../../assets/third.jpg" alt="">
            <h4>Alaffia Everyday Coconut Face Toner</h4>
        </div>
        <div class="product--item">
            <img src="../../assets/forth.jpg" alt="">
            <h4>Cocokind Rosewater Facial Toner</h4>
        </div>
        <router-link to="rateus">Go to seller</router-link>
</div>
</template>

<style scoped>
.product--item{
    display: flex;
    align-content: center;
    justify-content: center;
}
.product--item h4{
    text-align: left;
}
img {
    width: 150px;
    height: 120px;
}
</style>
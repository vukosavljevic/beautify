<template>
    <div class="item--page">
        <h2>We have found perfect solution(s) for you!</h2>
        <a href="https://www.cerave.com/skincare/cleansers/hydrating-facial-cleanser">
            <div class="product--item">
                <img src="../../assets/first.png" alt="">
                <div class="product--description">
                    <h4>CeraVe Hydrating Facial Cleanser</h4>
                    <p>A cleanser can remove dirt, makeup and other debris, but a hydrating cleanser, like CeraVe Hydrating
                        Facial Cleanser.</p>
                </div>
            </div>
        </a>
        <a href="https://www.cetaphil.com/us/cleansers/gentle-skin-cleanser/302990110227.html">
            <div class="product--item">
                <img src="../../assets/2532669.png" alt="">
                <div class="product--description">
                    <h4>Cetaphil Gentle Skin Cleanser</h4>
                    <p>This creamy formula is clinically proven to provide continuous hydration to protect against dryness.
                    </p>
                </div>
            </div>
        </a>
        <a href="">

        </a>
        <a href="https://hr.iherb.com/pr/alaffia-everyday-coconut-face-toner-purely-coconut-12-fl-oz-354-ml/50622">
            <div class="product--item">
                <img src="../../assets/third-removebg-preview.png" alt="">
                <div class="product--description">
                    <h4>Alaffia Everyday Coconut Face Toner</h4>
                    <p>Our EveryDay Coconut Face Toner is made with coconut water, neem and papaya to balance and hydrate
                        skin while neutralizing surface impurities.</p>
                </div>
            </div>
        </a>
        <a href="https://www.cocokind.com/products/rosewater-toner">
            <div class="product--item">
                <img src="../../assets/forth-removebg-preview.png" alt="">
                <div class="product--description">
                    <h4>Cocokind Rosewater Facial Toner</h4>
                    <p>spritz rosewater onto a cotton pad and then swipe all over face or spritz directly onto skin.</p>
                </div>
            </div>
        </a>
        <router-link to="rateus" class="rateus">Go to seller</router-link>
    </div>
</template>

<style scoped>
.item--page {
    margin-bottom: 2rem;
}

.product--description p {
    font-size: 10px;
    text-align: left;
}

.product--item {
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 2rem;
    margin: 2rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.product--item h4 {
    text-align: left;
}

img {
    width: 150px;
    height: 120px;
}

.rateus {
    padding: 1rem 2rem;
    background-color: blueviolet;
    margin-bottom: 3rem;
}

.product--description {}
</style>
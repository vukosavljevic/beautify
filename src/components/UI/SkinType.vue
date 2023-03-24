<template>
    <h1>Choose your skin type</h1>
    <div class="type--skin">

        <div class="checkbox--new">
            <label>Oily</label>
            <input type="checkbox" required />
        </div>


        <div class="checkbox--new">
            <label>Dry</label>
            <input type="checkbox" required />
        </div>

        <div class="checkbox--new">
            <label>Sensitive</label>
            <input type="checkbox">
        </div>


        <div class="checkbox--new">
            <label>Combination</label>
            <input type="checkbox">
        </div>

        <div class="checkbox--new">
            <label>Normal</label>
            <input type="checkbox">
        </div>
    </div>
    <router-link to="/products">Find me a solution</router-link>
</template>

<style scoped>
.type--skin{
    padding: 5rem;
}
.type--skin a {
    margin-top: 4rem;
}
.checkbox--new {
    display: flex;
    margin-top: 1rem;
    align-content: center;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
}

.checkbox--new input {
    margin-right: 1rem;
}
</style>


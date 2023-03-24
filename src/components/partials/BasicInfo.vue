<template>
    <div class="heading">
        <h3>Welcome,{{ name }}!</h3>
    </div>
    <div class="gender">
        <div class="date">
            <p>Date of birth</p>
            <input type="date" required>
        </div>
        <div class="checkbox--new">
            <p>Gender</p>
        </div>

        <div class="checkbox--new">
            <label>Male</label>
            <input type="checkbox" required />
        </div>


        <div class="checkbox--new">
            <label>Female</label>
            <input type="checkbox" required />
        </div>

        <div class="checkbox--new">
            <label>Rather not say</label>
            <input type="checkbox">
        </div>

        <router-link to="/skintype" class="button--bg">Save and continue</router-link>
    </div>
</template>

<script>
export default {
    props: ['name']
}
</script>

<style scoped>
h3 {
    text-align: center;
    margin: 2rem 0 0 0;
}

.heading {
    margin-left: 1rem;
}
.date input{
    text-align: center;
width: 100%;
}
.gender {
    display: flex;
    flex-direction: column;
    padding: 2rem 5rem 5rem 5rem;
}

.gender a {
    margin-top: 8rem;
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
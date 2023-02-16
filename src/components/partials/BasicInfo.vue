<template>
    <div>
        <p>Welcome,{{ name }}</p>
        <p>Date of birth</p>
        <input type="date" required>
        <p>Gender</p>
        <input type="checkbox" required>
        <label>Male</label>
        <input type="checkbox" required>
        <label>Female</label>
        <input type="checkbox" required>
        <label>Rather not say</label>
        <router-link to="/skintype">Save and continue</router-link>
    </div>
</template>

<script>
export default {
    props : ['name']
}
</script>
<template>
    <h1>beaufity</h1>
    <form @submit.prevent="logIn()" v-if="!validStatus">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name">
        <label for="password">Password</label>
        <input type="text" id="password" v-model="password">
        <div class="form--next">
            <div>
                <input type="checkbox">
                <label for="remember">Remember me</label>
            </div>
            <button @click="proceedNext">Log in</button>
        </div>
    </form>
<basic-info v-if="validStatus" :key="name" :name="name"></basic-info>
</template>

<script>
import BasicInfo from '../partials/BasicInfo.vue';

import { mapGetters } from 'vuex'
export default {
    components: {
        BasicInfo
    },
    data() {
        return {
            name: '',
            password: '',
            validStatus: false
        }
    },
    methods: {
        proceedNext() {
            if (this.loggedStatus != '') {
                if (this.loggedStatus === this.password) {
                    this.validStatus = true
                }
            }
        }
    },
    computed: {
        ...mapGetters(['loggedStatus'])
    }
}
</script>
<style>
form {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.form--next {
    display: flex;
    flex-direction: column;
}
</style>
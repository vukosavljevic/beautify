import { createRouter, createWebHistory } from "vue-router";

import LoginPage from './components/UI/LoginPage.vue';
import LoginForm from './components/UI/LoginForm.vue';
import RegisterForm from './components/UI/RegisterForm.vue';
import SkinType from './components/UI/SkinType.vue';
import ProductsPage from './components/UI/ProductsPage.vue';
import RateUs from './components/UI/RateUs.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: LoginPage },
        { path: '/login', component: LoginForm },
        { path: '/register', component: RegisterForm },
        { path: '/skintype', component: SkinType },
        { path: '/products', component: ProductsPage },
        { path: '/rateus', component: RateUs }
    ]
})

export default router;
<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Modal from './components/Modal.vue';
import { store } from './store/store';

</script>

<template>
    <div class="page-wrapper">
        <Header @toggleModal="store.toggleModal(true)"></Header>
        <main class="main">
            <router-view></router-view>
        </main>
        <Modal :isOpen="store.isOpen" @toggle-modal="store.toggleModal(false)"></Modal>
        <Footer></Footer>
    </div>
</template>

<style scoped>
.main {
    flex-grow: 1;
    background: linear-gradient(180deg, rgba(245, 245, 245, 0) 1.04%, #f5f5f5 100%);
}
</style>

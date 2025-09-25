<template>
    <header class="header">
        <div class="container">
            <div class="header-box">
                <router-link to="/" class="logo header-logo">
                    <img class="logo-img" src="@/components/icons/logo/Logo.svg" alt="Logo">
                </router-link>
                <nav class="header-controls">
                    <button class="button button-primary">
                        <img src="@/components/icons/control/iconUser.svg">
                        Вход
                    </button>
                    <button class="button button-outline" @click="openModal">
                        <img src="@/components/icons/control/iconBasket.svg">
                        Корзина
                    </button>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup>
const emit = defineEmits(['toggleModal'])
const openModal = () => emit('toggleModal')
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    min-height: 124px;
}

.header-box {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}

.header-controls {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
}
</style>

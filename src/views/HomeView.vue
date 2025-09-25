<template>

    <section class="banner">
        <div class="container">
            <div class="banner-item">
                <h1 class="banner-item--title">Онлайн-сервис <br> доставки еды на дом</h1>
                <p class="banner-item--subtitle">
                    Блюда из любимого ресторана привезет курьер в перчатках, маскеи с антисептиком
                </p>
            </div>
        </div>
    </section>

    <section class="products">
        <div class="container">
            <div class="product-header">
                <h2 class="product-header--title">
                    Рестораны
                </h2>
                <form action="#" name="search" class="product-header--search-wrapper">
                    <label>
                        <img src="@/components/icons/search.svg" alt="search">
                        <input type="text" name="search" placeholder="Поиск блюд и ресторанов"
                            class="product-header--search" />
                    </label>
                </form>
            </div>
            <div class="products-wrapper">

                <div class="product-card" v-for="rest in store.rests" :key="rest.id">
                    <div class="product-card__image">
                        <img :src="getUrl(rest.image)" alt="">
                    </div>
                    <div class="product-card__description">
                        <div class="product-card__description-row">
                            <router-link :to="`/rest?${rest.id}`" class="card-link">
                                <h4 class="product-card__description--title">
                                    {{ rest.title }}
                                </h4>
                            </router-link>
                            <div class="product-card__description--badge">
                                <span>{{ rest.time }} мин</span>
                            </div>
                        </div>
                        <div class="product-card__description-row">
                            <div class="product-card__description-info">
                                <div class="product-card__description-info--rating">
                                    <img src="@/components/icons/star.svg" alt="star">
                                    <span>{{ rest.rating }}</span>
                                </div>
                                <div class="product-card__description-info--price">
                                    <span>от {{ rest.price }} &#8381;</span>
                                </div>
                                <div class="product-card__description-info--group">
                                    <span>{{ rest.type }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { store } from '@/store/store'

const getUrl = (name) =>
{
    return new URL(`../assets/rests/${name}`, import.meta.url)
}
</script>

<style scope></style>
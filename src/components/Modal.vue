<template>
    <div class="card-modal__overlay" :class="{ open: isOpen }" @click.self="closeModal()">
        <div class="card-modal">
            <div class="card-modal__header">
                <h2 class="card-modal__header--title">
                    Корзина
                </h2>
                <img src="@/components/icons/exit.svg" alt="close" class="card-modal__header--close"
                    @click="closeModal()">
            </div>
            <div class="card-modal__body">
                <div class="card-item">
                    <p class="card-item__title">
                        Ролл угорь стандарт
                    </p>
                    <div class="card-item__controls">
                        <div class="card-item__controls--price">
                            <span>250 &#8381;</span>
                        </div>
                        <button class="button button-outline">
                            -
                        </button>
                        <div class="card-item__controls--count">
                            <span>1</span>
                        </div>
                        <button class="button button-outline">
                            +
                        </button>
                    </div>
                </div>

                <div class="card-item">
                    <p class="card-item__title">
                        Ролл угорь стандарт
                    </p>
                    <div class="card-item__controls">
                        <div class="card-item__controls--price">
                            <span>250 &#8381;</span>
                        </div>
                        <button class="button button-outline">
                            -
                        </button>
                        <div class="card-item__controls--count">
                            <span>1</span>
                        </div>
                        <button class="button button-outline">
                            +
                        </button>
                    </div>
                </div>

                <div class="card-item">
                    <p class="card-item__title">
                        Ролл угорь стандарт
                    </p>
                    <div class="card-item__controls">
                        <div class="card-item__controls--price">
                            <span>250 &#8381;</span>
                        </div>
                        <button class="button button-outline">
                            -
                        </button>
                        <div class="card-item__controls--count">
                            <span>1</span>
                        </div>
                        <button class="button button-outline">
                            +
                        </button>
                    </div>
                </div>

                <div class="card-item">
                    <p class="card-item__title">
                        Ролл угорь стандарт
                    </p>
                    <div class="card-item__controls">
                        <div class="card-item__controls--price">
                            <span>250 &#8381;</span>
                        </div>
                        <button class="button button-outline">
                            -
                        </button>
                        <div class="card-item__controls--count">
                            <span>1</span>
                        </div>
                        <button class="button button-outline">
                            +
                        </button>
                    </div>
                </div>

                <div class="card-item">
                    <p class="card-item__title">
                        Ролл угорь стандарт
                    </p>
                    <div class="card-item__controls">
                        <div class="card-item__controls--price">
                            <span>250 &#8381;</span>
                        </div>
                        <button class="button button-outline">
                            -
                        </button>
                        <div class="card-item__controls--count">
                            <span>1</span>
                        </div>
                        <button class="button button-outline">
                            +
                        </button>
                    </div>
                </div>

            </div>
            <div class="card-modal__footer">
                <div class="card-modal__footer--price">
                    <span>1250 &#8381;</span>
                </div>
                <div class="card-modal__footer--controls">
                    <button class="button button-primary">
                        Оформить заказ
                    </button>
                    <button class="button button-outline" @click="closeModal()">
                        Отмена
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { isOpen } = defineProps({ isOpen: Boolean });
const emit = defineEmits(['toggleModal']);
const closeModal = () => emit('toggleModal');

</script>

<style scoped>
.card-modal__overlay {
    display: none;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;

    background: rgba(0, 0, 0, 0.40);


    align-items: center;
    justify-content: center;
}

.card-modal__overlay.open {
    display: flex;
}

.card-modal {
    width: 100%;
    max-width: 780px;
    padding: 40px 45px;
    border-radius: 5px;
    background-color: #fff;
}

.card-modal__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 45px;
}

.card-modal__header--title {
    font-weight: 700;
    font-size: 36px;
}

.card-modal__header--close {
    cursor: pointer;
}

.card-modal__body {
    padding-right: 15px;

}

.card-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #D9D9D9;
}

.card-item__title {
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
}

.card-item__controls {
    display: flex;
    align-items: center;
}

.card-item__controls button {
    border-color: #40a9ff;
    color: #40a9ff;
}

.card-item__controls--price {
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    margin-right: 45px;
}

.card-item__controls--count {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
    margin-left: 15px;
}

.card-modal__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 50px;
}

.card-modal__footer--price {
    border-radius: 5px;
    padding: 15px 20px;
    color: #fafafa;
    background-color: #000;
    font-weight: 700;
    font-size: 20px;
}

.card-modal__footer--controls {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
}
</style>
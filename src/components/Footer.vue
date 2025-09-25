<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-box">
                <router-link to="/" class="logo footer-logo">
                    <img class="logo-img" src="@/components/icons/logo/Logo.svg" alt="Logo">
                </router-link>
                <nav class="footer-nav">
                    <router-link class="footer-nav__reset" to="/">Ресторанам</router-link>
                    <router-link class="footer-nav__reset" to="/">Курьерам</router-link>
                    <router-link class="footer-nav__reset" to="/">Пресс-центр</router-link>
                    <router-link class="footer-nav__reset" to="/">Контакты</router-link>
                </nav>
                <nav class="footer-social">
                    <router-link to="/"><img src="@/components/icons/social/Instagram.svg"
                            alt="Instagram"></router-link>
                    <router-link to="/"><img src="@/components/icons/social/Facebook.svg" alt="Facebook"></router-link>
                    <router-link to="/"><img src="@/components/icons/social/VK.svg" alt="Vk"></router-link>
                </nav>
            </div>
        </div>
    </footer>
</template>

<script>
</script>

<style scoped>
.footer {
    display: flex;
    align-items: center;
    min-height: 156px;
    padding: 60px 0;
    ;
}

.footer-box {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 36px;
}

.footer-nav {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    gap: 15px;

    font-size: 18px;
    font-weight: 400;
}

.footer-nav__reset,
.footer-nav__reset:link,
.footer-nav__reset:visited {
    text-decoration: none;
    color: #595959;
}

.footer-nav__reset:hover {
    text-decoration: none;
    color: #595959;
}

.footer-social {
    display: flex;
    flex-wrap: wrap;
    gap: 21px;
}
</style>
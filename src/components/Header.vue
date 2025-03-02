<template>
    <div class="header">
        <div v-if="open" class="opened_menu">
            <Links />
            <div class="icons">
                        <img src="./images/basket.svg" alt="">
                        <img src="./images/fav.svg" alt="">
                    </div>
                    <div class="item">
                        <img src="./images/login.svg" alt="">
                        <p>Вход / регистрация</p>
                    </div>
        </div>
        <div class="padding">
            <div class="container">
                <div class="block">
                    <router-link to="/"><img src="./images/logo.svg" alt=""></router-link>
                    <div class="menu" @click="openMenu">Меню</div>
                    <div class="navigation">
                        <Links />
                    </div>
                </div>
                <div class="block">
                    <div class="item">
                        <img src="./images/location.svg" alt="">
                        <select class="city">
                            <option value="Новосибирск">Новосибирск</option>
                        </select>
                    </div>
                    <div class="icons show">
                        <img src="./images/basket.svg" alt="">
                        <img src="./images/fav.svg" alt="">
                    </div>
                    <div class="item show">
                        <img src="./images/login.svg" alt="">
                        <p>Вход / регистрация</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Links from './Links.vue';

export default {
    components: {
        Links
    },
    data() {
        return {
            open: false
        }
    },
    methods: {
        openMenu() {
            this.open = !this.open
        }
    }
}

</script>


<style>

.opened_menu {
    background-color: white;
    color: #65698C;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    position: absolute;
    top: 60px;
    z-index: 100;
    width: 100%;
    padding: 20px;
}

.menu {
    display: none;
}

.header {
    background-color: #EEEEEE;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    border-bottom: 1px solid #65698C;
    display: flex;
    flex-wrap: wrap;
    
    justify-content: space-between;
    height: 70px;
    align-items: center;
    font-size: 14px;
    color: #65698C;
}

.block {
    display: flex;
    gap: 50px;
    align-items: center;
}

.navigation {
    display: flex;
    gap: 28px;
    align-items: center;

}

.item {
    display: flex;
    gap: 10px;
    align-items: center;

}

.icons {
    display: flex;
    gap: 30px;
    align-items: center;

}

.city {
    display: flex;

    border: none;
    color: inherit;
    background-color: initial;
    padding-right: 5px;
}

@media screen and (max-width: 1600px) {
    .container {
        justify-content: center;
        gap: 20px;
        padding: 20px;
        height: fit-content;
    }
}

@media screen and (max-width: 600px) {
    .navigation {
        display: none;
    }

    .menu {
        display: block;
    }

    .show {
        display: none;
    }
}



</style>
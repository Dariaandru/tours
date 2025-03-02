<template>
    <div class="footer">
        <div class="padding">
            <div class="footer-container">
                <div class="footer-logo-block">
                    <img src="./images/logo.svg" height="90" alt="">
                    <p>2025/ travelTours. Все права защищены</p>
                </div>
                <div class="footer-navigation">
                    <div class="footer-item">
                        <p>Компания</p>
                        <div class="footer-links">
                            <Links />
                        </div>
                    </div>
                    <div class="footer-item">
                        <p>Популярное</p>
                        <div class="footer-links">
                            <router-link v-for="item in countries" :key="item" to="/">
                                <p @click="itemClick(item)">{{ item.name }}</p>
                            </router-link>
                        </div>
                    </div>
                    <div class="footer-item">
                        <div class="footer-block">
                            <p>Подписка</p>
                            <div class="feeld">
                                <input type="text" placeholder="E-mail">
                                <img src="./images/shift.svg" alt="">
                            </div>
                        </div>
                        <div class="footer-block">
                            <div class="socials">
                                <img src="./images/socials/1.svg" alt="">
                                <img src="./images/socials/2.svg" alt="">
                                <img src="./images/socials/3.svg" alt="">
                                <img src="./images/socials/4.svg" alt="">
                            </div>
                            <div class="phone">
                                <img src="./images/phone.svg" alt="">
                                <p>8 (953) 872 66 16</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Links from './Links.vue';
import countries from '@/seeders/links'

export default {
    components: {
        Links
    },
    data() {
        return {
            countries: countries
        }
    },
    methods: {
        itemClick(item) {
            this.countries.map(el => {
                el.active = false
            })
            item.active = true
            console.log(countries)
        }
    }
}

</script>

<style>


.footer {
    background-color: #EEEEEE;
}

.footer-container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    justify-content: space-between;
    color: #65698C;

}

.footer-logo-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 14px;
}

.footer-navigation {
    display: flex;
    flex-wrap: wrap;
    gap: 150px;

}

.footer-item {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 20px;
}

.footer-links {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 12px;

}

.footer-block {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 20px;
}

.feeld {
    width: 165px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-inline: 10px;
    border-radius: 20px;
    border: 1px solid #65698C;
    input {
        width: 100%;
        border: none;
        background-color: inherit;
    }
}

.socials {
    display: flex;
    gap: 15px;
}

.phone {
    display: flex;
    gap: 10px;
    font-size: 14px;
}

.padding {
    padding-inline: 20px;
}

@media screen and (max-width: 1000px) {
    .footer-navigation {
        gap: 50px;
    }
}

@media screen and (max-width: 600px) {
    .footer-logo-block {
        gap: 20px;
        justify-content: initial;
    }

    .footer-container {
        flex-wrap: wrap;
        gap: 20px;
    }

    .footer-navigation {
        gap: 20px;
    }
    
}


</style>

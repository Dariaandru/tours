<template >

    <OrderForm :showForm="showForm" @close="CloseForm" />
    <div class="home-blocks " :class="{blur: showForm}">

        <div class="home-title-img">
            <img src="@/components/images/home/title.png" alt="">
            <div class="home-title">
                <div class="home-text">
                    <p class="big-font yellow">Летние туры из России</p>
                    <p class="font36 white">Вылеты из Москвы, Санкт-Перербурга и еще из 16 городов</p>
                </div>
                <router-link to="/travels">
                    <div class="button font32 dark">Выбрать тур</div>
                </router-link>
            </div>
        </div>
        <div class="home-form">
            <div class="home-form-text">
                <p class="font36 dark">Исполним мечту об идеальном отдыхе</p>
                <p class="font20">Заполните форму и получите персональный подбор путешествия</p>
            </div>
            <div class="home-form-img">
                <img src="@/components/images/home/form.png" alt="">
                <div class="img-text">
                    <p class="font36 white">Забронируйте в один клик</p>
                    <div class="button" @click="orderForm">
                        <p class="font24 dark">Заполнить форму</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="popular">
            <p class="font48">Галерея изображений</p>
            <div class="popular-block">
                <p class="font36 dark">Популярные страны</p>
                <div class="popular-items">
                    <div @click="itemClick(item)" class="country" :class="{active: item.active}" v-for="item in countries" :key="item">
                        <p>{{ item.name }}</p>
                    </div>
                </div>
            </div>
        </div>

        <Carousel class="carousel-home" :items-to-show="3" >

            <Slide v-for="img in showGallery" :key="img">
                <img :src="img" alt="" height="200">
            </Slide>
            
            <template #addons>
                <Navigation />
            </template>
        </Carousel>


    </div>

</template>


<script>
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import OrderForm from '../OrderForm.vue';
import countries from '@/seeders/links'

export default {

    data() {
        return {
            countries: countries,
            showForm: false,
            showGallery: countries[0].images
        }
    },
    components: {
        OrderForm,
        Carousel,
        Slide,
        Navigation
    },
    methods: {
        itemClick(item) {
            this.countries.map(el => {
                el.active = false
            })
            item.active = true
            this.showGallery = countries.find(item => item.active).images
        },
        orderForm() {
            this.showForm = true
        },
        CloseForm(show) {
            this.showForm = show
        },

    }
}

</script>

<style>



.home-blocks {
    display: flex;
    flex-direction: column;
    gap: 95px;
    position: relative;

    padding-inline: 20px;
}

.home-title-img {
    position: relative;
}

.home-title {
    position: absolute;
    left: 40px;
    bottom: 33px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 900px;
}

.home-text {
    display: flex;
    flex-direction: column;
    gap: 12px;
}


.button {
    font-weight: bold;
    background-color: #CBD83A;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-inline: 60px;
    border-radius: 20px;
    width: fit-content;
}

.home-form {
    background-color: #EEEEEE;
    padding-left: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    border-radius: 20px;

}

.home-form-text {
    display: flex;
    flex-direction: column;
    gap: 48px;
}

.home-form-img {
    position: relative;
}

.img-text {
    display: flex;
    flex-direction: column;
    gap: 23px;
    position: absolute;
    left: 32px;
    bottom: 25px;
    width: 390px;
}



.order-form {
    width: clamp(320px, 60vw, 1200px);
    background-color: white;
    height: 500px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    filter: none;
    
}

.popular {
    display: flex;
    flex-direction: column;
    gap: 43px;
}

.popular-block {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.popular-items {
    display: flex;
    gap: 30px;
}

.country {
    color: white;
    background-color: #65698C;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-inline: 30px;
    border-radius: 20px;
    font-size: 24px;
    cursor: pointer;
    user-select: none;
}

.active {
    color: #65698C;
    background-color: #CBD83A;
}

.carousel-home {
    padding-inline: 50px;
    width: 1400px;
    margin-left: -100px;
}

.home-title-img{

    img {
       width: 100%;
   }
}
@media screen and (max-width: 1400px) {
    .carousel-home {
        width: 90%;
        margin: 0;
        img {
            width: 90%;
            height: 90%;
        }
    }

    .country {
        font-size: 18px;
    }
    .popular-items {
        flex-wrap: wrap;
    }
}

@media screen and (max-width: 900px) {
    .home-form {
        flex-direction: column;
        padding: 20px;
        img {
            width: 100%;
        }
    }

    .country {
        padding: 15px;
        font-size: 14px;
    }
}

@media screen and (max-width: 600px) {

    .img-text {
        width: calc(100% - 32px);
        
    }

    .home-title {
        gap: 20px;
        width: calc(100% - 60px);
    }

    .popular-items {
        gap: 10px;
    }


}

@media screen and (max-width: 400px) {

    .button {
            padding: 10px;
            width: calc(100% - 30px);
            text-align: center;
        }
}


</style>


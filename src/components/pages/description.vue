<template>
    <OrderForm :showForm="showForm" :info="item" @close="CloseForm" />
    <div class="description-page" :class="{blur: showForm}">

        <div class="description--title">
            <img :src="item.images.main" alt="">
            <div class="description--card">
                <div class="description--info">
                    <div class="description--info--text">
                        <p class="big-font dark">{{ item.region }}</p>
                        <p class="font48">{{ item.tour_type }}</p>
                    </div>
                    <p class="font48 dark">{{ item.price }}</p>
                </div>
                <div class="description--button" @click="orderForm">
                    <p class="font36 dark bold">Заказать</p>
                </div>
            </div>
        </div>

        <div class="carousel-block">
            <p class="font48">Галерея изображений</p>
            <Carousel class="gallery carousel-description" :items-to-show="3" wrap-around="true">
                <slide v-for="img in item.images.gallery" :key="img">
                    <img :src="img" alt="">
                </slide>
                <template #addons>
                        <navigation />
                </template>
            </Carousel>
        </div>

        
        <div class="path_button">
            <div class="path-description">
                <p class="font48">Описание маршрута</p>
    
                <div class="description--cards">
                    <div class="day" v-for="(day, index) in item.description" :key="index">
            
                        <p class="font32 dark">{{ day.day }}</p>
                        <ul class="list font20">
                            <li v-for="(el, index) in day.actions" :key="index">
                                {{ el }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="description--button" @click="orderForm">
                <p class="font36 dark bold">Заказать тур</p>
            </div>
        </div>
    </div>
</template>

<script> 
import travels from '@/seeders/travels.js'
import OrderForm from '../OrderForm.vue';
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Navigation} from 'vue3-carousel'
export default {
    components: {
        Carousel,
        Slide,
        Navigation,
        OrderForm,

    },
    data() {
        return {
        
            item: null,
            showForm: false,
        }
    },
    created() {
        const index = this.$route.params.description
        const item = travels.find(el => el.id === index)
        this.item = item
    },
    methods: {
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

.description-page {
    display: flex;
    flex-direction: column;
    gap: 78px;
}

.description--title {
    position: relative;
    width: 100%;
    /* height: 752px; */
    overflow: hidden;
    border-radius: 50px;

    img {
        width: 100%;
    }
}

.description--card {
    position: absolute;
    left: 86px;
    top: 50%;
    transform: translateY(-50%);

    padding: 50px;
    background-color: #D9D9D9;
    display: flex;
    flex-direction: column;
    gap: 100px;
    border-radius: 20px;
}

.description--info {
    display: flex;
    flex-direction: column;
    gap: 45px;
}

.description--info--text {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.description--button {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-inline: 60px;
    background-color: #CBD83A;
    border-radius: 20px;
    width: fit-content;
}

.carousel-block {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.path_button {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.path-description {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.description--cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}

.day {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 20px;
    border-radius: 20px;
    background-color: #D9D9D9;
}

.list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 20px;
}







.carousel-description {
    padding-inline: 50px;
    width: 1300px;
    margin-left: -50px;
    img {
        height: 200px;
    }
}

@media screen and (max-width: 1300px) {
    .carousel-description {
        width: 90%;
        margin: 0;
        img {
            width: 90%;
            height: 90%;
        }
    }
    .path_button {
        padding-inline: 20px;
    }

    .carousel-block {
        padding-inline: 20px;

    }
}

@media screen and (max-width: 1100px) {
    .description--card {
        top: 20px;
        left: 20px;
        transform: none;
        gap: 20px;
    }
}

@media screen and (max-width: 700px) {
    .description--info {
        flex-direction: row;
        align-items: center;
    }
    .description--card {
        flex-direction: row;
    }

    .description--button {
        align-items: center;
        display: flex;
    }
}

@media screen and (max-width: 600px) {
    .description--card {
        position: static;
    }

    .description--card {
        flex-direction: column;
    }

    .description--info {
        flex-direction: column;
        align-items: start;
    }

    .description--cards {
        grid-template-columns: 1fr;
    }
}




</style>
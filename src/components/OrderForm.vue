<template>
    <div class="hidden order-form" :class="{visible: showForm}">
        <div class="order-content">
            <img src="@/components/images/close.svg" alt="" @click="$emit('close', false)">
            <p class="font32">Заказать тур</p>
            <div class="order-content--form">
                <div class="order-feelds">
                    <div v-for="item in feelds" :key="item" class="order-feeld">
                        <p class="font24">{{ item }}</p>
                        <input class="font20" type="text">
                    </div>
                </div>
                <div class="order-info">
                    <div v-if="info" class="order-data">
                        <p class="font24">Ваш заказ: <span class="dark">{{ info.region }}, {{ info.tour_type }}</span></p>
                        <p class="font24">Цена: <span class="dark">{{ info.price }}  руб.</span></p>
                    </div>
                    <p class="font24">Оставьте заявку и мы Вам перезвоним</p>
                    <div class="order-button">
                        <p class="font24 dark bold" @click="$emit('close', false)">Отправить форму</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <p @click="$emit('close', false)">close</p>
        <p>123</p>
        <p v-if="info">{{ info.region }}</p> -->
    </div>
</template>

<script>

export default {
    data() {
        return {
            feelds: ['Имя', 'Фамилия', 'Телефон', 'Email']
        }
    },
    props: {
        showForm: {
            type: Boolean
        },
        info: {
            type: Object
        }
    }
}


</script>

<style>

.order-content {
    padding-inline: 50px;
    padding-top: 60px;
    padding-bottom: 60px;

    position: relative;

    display: flex;
    flex-direction: column;
    gap: 40px;
    img {
        position: absolute;
        top: 30px;
        right: 30px;
    }
}

.order-content--form {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.order-feelds {
    display: flex;
    flex-direction: column;
    gap: 45px;
}

.order-feeld {
    display: flex;
    align-items: center;

    p {
        width: 150px;
    }

    input {
        width: 300px;
        padding: 5px;
        background-color: #D9D9D9;
    }
}

.order-info {
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.order-data {
    display: flex;
    flex-direction: column;
    gap: 17px;
}

.order-button {
    padding-inline: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 20px;
    background-color: #CBD83A;
    width: fit-content;
}




</style>
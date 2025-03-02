<template>
    <div class="contacts_page">
        <p class="font48">Контакты</p>
        <div class="contacts_content">
            <div class="contacts_cards">
                <div class="contacts_card">
                    <div class="card--info">
                        <div class="card--head">
                            <div class="card--title">
                                <p class="font24">Отдел продаж</p>
                                <img src="@/components/images/contacts/icon1.svg" alt="">
                            </div>
                            <p class="font20 dark">8:00-20:00 Пн-Пт</p>
                            <div class="work">
                                <p class="font16 dark">{{ workStatus }}</p>
                            </div>
                        </div>
                        <div class="contacts">
                            <div class="contact">
                                <p class="font16">Россия(бесплатный звонок)</p>
                                <p class="font16 dark">8 800 555-63-42</p>
                            </div>
    
                            <div class="contact">
                                <p class="font16">Москва</p>
                                <p class="font16 dark">+7 (499) 589-45-67</p>
                            </div>
    
                            <div class="contact">
                                <p class="font16">Санкт Петербург</p>
                                <p class="font16 dark">+7 (812) 645-57-38</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="contacts_card">
                    <div class="card--info">
                        <div class="card--head">
                            <div class="card--title">
                                <p class="font24">Техническая поддержка</p>
                                <img src="@/components/images/contacts/icon2.svg" alt="">
                            </div>
                            <p class="font20 dark">6:00-19:00 Пн-Вс</p>
                            <div class="work">
                                <p class="font16 dark">{{ workSupport }}</p>
                            </div>
                        </div>
                        <div class="contacts">
                            <div class="contact">
                                <p class="font16">Россия(бесплатный звонок)</p>
                                <p class="font16 dark">8 800 577-22-42</p>
                            </div>
    
                            <div class="contact">
                                <p class="font16">Санкт Петербург</p>
                                <p class="font16 dark">+7 (812) 477-70-95</p>
                            </div>
                        </div>
                    </div>
                    <div class="contacts--email">
                        <img src="@/components/images/contacts/mail.svg" alt="">
                        <p class="font16 yellow">support@traveltours.ru</p>
                    </div>
                </div>


                <div class="contacts_card">
                    <div class="card--info">
                        <div class="card--head">
                            <div class="card--title">
                                <p class="font24">Наши офисы</p>
                                <img src="@/components/images/contacts/icon3.svg" alt="">
                            </div>
                        </div>
                        <div class="contacts">
                            <div class="contact">
                                <p class="font16">Москва</p>
                                <p class="font16 dark">ул. Примерная, д. 15, офис 42</p>
                            </div>
    
                            <div class="contact">
                                <p class="font16">Санкт Петербург</p>
                                <p class="font16 dark">ул. Невская, д. 25, офис 3Б</p>
                            </div>
    
                            <div class="contact">
                                <p class="font16">Барнаул</p>
                                <p class="font16 dark">ул. Ленина, д. 45, офис 12</p>
                            </div>
                        </div>
                    </div>
                    <div class="contacts--email">
                        <img src="@/components/images/contacts/location.svg" alt="">
                        <p class="font16 yellow">Регионы</p>
                        <select class="contacts--region dark" name="" id="">
                            <option value="Москва">Москва</option>
                            <option value="Санкт Петербург">Санкт Петербург</option>
                            <option value="Барнаул">Барнаул</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>


export default {
    data() {
        return {
            moscowTime: this.getMoscowDateTime(),
        }
    },
    methods: {
        getMoscowDateTime() {
            const date = new Date();
            const moscowDate = new Date(date.toLocaleString('en-US', { timeZone: 'Europe/Moscow' }));
            return {
                hour: moscowDate.getHours(),
                weekday: moscowDate.toLocaleString('ru-RU', { weekday: 'long' }).toLowerCase()
            };
        }
    },
    computed: {
        workStatus() {
            if (this.moscowTime.hour < 20 && this.moscowTime.hour > 8 && 
                this.moscowTime.weekday !== 'суббота' && 
                this.moscowTime.weekday !== 'воскресенье') {
                return 'Сейчас работаем';
            }
            return 'Закрыто';
        },
        workSupport() {
            if (this.moscowTime.hour < 19 && this.moscowTime.hour > 6
                ) {
                return 'Сейчас работаем';
            }
            return 'Закрыто';
        }
    },
    mounted() {
        
        setInterval(() => {
            this.moscowTime = this.getMoscowDateTime();
        }, 60000);
    }
}
</script>








<style>

.contacts_page {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.contacts_content {
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.contacts_cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
}

.contacts_card {
    height: 450px;
    padding: 35px;
    border-radius: 20px;
    background-color: #D9D9D9;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card--info {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.card--head {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.card--title {
    display: flex;
    gap: 50px;
    p {
        width: 100%;
    }
}

.work {
    padding: 10px;
    background-color: #CBD83A;
    border-radius: 20px;
    width: fit-content;
}

.contacts {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.contact {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.contacts--email {
    display: flex;
    gap: 11px;
    height: 60px;
    align-items: center;
    padding-inline: 35px;
    background-color: #65698C;
    border-radius: 100px;
}

.contacts--region {
    padding-inline: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #D9D9D9;

}

.map {
    width: 100%;
    height: 500px;
    border-radius: 20px;
    overflow: hidden;
}


@media screen and (max-width: 1300px) {
    .contacts_page {
        padding-inline: 20px;
    }
}

@media screen and (max-width: 1200px) {
    .contacts_cards {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 900px) {
    .contacts_cards {
        grid-template-columns: 1fr;
    }

    .contacts--email {
        flex-wrap: wrap;
        padding: 20;
    }


}
@media screen and (max-width: 400px) {
    .contacts--email {
        padding: 10px;
        height: fit-content;
        justify-content: center;
    }
}

</style>
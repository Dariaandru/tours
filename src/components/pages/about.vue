<template>
    <div class="about-page">
        <div class="greeting">
            <img class="img" :src="about.greeting.image" alt="">
            <div class="greeting--content">
                <div class="greeting--title big-font">
                    <p>
                        <span>{{ about.greeting.title }} <br></span>
                        <span class="yellow"> travel</span>
                        <span class="dark">Tours</span>!
                    </p>
                </div>
                <div class="greeting--cards">
                    <div class="greeting--card" 
                    v-for="card in about.cards" :key="card" >
                        <div class="greeting--icon">
                            <img :src="card.icon" alt="">
                        </div>
                        <p class="font24">{{ card.title }}</p>
                        <p class="font18 dark">{{ card.text }}</p>
                    </div>
    
                </div>
            </div>
        </div>
        <div class="missia">
            <p class="font48">Наша миссия -</p>
            <p class="font24 dark">
                предоставить вам уникальные и качественные туристические услуги, которые помогут вам исследовать мир с комфортом и удовольствием. Мы верим, что каждое путешествие — это возможность не только увидеть новые места, но и узнать что-то новое о себе и окружающем мире.
            </p>
        </div>
        <div class="offers">
            <p class="font48">Что мы предлагаем</p>
            <div class="greeting--cards">
                <div class="offers--card"
                v-for="card in about.offers" :key="card">
                    <p class="font24">
                        {{ card.title }}
                    </p>
                    <div class="offers--img_text">
                        <img :src="card.image" alt="">
                        <p class="font16 dark">
                            {{ card.text }}
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="reasons">
            <p class="font48">Почему выбирают нас?</p>
            <div class="greeting--cards">
                <div class="reasons--card"
                v-for="card in about.reasons" :key="card">
                <p class="font24">
                    {{ card.title }}
                </p>
                <div class="reasons--img_text">
                    <img :src="card.image" alt="">
                    <p class="font16 dark">
                        {{ card.text }}
                    </p>
                </div>
                </div>
            </div>
        </div>
        <div class="end">
            <img :src="about.end.image" alt="">
            <div class="end--content big-font">
                <div class="white">
                    <span>{{ about.end.title }}</span>
                    
                    <p class="comp">
                        <span class="yellow">travel</span>
                        <span class="dark">Tours</span>!
                    </p>        
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import about from '@/seeders/about';
export default {
    data() {
        return {
            about: about
        }
    }
}

</script>



<style>

.about-page {
    display: flex;
    flex-direction: column;
    gap: 78px;
    padding-inline: 20px;
}

.greeting {
    position: relative;
}

.greeting--content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 130px;
    max-width: 1100px;
    width: 100%;


}

/* .greeting--title {

} */

.greeting--cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
}

.greeting--card {
    width: 300px;
    height: 273px;
    background-color: #D9D9D9;
    padding: 40px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.greeting--icon {
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    border-radius: 50%;
    background-color: #CBD83A;
    img {
        margin: 0 auto;
    }
}

.missia {
    display: flex;
    flex-direction: column;
    gap: 25px;
    line-height: 40px;
}

.offers, .reasons {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.offers--card {
    width: 280px;
    height: 345px;
    padding: 20px;
    border-radius: 20px;
    background-color: #D9D9D9;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.offers--img_text, .reasons--img_text {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.reasons--card {
    width: 350px;
    height: 325px;
    padding: 20px;
    border-radius: 20px;
    background-color: #D9D9D9;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.end {
    position: relative;
    border-radius: 50px;
    overflow: hidden;
}

.end--content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 1030px;
    width: 100%;
    .comp {
        margin-top: 70px;
    }
}

@media screen and (max-width: 1600px) {
    .greeting .img {
        width: 100%;
    }
}

@media screen and (max-width: 1300px) {
    .greeting--content {
        padding: 20px;
    }


}

@media screen and (max-width: 1020px) {
    .greeting--cards {
        justify-content: center;
        gap: 30px;
    }
    .greeting--content {
        position: static;
        top: initial;
    transform: none;
    gap: 20px;
    align-items: center;

    }

    .greeting {
        position: static;
    }

    .end--content {
        padding: 20px;
    }
}
@media screen and (max-width: 400px) {
    .reasons--card {
        width: 100%;
    }
}

</style>
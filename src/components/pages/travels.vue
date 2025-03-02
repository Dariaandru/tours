<template>
    <div class="travel-page">

        <div class="travel--header">
            <div class="travel--title">
                <p class="font48">Доступные предложения</p>
                <input class="travel--search font24" type="text" placeholder="Поиск" v-model="search">
            </div>
            <div class="travel--filtering">
                <p class="font36 dark">Фильтр</p>
                <div class="travel--filters">
                    <Filter name="Регион" v-model="selectRegion" :options="Regions" />
                    <Filter name="Тип" v-model="selectType" :options="Types" />
                    <Filter name="Цена" v-model="selectPrice" :options="Prices" />
                </div>
            </div>
        </div>
    
        <div class="travels">
            <div class="travel" v-for="(item, index) in FilteredTravels" :key="index">
                <img :src="item.images.main" alt="">
                <div class="travel--content">
                    <div class="travel--text_price">
                        <div class="travel--text">
                            <p class="font24">{{ item.region }}</p>
                            <p class="font20">{{ item.tour_type }}</p>
                        </div>
                        <p class="font40 dark">{{ item.price }} руб</p>
                    </div>
                    <router-link :to="`./travels/${item.id}`">
                        <div class="travel--button">
                            <p class="font16 bold dark">Открыть</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import Filter from '@/components/Filter.vue'
import travels from '@/seeders/travels.js'

export default {
    created() {
        this.options = [...new Set(this.travels.map(el => el.region))]
        this.types = [...new Set(this.travels.map(el => el.tour_type))]
        this.prices = [...new Set(this.travels.map(el => el.price))].sort((a, b) => {return a - b})
    },
    components: {
        Filter
    },
    data() {
        return {
            selectType: '',
            selectRegion: '',
            selectPrice: '',
            options: [],
            types: [],
            search: '',
            travels: travels
        }
    },
    computed: {

        Types() {
            return [...new Set(this.FilteredTravels.map(el => el.tour_type))] ?? this.types
        },
        Prices() {
            return [...new Set(this.FilteredTravels.map(el => el.price))] ?? this.prices
        },
        Regions() {
            return [...new Set(this.FilteredTravels.map(el => el.region))] ?? this.options
        },
        
        FilteredTravels() {

            return this.travels.filter(tour => {
                const searchTerm = this.search.toLowerCase()

                const matchesSearch = !this.search ||
                tour.region.toLowerCase().includes(searchTerm)

                // this.selectRegion = this.selectRegion.toLowerCase()
                const matchesSelectRegion = !this.selectRegion || (tour.region === this.selectRegion)
                console.log(this.selectRegion)

                const matchesSelectType = !this.selectType || (tour.tour_type === this.selectType)
                console.log(this.selectType)

                const matchesSelectPrice = !this.selectPrice || (tour.price === this.selectPrice)
                console.log(this.selectPrice)

                return matchesSearch && matchesSelectRegion && matchesSelectType && matchesSelectPrice
            })
    }
    }
    

}

</script>

<style>
.travel--header {
    display: flex;
    flex-direction: column;
    gap: 55px;
}

.travel--title {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
}

.travel--search {
    padding: 20px;
    border-radius: 20px;
    border: 1px solid #65698C;
    width: 500px;
}

.travel--filtering {
    display: flex;
    flex-direction: column;
    gap: 31px;
}

.travel--filters {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
}

.travels {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 33px;
}

.travel {
    padding: 10px;
    border-radius: 10px;
    background-color: #D9D9D9;
    width: 580px;
    display: flex;
    gap: 20px;
    align-items: center;
    img {
        width: 334px;
    }
}

.travel--content {
    width: 220px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.travel--text_price {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.travel--text {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.travel--button {
    background-color: #CBD83A;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    text-align: center;
}

.travel-page {
    display: flex;
    flex-direction: column;
    gap: 83px;
}

@media screen and (max-width: 1250px) {
    .travel-page {
        padding-inline: 20px;

    }
    .travels {
        justify-content: center;
    }

    .travel--filters {
        flex-direction: column;
        align-items: center;
    }

    .travel--title {
        justify-content: center;
    }

    .travel--filtering {
        align-items: center;
    }
}

@media screen and (max-width: 600px) {
    .travel {
        flex-direction: column;
        width: 100%;
    }
}

@media screen and (max-width: 400px) {

.travel--filter {
    width: 100%;
}

.travel--filtering {
    align-items: initial;
}

.travel img {
    width: 100%;
}
}

</style>
<template>
    <div class="font24 travel--filter">
        <p class="white">{{ name }}</p>
        <select v-model="selectedValue" @change="updateValue">
            <option value="">Все</option>
            <option v-for="(option, index) in options" 
                    :value="option" 
                    :key="index">
                {{ option }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: true
        },
        modelValue: {
            type: [String, Number],
            default: ''
        }
    },
    data() {
        return {
            selectedValue: this.modelValue
        }
    },
    methods: {
        updateValue() {
            this.$emit('update:modelValue', this.selectedValue)
        }
    },
    watch: {
        modelValue(newValue) {
            this.selectedValue = newValue
        }
    }
}
</script>

<style>
.travel--filter {
    width: 380px;
    background-color: #65698C;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-inline: 30px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    select {
        padding-top: 5px;
        padding-bottom: 5px;
        padding-inline: 10px;
        font-size: inherit;
    }
}

</style>
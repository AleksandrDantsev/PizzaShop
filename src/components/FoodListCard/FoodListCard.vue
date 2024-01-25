<script setup>
import { ref, computed } from "vue";
import store from "../../store/store";
import FoodListCardPopUpVue from "../FoodListCardPopUp/FoodListCardPopUp.vue"

const isOpen = ref(false);
const id = computed(() => store.state.general.link);

defineProps({
    product: Object,
    type: String,
})

const closeWindow = () => {
    isOpen.value = false;
    console.log(isOpen.value)
    console.log('check')
}

const open = () => isOpen.value = true;


</script>

<template>
    <div class="food-list-card" @click="open">
        <div class="food-list-card__img">
            <img :src="product.image" alt="{{product.name}}">

        </div>
        <div class="food-list-card__description">
            <div class="food-list-card__description-wrapper">
                <div class="food-list-card__title">{{product.name}}</div>
                <div class="food-list-card__characteristic">{{product.composition}}</div>
            </div>
            <div class="food-list-card__cost-button">
                <div class="food-list-card__cost"><span>{{product.cost}} р</span></div>
                <button class="food-list-card__button">Заказать</button>
            </div>
        </div>
    </div>
    <FoodListCardPopUpVue v-if="isOpen" :product="product" 
                                        :type="id" 
                                        @close-window="closeWindow" />
</template>

<style scoped lang="scss">
.food-list-card {
    height: auto;
    width: calc(100% / 3 - 20px);
    margin: 0 10px 10px 0;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0 2px 20px 0px rgb(241, 241, 241);
    cursor: pointer;
    transition-duration: 200ms;
    &:hover {
        transform: translate(1px, 2px);
        box-shadow: 0 2px 10px 0px rgb(207, 207, 207);
    }
}
.food-list-card__img { 
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.food-list-card__description {
    margin: 10px 0;
}

.food-list-card__title {
    color: #000;
    font-size: 18px;
    font-weight: bold;
}
.food-list-card__characteristic {
    font-size: 15px;
    margin: 10px 0;
    max-height: 20px;
    min-height: 50px;
    overflow: hidden;
}
.food-list-card__cost {
    display: flex;
    align-items: center;
    font-weight: bold;
}
.food-list-card__cost-button {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
}
.food-list-card__description-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.food-list-card__button {
    width: 140px;
    height: 40px;
    background-color: #ee7627;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    transition-duration: 500ms;
    &:hover {
        background-color: #fff;
        color: #ee7627;
        border: solid 1px #ee7627;
    }
}
</style>

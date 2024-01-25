<script setup>
import { ref, computed } from "vue";
import store from "../../store/store";
import { products } from "../../baseData/baseData";
import FoodListCard from "../FoodListCard/FoodListCard.vue";

const linkCat = computed(() => ref(store.getters.getProductsCategory));



</script>

<template>
    <div class="food-list">
        <div class="food-list__title">{{store.link}}</div>
        <div class="food-list__cards">
            <FoodListCard v-for="element in linkCat.value" 
                                :key="element.name" 
                                :product="element"
                                 />
        </div>
    </div>
</template>

<style scoped lang=scss>
.food-list__cards {
    display: flex;
    width: 90%;
    margin: 20px auto;
    flex-wrap: wrap;
}
</style>

<script setup>
import { ref } from "vue";
defineProps({
    name: String,
    image: String,
    id: String,
    cost: String,
});
const counterAdditive = ref(0);

const decreaseCount = () => {
    if (counterAdditive.value <= 0) counterAdditive.value = 0;
    else counterAdditive.value -= 1;
}

const increaseCount = () => {
    if (counterAdditive.value >= 5) counterAdditive.value = 5;
    else counterAdditive.value += 1;
}

</script>

<template>
<div class="additive">
    <div class="additive__image">
        <img :src="image" :alt="name">
    </div>
    <div class="additive__name">
        {{name}}
    </div>
    <div class="additive__cost">
        {{cost}} р
    </div>
    <div class="additive__counter">
        <button @click="decreaseCount" class="additive__decrease">-</button>
        <div class="additive__count" :class="{'color-counter': counterAdditive}" >{{counterAdditive}}</div>
        <button @click="increaseCount" class="additive__increase">+</button>
    </div>
</div>
</template>

<style scoped lang="scss">
.additive {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: calc(100% / 3 - 10px);
    min-height: 150px;
    padding: 12px;
    margin: 5px;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 1px 10px 0 rgb(212, 212, 212);
}
.additive__image {
    width: 100%;
    height: 65%;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
.additive__name {
    font-size: 12px;
    text-align: center;
}
.additive__cost {
    text-align: center;
    font-size: 12px;
    margin-top: 5px;
}
.additive__counter {
    display: flex;
    justify-content: center;
    margin: 8px 0;
    button {
        width: 20px;
        height: 20px;
        cursor: pointer;
        border-radius: 6px;
        box-shadow: 0 0 3px 0 rgb(236, 236, 236);
    }
}
.additive__decrease {
    margin-right: 5px;
    background-color: #d8d8d8;
}
.additive__count {
    padding: 0 5px;
    color: rgb(189, 189, 189);
}
.additive__increase {
    margin-left: 5px;
    background-color: #ee7627;
    color: #fff;
}
.color-counter {
    color: #000;
}
</style>

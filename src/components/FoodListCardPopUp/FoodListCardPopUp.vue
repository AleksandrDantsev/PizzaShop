<script setup>
import { ref } from "vue";
import { additives } from "../../baseData/additives";
import AdditiveToOrderVue from "../AdditiveToOrder/AdditiveToOrder.vue";
defineProps({
    product: Object,
    type: String,
    // close-window: Function,
});
const sizeTable = {
    small: 'Маленькая',
    middle: 'Средняя',
    big: 'Большая',
}
const choisedSize = ref('middle');

const getSize = (e) => {
    if (e.target.tagName === "BUTTON") {
        choisedSize.value = e.target.id;
    }
}


</script>

<template>
<div class="info-card__blur" @click.self.stop="$emit('close-window')">
    <div class="info-card">
        <div class="info-card__img">
            <img :src="type === 'pizza' ? product.sizes[choisedSize].image : product.image" 
                :alt="product.name">
        </div>
        <div class="info-card__description">
            <div class="info-card__content">
                <div class="info-card__title" >
                    {{product.name}}
                </div>
                <div class="info-card__size">
                    <div v-if="type === 'pizza'" class="info-card__size-pizza">
                        <div class="info-card__size-rest-prod">
                            <span>{{product.sizes[choisedSize].diameter}} см</span>
                            <span>{{product.sizes[choisedSize].weight}} гр</span>
                        </div>
                        <div class="choise-size-button" @click="getSize">
                            <button class="choise-button-elem" v-for="(size, key) in product.sizes" 
                                    :id="key"  
                                    :class="{'choised-button': key === choisedSize}" 
                                    :key="size">
                                        {{sizeTable[key]}}
                                    </button>
                        </div>
                    </div>
                    <div v-else class="info-card__size-rest-prod">
                        <span v-if="type === 'coffee' || type === 'drink'">{{product.size}} л</span>
                        <span>{{product.weight}} гр</span>
                    </div>
                </div>
                <div class="info-card__composition">
                    {{product.composition}}
                </div>
                <div v-if="type === 'pizza'" class="info-card__additive">
                    <AdditiveToOrderVue v-for="additive in additives" :key="additive.id"
                                        :name="additive.name"
                                        :image="additive.image"
                                        :id="additive.id"
                                        :cost="additive.cost" />
                </div>
            </div>
            <div class="info-card__button">
                <button class="infor-card__button-basket">Добавить в козину</button>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
.info-card__blur {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #2c2c2c86;
    cursor: default;
}
.info-card {
    display: flex;
    position: relative;
    z-index: 50;
    left: 50%;
    top: 50% ;
    height: 550px;
    min-width: 300px;
    width: 65vw;
    padding: 30px;
    background-color: #ffffff;
    box-shadow: 0 0 15px 0 rgb(117, 117, 117);
    border-radius: 30px;
    transform: translate3d(-50%, -50%, 0);
}
.info-card__img {
    width: 55%;
    height: 100%;
    margin-right: 2%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.info-card__description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 43%;
}
.info-card__content {

}
.info-card__title {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
}
.info-card__size {
    font-size: 14px;
}
.info-card__additive {
    display: flex;
    flex-wrap: wrap;
    margin: 0 5px 5px 0;
    width: 100%;
    height: 200px;
    overflow-y: auto;
}
$backgroundSizePanel: #ececec;
.choise-size-button {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: 10px;
    background-color: $backgroundSizePanel;
}
.choise-button-elem {
    display: inline-block;
    width: calc(100% / 3);
    width: 100%;
    height: 32px;
    border-radius: 10px;
    background-color: $backgroundSizePanel;
    cursor: pointer;
}
.choised-button {
    background-color: #ffffff;
    box-shadow: 0 3px 20px 0 rgb(209, 209, 209);
    border-radius: 10px;
    transition-duration: 100ms;
}
.info-card__size-rest-prod {
    display: flex;
    justify-content: space-around;
    margin: 15px 0;
}
.info-card__composition {
    margin: 25px 10px;
    font-size: 15px;
}
.info-card__button {
    width: 80%;
    height: 45px;
    margin: 10px auto;
}
.infor-card__button-basket {
    width: 100%;
    height: 100%;
    background-color: #ee7627;
    color: #fff;
    font-size: 15px;
    border-radius: 10px;
    cursor: pointer;
}
</style>

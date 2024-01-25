<script setup>
import { ref } from "vue";
defineProps({
    product: Object,
    type: String,
    // close-window: Function,
});

const choisedSize = ref('middle');



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
                        <div class="info-card__button-size" v-for="val in product.sizes" :key="val">
                            <span>{{val.diameter}} см</span>
                            <span>{{val.weight}} гр</span>
                        </div>
                    </div>
                    <div v-else class="info-card__size-rest-prod">
                        <span>{{product.size}} л</span>
                        <span>{{product.weight}} гр</span>
                    </div>
                </div>
                <div class="info-card__composition">
                    {{product.composition}}
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
    height: 500px;
    min-width: 300px;
    width: 60vw;
    padding: 25px;
    background-color: #ffffff;
    box-shadow: 0 0 15px 0 rgb(117, 117, 117);
    border-radius: 30px;
    transform: translate3d(-50%, -50%, 0);
}
.info-card__img {
    width: 50%;
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
    width: 48%;
}
.info-card__content {

}
.info-card__title {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
}
.info-card__size {
    
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

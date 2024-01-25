<script setup>
import { ref, watch } from 'vue';
import store from "../../store/store";
const currentLink = ref();

function checkLink(e) {
    if (e.target.tagName === "A") {
        currentLink.value = getLastLink(e.target.href);
        store.commit("changeLink", currentLink.value)
    }
}

function getLastLink(fullLink) {
     return fullLink.split('/').at(-1);
}

</script>

<template>
  <header class="header">
    <div class="header__wrapper">
        <ul class="header__list" @click.prevent="checkLink" >
            <li><a href="/pizza">Пиццы</a></li>
            <li><a href="/kombo">Комбо</a></li>
            <li><a href="/snack">Закуски</a></li>
            <li><a href="/cocktail">Коктейли</a></li>
            <li><a href="/coffee">Кофе</a></li>
            <li><a href="/drink">Напитки</a></li>
        </ul>
        <button class="header__basket">Корзина</button>
    </div>
    
  </header>
</template>

<style scoped lang="scss">
.header {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    box-shadow: 0 1px 15px 0 #df8d5750;
    background-color: #fff;
}
.header__wrapper {
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 100%;
    margin: 0 auto;

}
.header__list {
    display: flex;
    justify-content: space-between;
    width: 60%;
    a {
        font-size: 16px;
        padding: 5px;
        color: #ee7627;
    }
}
.header__basket {
    background-color: #ee7627;
    padding: 12px 20px;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    transition-duration: 900ms;
    &:hover {
        box-shadow: 0 1px 12px 0 #df8d57ad;
    }
}

</style>

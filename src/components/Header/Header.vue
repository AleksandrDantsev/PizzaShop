<script setup>

</script>

<template>
  <header class="header">
    <div class="header__wrapper">
        <ul class="header__list">
            <li><router-link to="/">Пиццы</router-link></li>
            <li><router-link to="/kombo">Комбо</router-link></li>
            <li><router-link to="/snack">Закуски</router-link></li>
            <li><router-link to="/cocktail">Коктейли</router-link></li>
            <li><router-link to="/coffee">Кофе</router-link></li>
            <li><router-link to="/drink">Напитки</router-link></li>
        </ul>
        <button class="header__basket">Корзина</button>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    box-shadow: 0 1px 15px 0 #df8d5750;
}
.header__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
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

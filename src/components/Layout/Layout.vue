<script setup>
import Header from "../Header/Header.vue";
</script>

<template>
    <div class="wrapper">
        <Header />
        <main class="main">
            <router-view></router-view>
        </main>
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
.main {
    flex-grow: 1;
}
</style>

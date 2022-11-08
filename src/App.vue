<script setup>
import { RouterView } from "vue-router";
import Search from "./components/Search.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <header>
    <Search />
    <Navbar />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>

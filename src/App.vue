<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <transition name="fade">
    <router-view :key="$route.fullPath"></router-view>
  </transition>
</template>

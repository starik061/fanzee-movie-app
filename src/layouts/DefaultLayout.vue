<template>
  <MainHeader />
  <router-view></router-view>
  <MainFooter />
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  components: {
    MainHeader,
    MainFooter,
  },
};
</script>

<style lang="scss" scoped>
/* Ваши стили */
</style>

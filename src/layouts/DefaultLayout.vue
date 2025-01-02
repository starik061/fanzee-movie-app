<template>
  <div class="layout-container">
    <MainHeader />
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <MainFooter class="footer" />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  components: {
    MainHeader,
    MainFooter,
  }
}
</script>

<style lang="scss" scoped>
.layout-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  min-height: 100vh;
  position: relative;
}

.footer {
  margin-top: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

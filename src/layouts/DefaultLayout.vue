<template>
  <audio class="visually-hidden" ref="audio">
    <source :src="productClickSound" type="audio/mpeg" />
  </audio>
  <div class="layout-container">
    <MainHeader />
    <router-view @play="handleCardClick"></router-view>
    <MainFooter class="footer" />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import productClickSound from "/public/product_click.mp3"

export default {
  components: {
    MainHeader,
    MainFooter,
  },
  data() {
    return {
      productClickSound
    }
  },
  methods: {
    async playAudio() {
      const audio = this.$refs.audio;

      if (audio) {
        try {
          await audio.play();
        } catch (err) {
          console.error("Ошибка воспроизведения аудио:", err);
        }
      }
    },

    async handleCardClick(movieId) {
      await this.playAudio();
      this.$router.push({ name: "MovieDetails", params: { id: movieId } });
    },
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
</style>

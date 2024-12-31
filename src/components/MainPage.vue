<template>
  <div class="main-container">
    <div class="cards-container">
      <MovieCard v-for="movie in moviesList" :key="movie.id" :movieDetails="movie" />
    </div>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue"
import { getMovies } from "@/api/index.js"

export default {
  name: "MainPage",
  components: { MovieCard },
  data() {
    return {
      moviesList: []
    }
  },
  async mounted() {
    this.moviesList = await getMovies()
  }

}
</script>

<style lang="scss" scoped>
.cards-container {
  display: flex;
  justify-content: start;
  align-items: flex-start;
  gap: 16px;
  padding: 32px 0;
}
</style>

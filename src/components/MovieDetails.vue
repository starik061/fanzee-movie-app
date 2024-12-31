<template>
  <div class="main-container">
    <div class="cards-container">
      Детали
    </div>
  </div>
</template>

<script>
import { getMovies } from "@/api/index.js"

export default {
  name: "MovieDetails",
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

<style lang="scss" scoped></style>

<template>
  <router-link class="card-wrapper" :to="{ name: 'MovieDetails', params: { id: movieDetails.id } }">
    <img class="movie-img" :src="movieDetails.poster" alt="movieDetails.name">

    <div class="card-text-container">
      <h3 class="movie-title">{{ this.movieDetails.name || "-" }}</h3>
      <p>{{ this.movieDetails.description || "-" }}</p>
    </div>


    <ul v-if="areTags" class="tags-list">
      <li v-if="movieDetails.rating">{{ this.movieDetails.rating.toFixed(1) }} </li>
      <li v-if="movieDetails.genre">{{ this.movieDetails.genre }} </li>
      <li v-if="movieDetails.duration">{{ this.movieDetails.duration }} </li>
    </ul>

    <div v-else class="tag-list-stub"></div>
  </router-link>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movieDetails: {
      type: Object,
      required: true
    }
  },

  computed: {
    areTags() {
      return this.movieDetails.rating || this.movieDetails.genre || this.movieDetails.duration ? true : false;
    }
  },

  mounted() {
    console.log(this.movieDetails)
  }
}
</script>

<style lang="scss" scoped>
.card-wrapper {

  width: 296px;
  height: 306px;
  padding: 12px;
  background-color: var(--background-color-grey);
}

.movie-img {
  display: inline-block;
  width: 100%;
  margin-bottom: 12px;
}

.movie-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 4px;
}
</style>

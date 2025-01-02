<template>
  <div class="main-container">
    <div class="details-container">
      <div class="details-container-media">
        <h2 class="details-text-header">{{ movieDetails.name || '-' }}</h2>
        <img class="movie-img" :src="movieDetails.poster || '/fanzee-movie-app/placeholder_image.avif'"
          :alt="movieDetails.name" width="240px" height="320px">
        <ul v-if="areTags" class="tags-list">
          <li v-if="movieDetails.rating">
            <MovieTag :type="'rating'" :data="movieDetails.rating" />
          </li>
          <li v-if="movieDetails.genre">
            <MovieTag :type="'genre'" :data="movieDetails.genre" />
          </li>
          <li v-if="movieDetails.duration">
            <MovieTag :type="'duration'" :data="movieDetails.duration" />
          </li>
        </ul>
      </div>

      <div class="details-container-text">
        <div>
          <h2 class="details-text-header">Description</h2>
          <p class="details-text-description">{{ movieDetails.description || '-' }}</p>
        </div>
        <template v-if="movieDetails.trivia">
          <h2 class="details-text-header">Trivia</h2>
          <ul class="details-list">
            <li v-for="(triv, trivIndex) of movieDetails.trivia" :key="triv + trivIndex">{{ triv }}</li>
          </ul>
        </template>

        <template v-if="movieDetails.actors">
          <h2 class="details-text-header">Actors</h2>
          <ul class="details-list">
            <li v-for="(actor, actorIndex) in movieDetails.actors" :key="actor + actorIndex">{{ actor.name }}</li>
          </ul>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { getMovieById } from "@/api/index.js"
import MovieTag from "@/components/MovieTag.vue";

export default {
  name: "MovieDetails",
  components: { MovieTag },
  data() {
    return {
      movieDetails: {}
    }
  },

  computed: {
    areTags() {
      return this.movieDetails.rating || this.movieDetails.genre || this.movieDetails.duration ? true : false;
    }
  },

  async mounted() {
    this.movieDetails = await getMovieById(this.$route.params.id)
  }
}
</script>

<style lang="scss" scoped>
.details-container {
  display: flex;
  gap: 64px;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 100px;
  padding-top: 24px;
  padding-bottom: 24px;
}

.details-container-media {
  flex-basis: 240px;
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 24px;
}

.movie-img {
  object-fit: cover;
  border-radius: 8px;
  overflow: hidden;
}

.details-text-header {
  font-weight: bold;
  font-size: 32px;
  text-transform: capitalize;
}

.details-container-text {
  flex-basis: 340px;
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 16px;
}

.details-list li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.details-list li::before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #ffffff;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>

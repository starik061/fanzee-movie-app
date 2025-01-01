<template>
  <router-link class="card-wrapper" :to="{ name: 'MovieDetails', params: { id: movieDetails.id } }">
    <img class="movie-img" :src="movieDetails.poster || '/public/placeholder_image.jpg'" :alt="movieDetails.name">

    <div class="card-text-container">
      <h3 class="movie-title">{{ this.movieDetails.name || "-" }}</h3>
      <p class="movie-description">{{ this.movieDetails.description || "-" }}</p>
    </div>


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

    <div v-else class="tag-list-stub"></div>
  </router-link>
</template>

<script>
import MovieTag from "@/components/MovieTag.vue";

export default {
  name: "MovieCard",
  components: {
    MovieTag
  },

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

}
</script>

<style lang="scss" scoped>
.card-wrapper {
  flex-basis: 296px;
  flex-shrink: 0;
  flex-grow: 0;
  height: 306px;
  padding: 12px;
  border-radius: 12px;
  background-color: var(--background-color-grey);
  overflow: hidden;
}

.movie-img {
  display: inline-block;
  width: 100%;
  height: 172px;
  margin-bottom: 12px;
  border-radius: 8px;
  object-fit: cover;
}

.movie-title {
  width: 100%;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.movie-description {
  width: 100%;
  display: -webkit-box;
  /* Свойства ниже использованы для того, чтоб описание фильма занимало максимум две строки, и в конце добавлялось троеточие */
  -webkit-box-orient: vertical;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>

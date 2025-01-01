<template>
  <template v-if="type === 'rating'">
    <div class="tag-container rating" :class="{ 'low': Number(data) < 5 }">
      <ratingIcon />
      <span>{{ this.data.toFixed(1) }}</span>
    </div>
  </template>

  <template v-else-if="type === 'genre'">
    <div class="tag-container genre">
      <GenreIcon />
      <span>{{ this.data }}</span>
    </div>
  </template>

  <template v-else-if="type === 'duration'">
    <div class="tag-container duration">
      <DurationIcon />
      <span>{{ this.data }}</span>
    </div>
  </template>
</template>
<script>
import DurationIcon from "@/components/icons/DurationIcon.vue";
import GenreIcon from "@/components/icons/GenreIcon.vue";
import ratingIcon from "@/components/icons/ratingIcon.vue";

export default {
  components: { DurationIcon, GenreIcon, ratingIcon },

  props: {
    type: {
      type: String,
      required: false
    },
    data: {
      type: String || Number,
      required: true
    },
  },

}
</script>

<style lang="scss" scoped>
.tag-container {
  display: flex;
  gap: 2.5px;
  align-items: center;
  padding: 2px 6px;
  font-size: 11px;
  border-radius: 15px;

  &.rating {
    background-color: #039C55;

    &.low {
      background-color: #E81A0C;
    }
  }

  &.genre {
    background-color: #2C81FB;
  }

  &.duration {
    background-color: #702BFE;
  }
}
</style>

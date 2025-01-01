<template>
  <header class="main-container main-header">
    <nav>
      <ul class="nav-list">
        <li>
          <router-link to="/" class="nav-link" :class="{ 'active': this.$route.fullPath === '/' }">Main
            Page</router-link>
        </li>
        <li>
          <span v-if="isDetailsPage" class="nav-link" :class="{ 'active': isDetailsPage }">Movie
            Details</span>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "MainHeader",

  computed: {
    isDetailsPage() {
      if (this.$route.fullPath.includes('/movie')) { return true; }
      return false;
    }
  }
}
</script>

<style lang="scss" scoped>
.main-header {
  padding-top: 31px;
  padding-bottom: 31px;
  background-color: var(--background-color-grey);
}

.nav-list {
  display: flex;
  gap: 12px;
}

.nav-link {
  font-size: 32px;
  font-weight: bold;

  &.active {
    color: rgb(112, 56, 56);
  }
}
</style>

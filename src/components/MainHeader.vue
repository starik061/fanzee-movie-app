<template>
  <header class="main-container main-header">
    <nav>
      <ul>
        <li>
          <router-link to="/" class="nav-link">Test Task</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.main-header {
  padding-top: 31px;
  padding-bottom: 31px;
  background-color: var(--background-color-grey);
}

.nav-link {
  font-size: 32px;
  font-weight: bold;

}
</style>

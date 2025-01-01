<template>
  <footer class="main-footer">
    <ul class="main-container footer-container">
      <li>
        <router-link class="footer-text">Test Task, 2025</router-link>
      </li>
      <li class="address-list-item">
        <a class="footer-tel" href="tel:518-363-2171">518-363-2171</a>
        <address class="footer-address">91 Park St.Fairhope, AL 36532</address>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
}
</script>

<style lang="scss" scoped>
.main-footer {
  width: 100vw;
  background-color: var(--background-color-grey);
}

.footer-container {
  padding-top: 31px;
  padding-bottom: 31px;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-tex {
  font-size: 18px;
  font-weight: bold;
}

.address-list-item {
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 4px;
}

.footer-tel {
  text-decoration: underline;
}
</style>

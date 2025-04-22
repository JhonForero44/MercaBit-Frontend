<template>
  <div class="layout">
    <div :class="{ 'with-sidebar': route.meta.showMenu }">
      <HeaderLogo />
    </div>

    <div class="content-wrapper" :class="{ 'with-sidebar': route.meta.showMenu }">
      <main class="main-content">
        <router-view />
      </main>
    </div>

    <footer :class="{ 'with-sidebar': route.meta.showMenu }">
      <div class="footer-content">
        <p>MercaBit &copy; 2025 Todos los derechos reservados</p>
      </div>
    </footer>

    <!-- Menú fijo, se renderiza aparte del flujo -->
    <MenuDiagonal v-if="route.meta.showMenu" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import HeaderLogo from '@/components/HeaderLogo.vue';
import MenuDiagonal from '@/components/MenuDiagonal.vue';

const route = useRoute();
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* El contenido se ajusta automáticamente si hay menú */
.content-wrapper {
  flex: 1;
  display: flex;
  transition: margin-left 0.3s ease;
}

.content-wrapper.with-sidebar {
  margin-left: 220px;
  /* Igual al width del sidebar */
}

.main-content {
  flex: 1;
  padding: 1rem;
}

/* Footer */
footer {
  padding: 10px 0;
  text-align: center;
  animation: fadeIn 1.5s ease-in-out;
  background-color: #f8f8f8;
}

footer.with-sidebar {
  margin-left: 220px;
}

.footer-content p {
  margin: 5px 0;
  font-size: 16px;
  opacity: 0.9;
}
</style>

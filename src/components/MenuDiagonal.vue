<template>
  <aside class="sidebar">
    <!-- Logo y título -->
    <div class="menu-header">
      <img src="/img/LogoEmpresa.png" alt="Logo" class="company-logo" />
      <h2 class="logo">Merca<span class="highlight">Bit</span></h2>
    </div>

    <!-- Lista del menú con scroll -->
    <nav class="menu-list">
      <RouterLink to="/home" class="menu-item">
        <Icon icon="ion:home-outline" class="icon" />
        <span>Inicio</span>
      </RouterLink>
      <RouterLink to="/buscar" class="menu-item">
        <Icon icon="ion:search-outline" class="icon" />
        <span>Buscar</span>
      </RouterLink>
      <RouterLink to="/Notification" class="menu-item">
        <Icon icon="ion:notifications-outline" class="icon" />
        <span>Notificaciones</span>
      </RouterLink>
      <RouterLink to="/mis-compras" class="menu-item">
        <Icon icon="ion:cart-outline" class="icon" />
        <span>Mis Compras</span>
      </RouterLink>
      <RouterLink to="/ofertas-realizadas" class="menu-item">
        <Icon icon="ion:checkmark-circle-outline" class="icon" />
        <span>Ofertas realizadas</span>
      </RouterLink>
      <RouterLink to="/agregar-producto" class="menu-item">
        <Icon icon="ion:add-outline" class="icon" />
        <span>Agregar producto</span>
      </RouterLink>
      <RouterLink to="/mis-publicaciones" class="menu-item">
        <Icon icon="ion:bag-check-outline" class="icon" />
        <span>Mis publicaciones</span>
      </RouterLink>
      <RouterLink to="/categorias" class="menu-item">
        <Icon icon="ion:folder-outline" class="icon" />
        <span>Categorías</span>
      </RouterLink>
      <RouterLink to="/mi-cuenta" class="menu-item">
        <Icon icon="ion:person-outline" class="icon" />
        <span>Mi Cuenta</span>
      </RouterLink>
      <RouterLink to="/accerca-de-la-app" class="menu-item">
        <Icon icon="ion:information-circle-outline" class="icon" />
        <span>Acerca de la App</span>
      </RouterLink>
    </nav>

    <!-- Sección inferior fija -->
    <div class="bottom-section">
      <div class="user-section">
        <img :src="userPhoto" alt="Usuario" class="user-avatar" />
        <p class="user-name">{{ userName }}</p>
      </div>

      <button class="logout-button" @click="logout">
        <Icon icon="ion:log-out-outline" class="icon" />
        Cerrar sesión
      </button>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'

const router = useRouter()
const userName = ref('Usuario Ejemplo')
const userPhoto = ref('/img/user.png')

const logout = () => {
  console.log('Sesión cerrada')
  router.push('/login')
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 220px;
  background: #000;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
  z-index: 1000;
}

.menu-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
}

.company-logo {
  width: 40px;
  margin-right: 10px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.highlight {
  color: #a64aff;
}

.menu-list {
  flex: 1;
  overflow-y: auto;
  padding-right: 5px;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 12px;
  color: white;
  text-decoration: none;
  transition: background 0.2s;
}

.menu-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.icon {
  margin-right: 10px;
  font-size: 1.2rem;
}

/* Sección inferior */
.bottom-section {
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.user-section {
  text-align: center;
  padding: 20px 10px;
}

.user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid white;
  margin-bottom: 10px;
}

.user-name {
  font-size: 1.2rem;
  color: white;
}

.logout-button {
  background: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 8px;
  height: 35px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  cursor: pointer;
  padding: 0 10px;
}
</style>

<template>
    <div class="menu-header">
        <img src="/img/LogoEmpresa.png" alt="Logo" class="company-logo" />
        <h2 class="logo">Merca<span class="highlight">Bit</span></h2>
        <h3 class="page-title">{{ pageTitle }}</h3>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Mapeo de rutas a títulos
const pageTitle = computed(() => {
  const titles = {
    '/home': 'Inicio',
    '/accerca-de-la-app': 'Acerca de la App',
    '/mi-cuenta': 'Mi Cuenta',
    '/categorias': 'Categorías',
    '/mis-publicaciones': 'Publicaciones',
    '/agregar-producto': 'Agregar Producto',
    '/ofertas-realizadas': 'Ofertas Realizadas',
    '/mis-compras': 'Mis Compras',
    '/Notification': 'Notificaciones',
    '/buscar': 'Buscar',
    '/terminos-condiciones': 'Términos y Condiciones',
  }

  return titles[route.path] || ''
})
</script>

<style setup>
/* Contenedor flex para el logo y el texto */
.menu-header {
    display: flex;
    align-items: center; /* Alinea los elementos verticalmente */
    justify-content: center; /* Centra horizontalmente */
    flex-wrap: nowrap; /* Evita que el texto salte a otra línea */
    padding: 10px 10px;
}

.highlight {
    color: #a64aff; /* Color morado para "Bit" */
}

/* Imagen del logo con altura fija */
.company-logo {
    width: 90px; /* Ajusta según necesites */
    height: auto;
    max-height: 120px; /* Para evitar que crezca demasiado */
    display: block;
    margin-right: 10px; /* Espacio entre el logo y el texto */
    background: none;
    mix-blend-mode: normal; /* Evita que el logo se mezcle con el fondo */
}

/* Estilos para el texto "MercaBit" */
.logo,
.page-title {
  margin: 0 10px;
  white-space: nowrap; /* Evita saltos de línea */
}

.page-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0; /* Elimina el espacio inferior */
}

</style>

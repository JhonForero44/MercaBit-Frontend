<template>
    <div class="layout">
      <HeaderLogo />
      <main class="main-content">
        <router-view />
      </main>
      <footer>
        <div class="footer-content">
          <p>MercaBit &copy; 2025 Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import HeaderLogo from '@/components/HeaderLogo.vue';
  
  </script>
  
  <style scoped>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    /* Hace que ocupe toda la altura */
  }
  
  .main-content {
    flex: 1;
    /* Empuja el footer hacia abajo */
  }
  
  /* Footer */
  footer {
    padding: 10px 0;
    text-align: center;
    animation: fadeIn 1.5s ease-in-out;
    background-color: #f8f8f8;
  }
  
  .footer-content p {
    margin: 5px 0;
    font-size: 16px;
    opacity: 0.9;
  }
  </style>
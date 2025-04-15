<template>
  <div class="page">
    <main class="container">
      <div class="login-card">
        <div class="logo">
          <img src="/img/LogoEmpresa.png" alt="Logo">
        </div>
        <h2 class="textTitulo">Merca<span class="highlight">Bit</span></h2>
        <p class="version-text">Versión 1.0</p>
        <p class="footer-text">Copyright ® 2025 MercaBit</p>
        <p class="footer-text">Cali, Colombia</p>
        <DesignButton class="DesignButton-TermCond" @click="goToTermCond">Términos y Condiciones</DesignButton>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import DesignButton from '@/components/DesignButton.vue';

const router = useRouter();

const goToTermCond = () => {
  router.push('/terminos-condiciones');
};
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
}

.login-card {
  width: 90%;
  max-width: 400px;
  padding: 20px;
  text-align: center;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

.version-text {
  margin-bottom: 30px;
  color: #444;
  font-size: 0.95rem;
}

.footer-text {
  margin-top: 4px;
  color: #666;
  font-size: 0.85rem;
  line-height: 1.2;
}

.DesignButton-TermCond {
  background-color: #252E8D;
}

.textTitulo {
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  white-space: nowrap;
}

.highlight {
  color: #a64aff;
}

.logo img {
  width: 120px;
  height: auto;
}
</style>

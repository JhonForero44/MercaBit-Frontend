<template>
  <div class="register-container">
    <div class="register-card">
      <div class="header">
          <h1>Recuperar Constraseña</h1>
        </div>

      <p>Ingresa tu correo para restablecer tu contraseña</p>

      <CustomInput v-model="email" placeholder="Tu correo" type="email" />

      <DesignButton :onClick="handleReset" :disabled="loading" class="DesignButton-Enviar-Correo">
        <span v-if="!loading">Enviar</span>
        <span v-else class="spinner">Cargando...</span>
      </DesignButton>

      <p v-if="mensaje" class="mensaje-simple">{{ mensaje }}</p>

      <p class="login-text">
        ¿Ya tienes una cuenta? <br />
        <span style="color: #0066cc;">Inicia sesión </span>
        <a href="#" @click.prevent="goToLogin">
          <b style="color: #0066cc;">Aquí</b>
        </a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CustomInput from '@/components/CustomInput.vue'; // ajusta la ruta si está en otro lugar
import DesignButton from '@/components/DesignButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
// Reemplazo de "data()"
const email = ref('')
const mensaje = ref('')
const loading = ref(false)

// Reemplazo de "methods"
const handleReset = () => {
  loading.value = true
  setTimeout(() => {
    mensaje.value = 'Correo de recuperación enviado.'
    loading.value = false
  }, 1500)
}

const goToLogin = () => {
  router.push('/login')
}
</script>

<style scoped>

.header {
  text-align: center;
  font-size: 15px;
}

.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto 0;
}

.register-card {
  width: 90%;
  max-width: 400px;
  padding: 20px;
  text-align: center;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

.DesignButton-Enviar-Correo {
  background-color: #258D60;
}

.DesignButton-Enviar-Correo:hover {
  background-color: #30a773;
}

.spinner {
  font-size: 14px;
}

.login-text {
  margin-top: 10px;
  color: #000;
  font-size: 14px;
}

.mensaje-simple {
  margin-top: 12px;
  font-size: 14px;
  color: #000;
  text-align: center;
}
</style>

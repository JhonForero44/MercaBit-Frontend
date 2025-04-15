<template>
  <div class="register-container">
    <div class="register-card">
      <div class="header">
        <h1>Registro</h1>
      </div>
      <p>Registro, crea tu cuenta MercaBit</p>

      <CustomInput v-model="name" placeholder="Nombre" type="text" />
      <CustomInput v-model="email" placeholder="Tu correo" type="email" />
      <CustomInput v-model="cedula" placeholder="Cedula" type="text" />
      <PasswordInput v-model="password" placeholder="Ingresa una contraseña segura" type="password" />

      <DesignButton :onClick="register" :disabled="loading" class="DesignButton-Register">
        <span v-if="!loading">Crear cuenta</span>
        <span v-else>Cargando...</span>
      </DesignButton>

      <p class="login-text">
        ¿Ya tienes una cuenta? <br />
        <span style="color: #0066cc;">Inicie sesión </span>
        <a href="#" @click.prevent="goToLogin">
          <b style="color: #0066cc;">Aquí</b>
        </a>
      </p>

      <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CustomInput from '@/components/CustomInput.vue'
import PasswordInput from '@/components/PasswordInput.vue'
import DesignButton from '@/components/DesignButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const name = ref('')
const cedula = ref('')
const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')

const register = async () => {
  loading.value = true
  try {
    // Tu lógica de registro aquí
    console.log('Registrando:', name.value, cedula.value, email.value)
    // Simulación de éxito
    loading.value = false
  } catch (err) {
    errorMessage.value = 'Error al registrar la cuenta'
    loading.value = false
  }
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

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.logo img {
  width: 120px;
  height: auto;
}

.DesignButton-Register {
  background-color: #258D60;
}

.DesignButton-Register:hover {
  background-color: #30a773;
}

.login-text {
  margin-top: 10px;
  color: #000;
  font-size: 14px;
}

.error-message {
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
  color: red;
}
</style>
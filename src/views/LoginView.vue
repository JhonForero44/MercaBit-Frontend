<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-card">
        <div class="header">
          <h1>Inicio de Sesión</h1>
        </div>

        <CustomInput v-model="email" placeholder="Correo electrónico" type="email" />
        <CustomInput v-model="password" placeholder="Ingresa tu contraseña" type="password" />
        <DesignButton :label="'Ingresar'" :onClick="goToIngresar" class="DesignButton-Ingresar">
          <span v-if="!loading">Ingresar</span>
          <span v-else>Cargando...</span>
        </DesignButton>

        <p class="link" @click="goToRecuperarContraseña">Olvidé mi contraseña</p>
        <p class="register-text">¿No tienes una cuenta?</p>
        <DesignButton :label="'Crea una Cuenta'" :onClick="goToRegister" class="DesignButton-Register">
          <span v-if="!loading">Crear cuenta</span>
          <span v-else>Cargando...</span>
        </DesignButton>

        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import CustomInput from '@/components/CustomInput.vue'
import DesignButton from '@/components/DesignButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToIngresar =() => {
  router.push('/home')
}
const goToRegister = () => {
  router.push('/registro')
}

const goToRecuperarContraseña = () => {
  router.push('/recuperar-contrasena')
}

</script>

<style scoped>

.header {
  text-align: center;
  font-size: 15px;
}

.login-page {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto 0;
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

.custom-input {
  width: 80%;
  height: 50px;
  font-size: 16px;
  margin-bottom: 15px;
  padding: 0 15px;
  border-radius: 25px;
  border: 1px solid #ccc;
  background: #cacaca;
  color: black;
}

.DesignButton-Ingresar {
  background-color: #258D60;
}

.DesignButton-Ingresar:hover {
  background-color: #30a773;
}

.DesignButton-Register {
  background-color: #252E8D;
}

.DesignButton-Register:hover {
  background-color: #0056b3;
}

.link {
  text-decoration: underline;
  color: #1e90ff;
  cursor: pointer;
  margin-top: 10px;
}

.register-text {
  margin-top: 10px;
  color: #000;
}

.error-message {
  color: #000;
  margin-top: 10px;
}
</style>

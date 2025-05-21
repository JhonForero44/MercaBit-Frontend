<template>
  <div>
    <h2>Restablecer Contraseña</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="newPassword">Nueva Contraseña:</label>
        <input v-model="newPassword" type="password" id="newPassword" placeholder="Introduce tu nueva contraseña" required />
      </div>
      <button type="submit">Restablecer Contraseña</button>
    </form>
    <p v-if="message" :class="messageClass">{{ message }}</p>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      newPassword: '',  // Almacena la nueva contraseña
      message: '',      // Mensaje de éxito o error
      messageClass: '', // Clase para controlar el estilo del mensaje
    };
  },
  methods: {
    async handleSubmit() {
      const token = this.$route.query.token; // Extraer el token de la URL
      if (!token || !this.newPassword) {
        this.message = 'Faltan datos.';
        this.messageClass = 'error';
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/auth/reset-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token, newPassword: this.newPassword }),  // Enviar el token y la nueva contraseña
        });

        const data = await response.json();
        if (response.ok) {
          this.message = 'Contraseña restablecida con éxito';
          this.messageClass = 'success';
        } else {
          this.message = data.message || 'Error al restablecer la contraseña.';
          this.messageClass = 'error';
        }
      } catch (error) {
        this.message = 'Error al procesar la solicitud.';
        this.messageClass = 'error';
      }
    },
  },
};
</script>

<style scoped>
/* Estilos del formulario */
form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

button {
  background-color: #258D60;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
}

button:hover {
  background-color: #30a773;
}

.error {
  color: red;
}

.success {
  color: green;
}
</style>

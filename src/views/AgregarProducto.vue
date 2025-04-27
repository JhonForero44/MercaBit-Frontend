<template>
  <div class="agregar-producto">
    <h1>Crear Producto</h1>
    <form @submit.prevent="crearProducto">

      <section class="seccion">
        <h2>Información Básica</h2>

        <div class="form-group">
          <label>Nombre</label>
          <input v-model="producto.nombre" type="text" required placeholder="Ingrese el nombre del producto" />
        </div>

        <div class="form-group">
          <label>Categoría</label>
          <select v-model="producto.categoria" required>
            <option disabled value="">Seleccione una categoría</option>
            <option value="carros">Carros</option>
            <option value="motos">Motos</option>
            <option value="inmobiliaria">Inmobiliaria</option>
            <option value="construccion">Construcción</option>
            <option value="botes">Botes</option>
            <option value="otra">Otra categoría</option>
          </select>
        </div>

        <div v-if="producto.categoria === 'otra'" class="form-group">
          <label>Nueva Categoría</label>
          <input v-model="producto.nuevaCategoria" type="text" placeholder="Ingrese nueva categoría" />
        </div>

        <div class="form-group">
          <label>Descripción del producto</label>
          <textarea v-model="producto.descripcion" required placeholder="Describe tu producto"></textarea>
        </div>

        <div class="form-group">
          <label>URL de la Foto</label>
          <input v-model="producto.fotoUrl" type="text" placeholder="Pega la URL de la imagen" />
        </div>

      </section>

      <section class="seccion">
        <h2>Fechas</h2>

        <div class="fecha-hora">
          <div class="form-group">
            <label>Fecha de Apertura</label>
            <input type="text" :value="mostrarFecha(producto.fechaApertura)" placeholder="Seleccione fecha" @focus="mostrarCalendarioApertura = true" readonly />
            <input v-if="mostrarCalendarioApertura" type="date" v-model="producto.fechaApertura" @blur="mostrarCalendarioApertura = false" />
          </div>

          <div class="form-group">
            <label>Hora de Apertura</label>
            <select v-model="producto.horaApertura" required>
              <option disabled value="">Seleccione hora</option>
              <option v-for="hora in horasDisponibles" :key="hora" :value="hora">{{ hora }}:00</option>
            </select>
          </div>
        </div>

        <div class="fecha-hora">
          <div class="form-group">
            <label>Fecha de Cierre</label>
            <input type="text" :value="mostrarFecha(producto.fechaCierre)" placeholder="Seleccione fecha" @focus="mostrarCalendarioCierre = true" readonly />
            <input v-if="mostrarCalendarioCierre" type="date" v-model="producto.fechaCierre" @blur="mostrarCalendarioCierre = false" />
          </div>

          <div class="form-group">
            <label>Hora de Cierre</label>
            <select v-model="producto.horaCierre" required>
              <option disabled value="">Seleccione hora</option>
              <option v-for="hora in horasDisponibles" :key="hora" :value="hora">{{ hora }}:00</option>
            </select>
          </div>
        </div>
      </section>

      <section class="seccion">
        <h2>Precios</h2>

        <div class="form-group">
          <label>Precio Base (COP)</label>
          <input type="number" min="0" step="0.01" v-model="producto.precioBase" />
        </div>

        <div class="form-group">
          <label>Precio Venta Inmediata (COP)</label>
          <input type="number" min="0" step="0.01" v-model="producto.precioVentaInmediata" />
        </div>
      </section>

      <div class="form-group botones">
        <button type="button" class="btn-cancelar" @click="cancelar">Cancelar</button>
        <button type="submit" :disabled="!formularioValido" class="btn-agregar">Agregar Producto</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const producto = ref({
  nombre: '',
  categoria: '',
  nuevaCategoria: '',
  descripcion: '',
  fotoUrl: '',
  fechaApertura: '',
  horaApertura: '',
  fechaCierre: '',
  horaCierre: '',
  precioBase: null,
  precioVentaInmediata: null
});

const mostrarCalendarioApertura = ref(false);
const mostrarCalendarioCierre = ref(false);

const horasDisponibles = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));

const formularioValido = computed(() => {
  const catValida = producto.value.categoria !== 'otra' ||
    (producto.value.categoria === 'otra' && producto.value.nuevaCategoria.trim() !== '');

return  producto.value.nombre &&
        producto.value.categoria &&
        catValida &&
        producto.value.descripcion &&
        producto.value.fotoUrl &&
        producto.value.fechaApertura &&
        producto.value.horaApertura &&
        producto.value.fechaCierre &&
        producto.value.horaCierre &&
        producto.value.precioBase !== null &&
        producto.value.precioVentaInmediata !== null;
});



const mostrarFecha = (fechaStr) => {
  if (!fechaStr) return '';
  const [year, month, day] = fechaStr.split('-');
  return `${day}/${month}/${year}`;
};

const cancelar = () => {
  producto.value = {
    nombre: '',
    categoria: '',
    nuevaCategoria: '',
    descripcion: '',
    fotoUrl: '',
    fechaApertura: '',
    horaApertura: '',
    fechaCierre: '',
    horaCierre: '',
    precioBase: null,
    precioVentaInmediata: null
  };
  router.push('/home');
};

const crearProducto = async () => {
  console.log("Producto a guardar:", producto.value);
  cancelar();
  router.push('/mis-publicaciones');
};
</script>


<style scoped>
.agregar-producto {
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.seccion {
  margin-bottom: 2rem;
}

h1, h2 {
  text-align: center;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
}

input, select, textarea {
  padding: 0.6rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

textarea {
  min-height: 80px;
}

.fecha-hora {
  display: flex;
  gap: 1rem;
}

.botones {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;
}

button {
  flex: 1;
  padding: 0.8rem;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  transition: background 0.3s;
}

.btn-cancelar {
  background-color: #f44336;
  color: white;
}

.btn-cancelar:hover {
  background-color: #d32f2f;
}

.btn-agregar {
  background-color: #4caf50;
  color: white;
}

.btn-agregar:hover {
  background-color: #388e3c;
}

.fecha-hora {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Dos columnas iguales */
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.fecha-hora .form-group {
  flex: 1;
}

.fecha-hora input,
.fecha-hora select {
  width: 100%;
}
</style>

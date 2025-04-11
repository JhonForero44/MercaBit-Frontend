<template>
    <div class="agregar-producto">
      <h1>Crear Producto</h1>
      <form @submit.prevent="crearProducto">
  
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
          <label>Fotos</label>
          <input type="file" multiple accept="image/*" @change="cargarImagenes" />
        </div>
  
        <h3>Fechas</h3>
  
        <div class="form-group">
          <label>Fecha de Apertura</label>
          <input
            type="text"
            :value="mostrarFecha(producto.fechaApertura)"
            placeholder="Seleccione fecha"
            @focus="mostrarCalendarioApertura = true"
            readonly
          />
          <input
            v-if="mostrarCalendarioApertura"
            type="date"
            v-model="producto.fechaApertura"
            @blur="mostrarCalendarioApertura = false"
          />
        </div>
  
        <div class="form-group">
          <label>Hora de Apertura</label>
          <select v-model="producto.horaApertura" required>
            <option disabled value="">Seleccione hora</option>
            <option v-for="hora in horasDisponibles" :key="hora" :value="hora">{{ hora }}:00</option>
          </select>
        </div>
  
        <div class="form-group">
          <label>Fecha de Cierre</label>
          <input
            type="text"
            :value="mostrarFecha(producto.fechaCierre)"
            placeholder="Seleccione fecha"
            @focus="mostrarCalendarioCierre = true"
            readonly
          />
          <input
            v-if="mostrarCalendarioCierre"
            type="date"
            v-model="producto.fechaCierre"
            @blur="mostrarCalendarioCierre = false"
          />
        </div>
  
        <div class="form-group">
          <label>Hora de Cierre</label>
          <select v-model="producto.horaCierre" required>
            <option disabled value="">Seleccione hora</option>
            <option v-for="hora in horasDisponibles" :key="hora" :value="hora">{{ hora }}:00</option>
          </select>
        </div>
  
        <h3>Precios</h3>
        <div class="form-group">
          <label>Precio Base (COP)</label>
          <input type="number" min="0" step="0.01" v-model="producto.precioBase" />
        </div>
  
        <div class="form-group">
          <label>Precio Venta Inmediata (COP)</label>
          <input type="number" min="0" step="0.01" v-model="producto.precioVentaInmediata" />
        </div>
  
        <div class="form-group botones">
          <button type="button" @click="cancelar">Cancelar</button>
          <button type="submit" :disabled="!formularioValido">Agregar Producto</button>
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
    fotos: [],
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
  
    return producto.value.nombre &&
           producto.value.categoria &&
           catValida &&
           producto.value.descripcion &&
           producto.value.fechaApertura &&
           producto.value.horaApertura &&
           producto.value.fechaCierre &&
           producto.value.horaCierre &&
           producto.value.precioBase !== null &&
           producto.value.precioVentaInmediata !== null;
  });
  
  const cargarImagenes = (e) => {
    const archivos = Array.from(e.target.files);
    producto.value.fotos = archivos;
  };
  
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
      fotos: [],
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
    // Lógica para guardar producto
    // Aquí irá la lógica de Firebase o backend
    console.log("Producto a guardar:", producto.value);
  
    // Reset
    cancelar();
    router.push('/mis-publicaciones');
  };
  </script>
  
  <style scoped>
  .agregar-producto {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .form-group {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
  }
  
  input, select, textarea {
    padding: 0.5rem;
    font-size: 1rem;
  }
  
  .botones {
    display: flex;
    gap: 1rem;
  }
  </style>
  
<template>
    <div class="mis-publicaciones">
      <h1>Mis Publicaciones</h1>
  
      <div v-if="productos.length > 0" class="lista-productos">
        <div v-for="producto in productos" :key="producto.id" class="producto-card">
          <h2>{{ producto.nombre }}</h2>
          <p><strong>Categoría:</strong> {{ producto.categoria }}</p>
          <p><strong>Precio base:</strong> {{ producto.precioBase }} COP</p>
          <p><strong>Venta inmediata:</strong> {{ producto.precioVentaInmediata }} COP</p>
          <p><strong>Desde:</strong> {{ formatearFecha(producto.fechaApertura) }}</p>
          <p><strong>Hasta:</strong> {{ formatearFecha(producto.fechaCierre) }}</p>
          <p><strong>Publicado:</strong> {{ formatearFechaHora(producto.creadoEn) }}</p>
  
          <div class="botones">
            <button @click="marcarComoVendido(producto.id)">Vendido</button>
            <button @click="eliminarProducto(producto.id)">Borrar</button>
          </div>
        </div>
      </div>
  
      <p v-else>No tienes productos publicados aún.</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const productos = ref([
    {
      id: "1",
      nombre: "Martillo eléctrico",
      categoria: "Construcción",
      precioBase: 50000,
      precioVentaInmediata: 100000,
      fechaApertura: "2025-04-12",
      fechaCierre: "2025-04-14",
      creadoEn: new Date().toISOString()
    },
    {
      id: "2",
      nombre: "Moto Yamaha",
      categoria: "Motos",
      precioBase: 3000000,
      precioVentaInmediata: 5000000,
      fechaApertura: "2025-04-13",
      fechaCierre: "2025-04-20",
      creadoEn: new Date().toISOString()
    }
  ]);
  
  // --- Firebase COMENTADO ---
  // import { db, auth } from '../firebase/FirebaseConfig';
  // import { collection, query, where, getDocs, doc, deleteDoc } from 'firebase/firestore';
  
  // const cargarMisProductos = async () => {
  //   const user = auth.currentUser;
  //   if (!user) return;
  
  //   try {
  //     const q = query(collection(db, 'products'), where('userId', '==', user.uid));
  //     const querySnapshot = await getDocs(q);
  //     productos.value = querySnapshot.docs.map(doc => ({
  //       id: doc.id,
  //       ...doc.data()
  //     }));
  //   } catch (error) {
  //     console.error("Error al cargar productos:", error);
  //   }
  // };
  
  const eliminarProducto = (id) => {
    productos.value = productos.value.filter(p => p.id !== id);
  };
  
  const marcarComoVendido = (id) => {
    productos.value = productos.value.filter(p => p.id !== id);
  };
  
  const formatearFecha = (fecha) => {
    if (!fecha) return '';
    const [y, m, d] = fecha.split('-');
    return `${d}/${m}/${y}`;
  };
  
  const formatearFechaHora = (fecha) => {
    if (!fecha) return '';
    const f = new Date(fecha);
    return f.toLocaleString('es-CO');
  };
  
  onMounted(() => {
    // cargarMisProductos(); // <--- Comentado para evitar errores
  });
  </script>
  
  <style scoped>
  .mis-publicaciones {
    max-width: 800px;
    margin: auto;
    padding: 2rem;
  }
  
  .lista-productos {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .producto-card {
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 10px;
    background-color: #f9f9f9;
  }
  
  .botones {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
  }
  
  button {
    padding: 0.5rem 1rem;
    font-weight: bold;
    cursor: pointer;
    border: none;
    border-radius: 5px;
  }
  
  button:first-child {
    background-color: #28a745;
    color: white;
  }
  
  button:last-child {
    background-color: #dc3545;
    color: white;
  }
  </style>
  
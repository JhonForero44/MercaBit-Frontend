<template>
    <div class="ofertas-container">
      <h1>Ofertas Realizadas</h1>
  
      <div class="subasta-info card">
        <p><strong>Subasta ID:</strong> subasta1</p>
        <p><strong>Oferta más alta:</strong> ${{ highestBid }}</p>
      </div>
  
      <div class="formulario-oferta card">
        <input v-model.number="nuevaOferta" type="number" placeholder="Ingresa tu oferta" />
        <button @click="realizarOferta">Ofertar</button>
      </div>
  
      <h2>Historial de Ofertas</h2>
      <div class="historial">
        <div
          v-for="(oferta, index) in historial"
          :key="index"
          class="oferta-card card"
        >
          <p><strong>{{ oferta.usuario }}</strong> ofertó: ${{ oferta.cantidad }}</p>
          <p><em>Fecha:</em> {{ oferta.fecha }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Comentado por ahora ya que aún no hay backend
  // import { onMounted } from 'vue'
  
  import { ref } from 'vue'
  
  const highestBid = ref(1000)
  const nuevaOferta = ref(null)
  
  const historial = ref([
    {
      usuario: 'Ana',
      cantidad: 1000,
      fecha: '2025-04-11 10:00',
    }
  ])
  
  const realizarOferta = () => {
    if (nuevaOferta.value && nuevaOferta.value > highestBid.value) {
      highestBid.value = nuevaOferta.value
      historial.value.unshift({
        usuario: 'Tú',
        cantidad: nuevaOferta.value,
        fecha: new Date().toISOString().slice(0, 16).replace('T', ' ')
      })
      nuevaOferta.value = null
    } else {
      alert('La oferta debe ser mayor a la oferta más alta actual.')
    }
  }
  </script>
  
  <style scoped>
  .ofertas-container {
    max-width: 600px;
    margin: 2rem auto;
    padding: 1rem;
    font-family: 'Arial', sans-serif;
  }
  
  h1, h2 {
    color: #333;
    text-align: center;
  }
  
  .card {
    background-color: #f4f4f4;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .card:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
  
  input[type="number"] {
    padding: 0.5rem;
    margin-right: 0.5rem;
    width: 60%;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  button {
    padding: 0.5rem 1rem;
    background-color: #9f6dfd;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
  }
  
  button:hover {
    background-color: #7a4de0;
  }
  
  .historial {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  </style>
  
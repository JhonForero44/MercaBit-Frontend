<template>
    <div class="tarjeta-producto" @click="irADetalles">
        <img :src="producto.imagen_producto || '/img/imagen-prueba.jpg'" alt="Imagen del producto" />

        <div class="contenido">
            <h2 class="titulo">{{ producto.titulo }}</h2>
            <p class="categoria">{{ producto.categoria_nombre }}</p>

            <div class="producto-info">
                <p><strong>Precio base:</strong> {{ formatoMoneda(producto.precio_inicial) }} COP</p>
                <p><strong>Venta inmediata:</strong> {{ formatoMoneda(producto.precio_compra_inmediata) }} COP</p>
                <p><strong>Disponible hasta:</strong> {{ formatoFecha(producto.fecha_finalizacion) }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
/* eslint-disable no-undef */
import { useRouter } from 'vue-router'

const props = defineProps({
    producto: {
        type: Object,
        required: true
    }
})

const router = useRouter()

function irADetalles() {
    router.push(`/producto/${props.producto.subasta_id}`) // Redirige a la ruta del detalle del producto
}

// Formatear Moneda
function formatoMoneda(valor) {
  if (!valor || isNaN(valor)) {
    return ''
  }

  return Number(valor).toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  });
}

// Formatea la fecha para que se muestre de manera legible
function formatoFecha(fecha) {
    try {
        const date = typeof fecha?.toDate === 'function' ? fecha.toDate() : new Date(fecha)
        return date.toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
    } catch (e) {
        return 'Fecha no disponible'
    }
}
</script>

<style scoped>
.tarjeta-producto {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    background-color: #fff;
}

.tarjeta-producto:hover {
    transform: scale(1.02);
}

img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.contenido {
    padding: 16px;
}

.titulo {
    font-size: 1.3em;
    margin-bottom: 4px;
}

.categoria {
    font-size: 1em;
    color: #666;
    margin-bottom: 12px;
}

.producto-info p {
    margin: 4px 0;
}
</style>
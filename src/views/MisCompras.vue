<template>
  <div class="mis-compras-container">
    <!-- Iteramos sobre las compras agrupadas por fecha -->
    <div v-for="(grupo, nombreProducto) in comprasAgrupadas" :key="nombreProducto" class="grupo-compra">
      <!-- Cabecera de fecha -->
      <div class="fecha-header">
        {{ nombreProducto }}
      </div>
      
      <!-- Tarjeta de compra -->
      <div v-for="compra in grupo" :key="compra.id" class="tarjeta-compra">
        <div class="contenido-tarjeta">
          <!-- Imagen del producto -->
          <div class="imagen-producto">
            <img :src="compra.imagen" alt="Imagen del producto" />
          </div>
          
          <!-- Información de la compra -->
          <div class="info-compra">
            <!-- Estado de la compra -->
            <div class="estado-compra entregado" >
              Entregado
            </div>
            
            <!-- Mensaje adicional -->
            <div class="mensaje-adicional">
              <span v-if="compra.estado === 'entregado'">
                Adquirido el {{ compra.fechaEntrega }}
              </span>
            </div>
            
            
            <!-- Nombre del producto -->
            <div class="nombre-producto">
              {{ compra.descripcionProducto }}
            </div>
            
            <!-- Cantidad -->
            <div class="cantidad">
            Aqui va la categoría
            </div>
          </div>
          
          <!-- Sección de tienda -->
          <div class="seccion-tienda">
            <div class="nombre-tienda">
              <span v-if="compra.tiendaOficial" class="badge-tienda-oficial">
                <i class="fas fa-check-circle"></i>
              </span>
              {{ compra.nombreTienda }}
            </div>
            <div class="tienda-subinfo">
              {{ compra.infoVendedor }}
            </div>
          </div>
          
          <!-- Sección de botones -->
          <div class="seccion-botones">
            <button class="btn btn-primary"  @click="verCompra(compra.id)">Ver compra</button> <!--Aqui va el id de la tarjeta del producto-->
            
            <button class="btn btn-secondary"  @click="volverAComprar">Volver a comprar</button> <!--Redirige a HomeView.vue-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MisCompras',
  data() {
    return {
      compras: [
        {
          id: 1,
          nombreProducto: 'Moto kawasaki (Nombre producto 1)',
          fechaEntrega: '19 de abril',
          estado: 'entregado',
          descripcionProducto: 'Kawasaki ninja h2r 0km color negro Bogotá (Descripcion del producto1)',
          cantidad: 1,
          imagen: '',
          nombreTienda: 'Nombre del vendedor 1',
          tiendaOficial: true,
          infoVendedor: 'Aqui va informacion del vendedor puede ser eliminadda'
        },
        {
          id: 2,
          nombreProducto: 'Moto BMW (Nombre producto 2)',
          fechaEntrega: '2 de mayo',
          estado: 'entregado',
          descripcionProducto: 'BMW S1000RR 1000CC 0KM COLOR BLANCO (Descripcion del producto2)',
          cantidad: 1,
          imagen: '/img/memoria-ram.jpg',
          nombreTienda: 'Nombre del vendedor 2',
          tiendaOficial: true,
          infoVendedor: 'Aqui va informacion del vendedor puede ser eliminadda'
        }
      ]
    }
  },
  computed: {
    comprasAgrupadas() {
      // Agrupar compras por nombre del producto
      const grupos = {};
      this.compras.forEach(compra => {
        if (!grupos[compra.nombreProducto]) {
          grupos[compra.nombreProducto] = [];
        }
        grupos[compra.nombreProducto].push(compra);
      });
      return grupos;
    }
  },
  methods: {
    verCompra(id) {
      // Implementar lógica para ver detalles de la compra
      console.log('Ver detalles de la compra con ID:', id);
    },
    volverAComprar() {
      // Redireccionar a la página de inicio
      this.$router.push('/home');
    }
  }
}
</script>

<style scoped>
.mis-compras-container {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
}

.grupo-compra {
  margin-bottom: 16px;
  border-radius: 4px;
  overflow: hidden;
}

.fecha-header {
  padding: 12px 16px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
  font-size: 14px;
  color: #333;
}

.tarjeta-compra {
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  margin-bottom: 16px;
}

.contenido-tarjeta {
  display: flex;
  padding: 16px;
  position: relative;
}

.imagen-producto {
  width: 80px;
  height: 80px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.imagen-producto img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.info-compra {
  flex-grow: 1;
  padding-right: 16px;
}

.estado-compra {
  font-weight: bold;
  margin-bottom: 4px;
}

.estado-compra.entregado {
  color: #009900;
}

.mensaje-adicional {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
}

.info-devolucion {
  color: #666;
  font-size: 14px;
  margin-bottom: 12px;
}

.nombre-producto {
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
}

.cantidad {
  font-size: 14px;
  color: #666;
}

.seccion-tienda {
  width: 220px;
  padding: 0 16px;
  border-left: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
}

.nombre-tienda {
  font-size: 14px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
}

.badge-tienda-oficial {
  color: #2196f3;
  margin-right: 4px;
}

.tienda-subinfo {
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
}

.seccion-botones {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  width: 160px;
  padding-left: 16px;
}

.btn {
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  border: none;
  width: 100%;
}

.btn-primary {
  background-color: #2196f3;
  color: white;
}

.btn-secondary {
  background-color: #e3f2fd;
  color: #2196f3;
}

/* Responsive design */
@media (max-width: 768px) {
  .contenido-tarjeta {
    flex-direction: column;
  }
  
  .seccion-tienda {
    width: 100%;
    border-left: none;
    border-right: none;
    border-top: 1px solid #e0e0e0;
    padding: 16px 0;
    margin: 16px 0;
  }
  
  .seccion-botones {
    width: 100%;
    flex-direction: row;
    padding-left: 0;
  }
}
</style>
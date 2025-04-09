<template>
    <div class="menu-header">
        <img src="/img/LogoEmpresa.png" alt="Logo" class="company-logo" />
        <h2 class="logo">Merca<span class="highlight">Bit</span></h2>
    </div>
</template>

<style setup>
/* Contenedor flex para el logo y el texto */
.menu-header {
    display: flex;
    align-items: center; /* Alinea los elementos verticalmente */
    justify-content: center; /* Centra horizontalmente */
    flex-wrap: nowrap; /* Evita que el texto salte a otra línea */
    padding: 10px 10px;
}

.highlight {
    color: #a64aff; /* Color morado para "Bit" */
}

/* Imagen del logo con altura fija */
.company-logo {
    width: 90px; /* Ajusta según necesites */
    height: auto;
    max-height: 120px; /* Para evitar que crezca demasiado */
    display: block;
    margin-right: 10px; /* Espacio entre el logo y el texto */
    background: none;
    mix-blend-mode: normal; /* Evita que el logo se mezcle con el fondo */
}

/* Estilos para el texto "MercaBit" */
.logo {
    font-size: 1.5rem;
    font-weight: bold;
    white-space: nowrap;/* Evita que se divida en dos líneas */
}
</style>

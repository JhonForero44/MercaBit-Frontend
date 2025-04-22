<template>
    <div class="terms-container">
      <div class="header">
        <img class="logo" src="../../public/img/LogoEmpresa.png" alt="Mercabit Logo" />
        <h1>Términos y Condiciones</h1>
      </div>
      <div class="content">
        <h2>Resumen de términos y condiciones</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum magna non enim pharetra,
          nec lacinia leo hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Mauris in massa tempor elit aliquam volutpat. Vestibulum sit amet sapien tempor, vestibulum
          nisi eget, gravida felis. Nam tempor nisl vitae tellus faucibus viverra accumsan a magna. Praesent ornare
          lorem ac laoreet tortor porta ornare. Morbi interdum justo ac augue luctus sollicitudin. Cras at quam quam
          purus egestas bibendum sed at magna. Integer viverra interdum est posuere suscipit. Vestibulum auctor urna
          et posuere elit suscipit euismod. Cras posuere orci, dignissim et elit, at pellentesque metus. Praesent
          molestie urna. Morbi condimentum nulla ac magna semper blandit. Nulla neque metus non nulla dictum viverra
          quis quis felis. Suspendisse sodales sem sed leo pellentesque, sollicitudin mauris convallis. Nulla suscipit
          dignissim sollicitudin. Quisque lacinia lacus vi...
  
          <!-- Agregar más texto para hacer scroll -->
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TerminosCondiciones',
  };
  </script>
  
  <style scoped>
  .terms-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .logo {
    width: 100px;
    height: auto;
  }
  
  h1 {
    font-size: 24px;
    margin-top: 10px;
  }
  
  .content {
    font-size: 14px;
    line-height: 1.6;
    overflow-y: auto;
    max-height: 500px;
    padding-right: 10px;
  }
  
  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  </style>
  
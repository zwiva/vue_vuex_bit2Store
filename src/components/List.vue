<template>
  <div>
    <ul>
      <li v-for="juego in $store.state.juegos" :key="juego.codigo" :style="{'background-color': juego.color}">
        {{ juego.codigo }} | {{ juego.nombre }} | {{ juego.stock }} | {{ juego.precio}} 
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
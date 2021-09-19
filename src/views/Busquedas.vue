<template>
  <div>
    <h1>Búsquedas</h1>

    <section class="search__section">
      <h2>Filtro</h2>
    </section>

    <section class="search__section">
      <h2>Cantidad de juegos y stock total</h2>
      <p>Cantidad de juegos totales: {{ $store.state.juegos.length }}</p>
      <p>Stock total: {{ $store.getters.allStock }}</p>

    </section>

    <section class="search__section">
      <h2>Listado de juegos</h2>
      <List />
    </section>
  </div>
</template>

<script>
import List from "../components/List.vue";
export default {
  components: { List },
};
</script>

<style>
.search__section {
  text-align: start;
}
</style>
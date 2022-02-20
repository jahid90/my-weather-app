<template>
  <div id="app">
    <nav-component/>
    <div class='container'>
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavComponent from './components/NavComponent.vue'

export default {
  name: 'App',
  components: { NavComponent }
}
</script>

<style>
</style>

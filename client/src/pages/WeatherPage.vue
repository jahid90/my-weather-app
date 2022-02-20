<template>
  <div class="weather">
    <weather-form-component />
    <hr />
    <weather-details-component/>
  </div>
</template>

<script>
import WeatherDetailsComponent from '../components/WeatherDetailsComponent.vue'
import WeatherFormComponent from '../components/WeatherFormComponent.vue'

export default {
  name: 'WeatherPage',
  components: {
    WeatherFormComponent,
    WeatherDetailsComponent
  }
}
</script>

<style>
</style>

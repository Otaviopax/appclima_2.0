<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import { ref, onMounted } from 'vue'
import WeatherServices from '@/services/WeatherServices'
import router from '@/router';

const weatherData = ref(null)
onMounted(() => {
  function clicaNoBotao(lugar) {
    WeatherServices.getWeather(lugar)
    .then((response) => {
      weatherData.value = response.data

      if (weatherData.value != null) {
        router.push({ name: 'show', params: { local: weatherData.value.location.name } })
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const node = document.getElementById("cityinput");
        node.addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                if (document.getElementById('cityinput').value != null) {
                  clicaNoBotao(document.getElementById('cityinput').value)
                }
            }
  })
  const botao = document.querySelector('.botao-busca')
  botao.onclick = function() { clicaNoBotao(document.getElementById('cityinput').value) }

  WeatherServices.getWeather('Sao Paulo')
    .then((response) => {
      weatherData.value = response.data

      if (weatherData.value != null) {
        WeatherServices.displayData(weatherData)
      }
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  

  <main>
    <div class="container-principal">
      <a> </a>
      <div class="media-box">
        <div class="info">
          <div>
            <RouterLink :to="{ name: 'show',params: {local: 'Sao+Paulo'} }" id="link-cidade">
              <h2 class="cidade">Tempo em São Paulo</h2>
            </RouterLink>

            <p class="pais">São Paulo</p>
            <p class="dataHora">Dia: 9/04/2024 horas: 9:14</p>
          </div>
          <div>
            <p class="umidade-clima">Umidade: 76%</p>
          </div>
        </div>
        <div class="info-clima">
          <div class="menor-box">
            <img
              class="img-previsao"
              alt="icone-info-tempo"
              src="https://cdn.weatherapi.com/weather/64x64/night/389.png"
            />
          </div>
          <p class="texto-previsao">Chuva-forte</p>
          <p class="temp">21°C</p>
        </div>
      </div>

    </div>

  </main>
</template>

<style scoped>


.cidade {
  color: #000000;
  font-size: 26px;
  font-weight: 300;
}

.media-box {
  margin-top: 19px;
}

.umidade-clima {
    padding: 1rem;
    background-color: #a0c0e9;
    border-radius: 20px;
  }

main {
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: block;
  max-width:100vw;
  padding: 6%;
  border-radius: 16px;
  backdrop-filter: blur(11.6px);
  -webkit-backdrop-filter: blur(11.6px);
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.container-principal {
  margin-left: 1px;
}

main div.container-principal .media-box {
  transform: scale(1.1);
  background: linear-gradient(#77b6e9, #e6eff7);
  padding: 1rem;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

main div.container-principal .media-box .info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem 0;
}

main div.container-principal .media-box .info-clima {
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem 1rem 1rem 0.4rem;
  background-color: #a0c0e9;
  margin: 0.4rem;
  padding: 1rem;  
  border-radius: 20px;
} 
</style>

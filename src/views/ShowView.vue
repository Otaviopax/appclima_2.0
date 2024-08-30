<script setup>
import { ref, onMounted } from 'vue'
import WeatherServices from '@/services/WeatherServices'
import router from '@/router';

const props = defineProps({
  local: { required: true }
})


let local = props.local

const weatherData = ref(null)
const forecast = ref(null)
onMounted(() => {
  function clicaNoBotao(lugar) {
    WeatherServices.getWeather(lugar)
    .then((response) => {
      weatherData.value = response.data
      if (weatherData.value != null) {
        router.push({ name: 'show', params: { local: weatherData.value.location.name } })
        WeatherServices.displayDataShow(weatherData)
      }
    })
    .catch((error) => {
      console.log(error)
    })
    WeatherServices.getForecast(lugar)
    .then((response) => {
      forecast.value = response.data
      if (forecast.value != null) {
        WeatherServices.displayForecast(forecast)
      } 
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

  WeatherServices.getWeather(local)
    .then((response) => {
      weatherData.value = response.data
      if (weatherData.value != null) {
        WeatherServices.displayDataShow(weatherData)
      }
    })
    .catch((error) => {
      console.log(error)
    })
    
  WeatherServices.getForecast(local)
    .then((response) => {
      forecast.value = response.data
      if (forecast.value != null) { 
        WeatherServices.displayForecast(forecast)
      } 
    })
})
</script>
<p></p>
<template>
  <div>
    <section class="grade-grande">
      <section class="info-section">
        <h1 class="cidade" style="text-align: center">Previsão do Tempo Joinville - SC</h1>
        <div class="new-box" style="text-align: center">
          <span class="dataHora">10:50</span>
          <div class="info-display">
            <div class="temperatura">
              <p class="temp">21°C</p>
              <img
                class="img-previsao"
                alt="icone-info-tempo"
                src="https://cdn.weatherapi.com/weather/64x64/night/389.png"
              />
              <p class="texto-previsao">Chuva-forte</p>
            </div>
            <div>
              <p class="umidade">Umidade: 76%</p>
              <p class="vento">3km/h</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>

  <ul class="days-list">
    <li>
      <img
        class="imagem1"
        src="https://cdn.weatherapi.com/weather/64x64/night/113.png"
        alt="imagem-temp"
      />
      <span class="dia1"></span>
      <span class="dia1-temp">23C°</span>
      <span class="dia1-temp-min">23C°</span>
    </li>
    <li>
      <img
        class="imagem2"
        src="https://cdn.weatherapi.com/weather/64x64/night/113.png"
        alt="imagem-temp"
      />
      <span class="dia2"></span>
      <span class="dia2-temp">23C°</span>
      <span class="dia2-temp-min">23C°</span>
    </li>
    <li>
      <img
        class="imagem3"
        src="https://cdn.weatherapi.com/weather/64x64/night/113.png"
        alt="imagem-temp"
      />
      <span class="dia3"></span>
      <span class="dia3-temp">23C°</span>
      <span class="dia3-temp-min">23C°</span>
    </li>
  </ul>
</template>

<style>

.grade-grande {
  margin-top: 40px;
}

.cidade {
  font-weight: bold;
}

section .info-section {
  margin-left: auto;
  height: 300px;
  max-width: 600px;
  padding: 2rem;
  margin-right: auto;
  /* background-color: var(--fundo); */
  background: linear-gradient(#77b6e9, #e6eff7);
  border-radius: 30px;
  display: block;
  flex-direction: column;
  justify-content: center;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.days-list {
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  margin: 10px 35px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  border-radius: 20px;
  margin-top: 30px;
  background: linear-gradient(#9bcbf5, #aeb6be);
}

.days-list li {
  padding: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.days-list li .br {
  margin-bottom: 5px;
  font-size: 2rem;
}

.days-list li:hover {
  transform: scale(1.1);
  background: linear-gradient(#317abb, #91aac0);
  color: #222831;
  box-shadow: 0 5px 15px (0, 0, 0, 0.35);
}

.days-list li .day-tamp {
  margin-top: 6px;
  font-weight: 700;
}

.forecast {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.imgs-busca {
  width: 15px;
  color: #222831;
  padding: 0;
}
.botabusca {
  padding: 0;
}

.day {
  border: 1px solid #ccc;
  padding: 10px;
  width: 100px;
}

.info-display {
  display: flex;
  justify-content: space-around;
}

.info-display .temp {
  margin-right: 10px;
  align-items: center;
}

.info-display .temp,
.info-display .img-previsao {
  display: inline-block;
  vertical-align: middle;
}

.info-section .info-display .temperatura .texto-previsao {
  transform: translateX(-10%);
}

.days-list {
  padding-inline-start: 0;
}
/* @media screen and (min-width: 601px) {
      .info-section {
        width: 600px;
      }
      
    }

      @media screen and (max-width: 600px) {
      .info-section {
        margin: 1rem; 
      }
      
      .info-section .info-display  {
        margin-top: 1rem;
      }
      .info-section .info-display .temperatura {
        border-right: 1px solid gray;
      }
      .info-section .info-display .umidade {
        padding-left: 1rem;
      }
    }     */
</style>

import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://api.weatherapi.com/v1/current.json?key=4d1df30e40fd4904975124018242208&lang=pt&q=',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

const apiClientForecast = axios.create({
    baseURL: 'http://api.weatherapi.com/v1/forecast.json?key=4d1df30e40fd4904975124018242208&days=3&aqi=no&alerts=no&q=',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getWeather(local){
        return apiClient.get(local)
    },
    getForecast(local){
        return apiClientForecast.get(local)
    },

    displayData(dados){
        var d = dados.value

        document.querySelector('.cidade').innerHTML = "Tempo em " + d.location.name
        document.querySelector('.pais').innerHTML = d.location.country
        document.querySelector('.dataHora').innerHTML = "Data e hora: " + d.location.localtime
        document.querySelector('.umidade-clima').innerHTML = "Umidade: " + d.current.humidity + "%"
        document.querySelector('.texto-previsao').innerHTML = d.current.condition.text
        document.querySelector('.img-previsao').src = "https:" + d.current.condition.icon
        document.querySelector('.temp').innerHTML = d.current.temp_c + "°"
    },
    displayForecast(dados){
        var d = dados.value
        document.querySelector('.dia1-temp').innerHTML = d.forecast.forecastday[0].day.maxtemp_c + "C°"
        document.querySelector('.dia1-temp-min').innerHTML = d.forecast.forecastday[0].day.mintemp_c + "C°"

        document.querySelector('.dia2-temp').innerHTML = d.forecast.forecastday[1].day.maxtemp_c + "C°"
        document.querySelector('.dia2-temp-min').innerHTML = d.forecast.forecastday[1].day.mintemp_c + "C°"

        document.querySelector('.dia3-temp').innerHTML = d.forecast.forecastday[2].day.maxtemp_c + "C°"
        document.querySelector('.dia3-temp-min').innerHTML = d.forecast.forecastday[2].day.mintemp_c + "C°"
    },
    displayDataShow(dados){
        var d = dados.value

        document.querySelector('.cidade').innerHTML = "Tempo em  " + d.location.name
        document.querySelector('.dataHora').innerHTML = "Data e hora: " + d.location.localtime
        document.querySelector('.temp').innerHTML = d.current.temp_c + "°"
        document.querySelector('.img-previsao').src = "https:" + d.current.condition.icon
        document.querySelector('.texto-previsao').innerHTML = d.current.condition.text
        document.querySelector('.umidade').innerHTML = "Umidade: " + d.current.humidity + "%"
        document.querySelector('.vento').innerHTML = d.current.wind_kph + "km/h"
    }
}
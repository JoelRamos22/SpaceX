import { barEvent, locationFinder } from "./events/Handlers.js";

export const eventoDatosClima = () => {
    window.addEventListener('load', () =>{
        locationFinder()
    })
}

export const weather = async(textid) => {
    let temperaturaValor = document.querySelector("#temperaturaValor")
    let temperaturaDescripcion = document.querySelector("#temperaturaDescripcion")
    let location = document.querySelector("#location")
    let animatedIcon = document.querySelector("#animatedIcon")
    let vientoVelocidad = document.querySelector("#vientoVelocidad")
    const response = await(fetch(`https://www.meteosource.com/api/v1/free/point?place_id=${textid}&sections=all&timezone=UTC&language=en&units=metric&key=rk4so7kqfz8yjyizs405xem9ui1nx1l8xemfsdir`))
    if (!response.ok) {
        throw new Error ("No se obtuvo respuesta de la API")
    }
    const data = await response.json()
    console.log('datos recibidos', data)
    //Icons 
    Icons(data, animatedIcon)
    //temperatura descripcion 
    temperatureDescription(data, temperaturaDescripcion)
    //temperatura actual 
    temperaturaValores(data, temperaturaValor)
    //velocidad del viento 
    windSpeed(data, vientoVelocidad)
    //descripcion de la localidad 
    weatherLocation(location)
}
const weatherIcons = {
    "Not available": "./storage/img/set01/medium/1.png",
    "Sunny": "./storage/img/set01/medium/2.png",
    "Mostly sunny": "./storage/img/set01/medium/3.png",
    "Partly sunny": "./storage/img/set01/medium/4.png",
    "Mostly cloudy": "./storage/img/set01/medium/5.png",
    "Cloudy": "./storage/img/set01/medium/6.png",
    "Overcast": "./storage/img/set01/medium/7.png",
    "Overcast with low clouds": "./storage/img/set01/medium/8.png",
    "Fog": "./storage/img/set01/medium/9.png",
    "Light rain": "./storage/img/set01/medium/10.png",
    "Rain": "./storage/img/set01/medium/11.png",
    "Possible rain": "./storage/img/set01/medium/12.png",
    "Raing shover": "./storage/img/set01/medium/13.png",
    "Mostly sunny": "./storage/img/set01/medium/3.png",
    "Mostly sunny": "./storage/img/set01/medium/3.png",
    "Mostly sunny": "./storage/img/set01/medium/3.png",
    "Mostly sunny": "./storage/img/set01/medium/3.png",
    "Mostly sunny": "./storage/img/set01/medium/3.png",
    "Mostly sunny": "./storage/img/set01/medium/3.png",
    "Mostly sunny": "./storage/img/set01/medium/3.png",
    "Mostly sunny": "./storage/img/set01/medium/3.png",
    "Mostly sunny": "./storage/img/set01/medium/3.png",
    "Mostly sunny": "./storage/img/set01/medium/3.png",
    "Mostly sunny": "./storage/img/set01/medium/3.png",
    "Mostly sunny": "./storage/img/set01/medium/3.png",
    "Mostly sunny": "./storage/img/set01/medium/3.png",
    "Mostly sunny": "./storage/img/set01/medium/3.png",
    "Mostly sunny": "./storage/img/set01/medium/3.png",
    "Mostly sunny": "./storage/img/set01/medium/3.png",
    "Mostly sunny": "./storage/img/set01/medium/3.png",
    "Overcast": "./storage/img/set01/medium/7.png"
}
const Icons = (Object, icon) => {
    if (!Object.current.icon) {
        throw new Error ("No se encontro informacion sobre el icono")
    }
    if (Object.current.summary === "Not available") {
        icon.src = './storage/img/set01/medium/1.png'
    }
    return icon
}

const weatherLocation = (variable) => {
    const bar = document.querySelector("#searchInput");
    const descripcionLocation = barEvent(bar)
    variable.textContent = descripcionLocation
    return variable
}

const temperatureDescription = (Object, variable) => {
    if (!Object.current.summary) {
        throw new Error ("No se encontro la descripcion de la localidad deseada")
    }
    variable.textContent = Object.current.summary
    return variable
}
const temperaturaValores = (Object, variable) => {
    variable.textContent = `${Math.round(Object.current.temperature, 1)} °C`
    return variable
}

const windSpeed = (Object, variable) => {
    variable.textContent = `${Object.current.wind.speed} m/s`
    return variable
}
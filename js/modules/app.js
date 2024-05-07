import { locationFinder } from "./events/Handlers.js";

export const eventoDatosClima = () => {
    window.addEventListener('load', () =>{
        let temperaturaValor = document.querySelector("#temperaturaValor")
        let temperaturaDescripcion = document.querySelector("#temperaturaDescripcion")
        let location = document.querySelector("#location")
        let animatedIcon = document.querySelector("#animatedIcon")
        let vientoVelocidad = document.querySelector("#vientoVelocidad")
        locationFinder()
    })
}

export const weather = async(textid) => {
    const response = await(fetch(`https://www.meteosource.com/api/v1/free/point?place_id=${textid}&sections=all&timezone=UTC&language=en&units=metric&key=rk4so7kqfz8yjyizs405xem9ui1nx1l8xemfsdir`))
    if (!response.ok) {
        throw new Error ("No se obtuvo respuesta de la API")
    }
    const data = await response.json()
    console.log('datos recibidos', data)
    //temperatura descripcion 
    temperatureDescription(data, temperaturaDescripcion)
    //temperatura actual 
    temperaturaValores(data, temperaturaValor)
    //velocidad del viento 
    windSpeed(data, vientoVelocidad)
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
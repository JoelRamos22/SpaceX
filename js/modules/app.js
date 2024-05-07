import { lookerBar } from "./events/Handlers.js";

export const eventoDatosClima = () => {
    window.addEventListener('load', () =>{
        let temperaturaValor = document.querySelector("#temperaturaValor")
        let temperaturaDescripcion = document.querySelector("#temperaturaDescripcion")
        let location = document.querySelector("#location")
        let animatedIcon = document.querySelector("#animatedIcon")
        let vientoVelocidad = document.querySelector("#vientoVelocidad")
        EncontrarLugar()
    })
}
const EncontrarLugar = () => {
    const place_id = lookerBar(); 
    if (place_id) {
        weather(place_id)
        console.log(place_id)
    } else {
        console.log ("no se proporciono lugar de busqueda")
    }
}

const weather = async(locationId) => {
    const response = await(fetch(`https://www.meteosource.com/api/v1/free/point?place_id=${locationId}&sections=all&timezone=UTC&language=en&units=metric&key=rk4so7kqfz8yjyizs405xem9ui1nx1l8xemfsdir`))
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

const Icons = (Object, variable) => {
    if (!Object.current.icon_num) {
        throw new Error ("No se encontro el icono buscado para el clima")
    }
    variable.textContent = Object.current.icon_num
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
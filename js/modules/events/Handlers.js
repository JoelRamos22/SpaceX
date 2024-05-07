
import { weather } from "../app.js";

export const barEvent = (inputElement) => {
    return inputElement.value.trim();
}

export const locationFinder = () => {
    const bar = document.querySelector("#searchInput");
    const searchIcon = document.querySelector("#icon")
    if (!searchIcon) {
        throw console.error (" no se encontro el icono de busqueda")
    }
    searchIcon.addEventListener('click', () => {
        const searchText = barEvent(bar)
        weather(searchText)
    })
}


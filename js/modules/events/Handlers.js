export const barEvent = (inputElement) => {
    return inputElement.value.trim();
}

export const lookerBar = () => {
    const bar = document.querySelector("#searchInput");
    const looker = document.querySelector("#icon");
    if (!looker) {
        throw new Error("No se encontró el icono de búsqueda");
    }
    looker.addEventListener('click', () => {
        const searchText = barEvent(bar)
        console.log(searchText)
        return searchText
    })
}

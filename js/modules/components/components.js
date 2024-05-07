//Creation of the estructure 

//container creation

export const divContainer = () => {
    const container = document.createElement("div")
    container.id = "container"
    return document.body.appendChild(container)
}

//search bar 

export const searchBar = () => {
    const searchLooker = document.createElement("input")
    searchLooker.type = "search"
    searchLooker.id = "searchInput"
    searchLooker.placeholder = "Search your location"
    return document.body.appendChild(searchLooker)
}


//title creation 

export const weatherTitle = () => {
    const weatherLooker = document.createElement("h1")
    weatherLooker.id = "title"
    weatherLooker.textContent = "Weather in real time"
    return document.body.appendChild(weatherLooker)
}


// weather box creation in container box 

export const divBoxes = () => {
    const Boxes = ['div', 'div', 'div']
    const fatherBox = document.querySelector("#container")
    if (!fatherBox) {
        throw new Error ("No se encontro el elemento en el DOM")
    }
    Boxes.forEach( (element, index) => {
        const box = document.createElement(element)
        box.id = `box${index}`
        fatherBox.appendChild(box)
    });
    return Boxes
}

// Boxs contain titles and etc...

export const fatherBoxLooker = (string) => {
    if (typeof string !== "string") {
        throw new Error ("Ups, porfavor intenta usar una string para poder buscar la caja padre")
    }
    const boxFind = document.querySelector(string)
    if (!boxFind) {
        throw new Error ("No se encontro el elemento el DOM")
    }
    return boxFind
}

//Box container box0 

export const containBox0 = () => {
    const fatherBox0 = (fatherBoxLooker("#box0"))
    const firstTittleBox0 = document.createElement("h1")
    const secondTittleBox0 = document.createElement("h1")
    firstTittleBox0.id = "temperaturaValor"
    secondTittleBox0.id = "temperaturaDescripcion"
    fatherBox0.appendChild(firstTittleBox0)
    fatherBox0.appendChild(secondTittleBox0)
    return fatherBox0
}

//Box container box1 

export const containBox1 = () => {
    const fatherBox1 = (fatherBoxLooker("#box1"))
    const firstTittleBox1 = document.createElement("h1")
    const secondTittleBox1 = document.createElement("img")
    firstTittleBox1.id = "location"
    secondTittleBox1.id = "animatedIcon"
    fatherBox1.appendChild(firstTittleBox1)
    fatherBox1.appendChild(secondTittleBox1)
    return fatherBox1
}


//box container box2 

export const containBox2 = () => {
    const fatherBox2 = (fatherBoxLooker("#box2"))
    const firstTittleBox2 = document.createElement("h3")
    const secondTittleBox2 = document.createElement("h1")
    firstTittleBox2.textContent = "wind Speed"
    secondTittleBox2.id = "vientoVelocidad"
    fatherBox2.appendChild(firstTittleBox2)
    fatherBox2.appendChild(secondTittleBox2)
    return fatherBox2
}
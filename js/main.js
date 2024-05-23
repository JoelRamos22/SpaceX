import { 
    load,
    paginationCapsules,
    paginationRockets,
    paginationLaunches,
    paginationCrew,
    paginationCores,
    paginationDragons,
    paginationHistory,
    paginationLandpads,
    paginationLaunchpads
} from "./modulesComponents/pagination.js";

let footerSelect = async(e, id)=>{
    e.preventDefault();
    await load();
    let li = document.querySelectorAll(".footer ul li")
    for(let val of li){
        let [a] = val.children
        a.classList.remove('select');
    }
    let [a] = id.children
    a.classList.add('select');   
}


let rocket = document.querySelector("#rocket")
rocket.addEventListener("click", async(e)=>{
    await footerSelect(e, rocket)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationRockets())
} )

let capsules = document.querySelector("#capsules")
capsules.addEventListener("click", async(e)=>{
    await footerSelect(e, capsules)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCapsules())
})

let launches = document.querySelector("#launches")
launches.addEventListener("click", async(e)=>{
    await footerSelect(e, launches)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationLaunches())
})

let Crew = document.querySelector("#Crew")
Crew.addEventListener("click", async(e)=>{
    await footerSelect(e, Crew)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCrew())
})

let Cores = document.querySelector("#Cores")
Cores.addEventListener("click", async(e)=>{
    await footerSelect(e, Cores)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCores())
})

let Dragons = document.querySelector("#Dragons")
Dragons.addEventListener("click", async(e)=>{
    await footerSelect(e, Dragons)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationDragons())
})

let History = document.querySelector("#History")
History.addEventListener("click", async(e)=>{
    await footerSelect(e, History)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationHistory())
})

let Landpads = document.querySelector("#Landpads")
Landpads.addEventListener("click", async(e)=>{
    await footerSelect(e, Landpads)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationLandpads())
})

let Launchpads = document.querySelector("#Launchpads")
Launchpads.addEventListener("click", async(e)=>{
    await footerSelect(e, Launchpads)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationLaunchpads())
})


Landpads.click();
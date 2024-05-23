import { 
    getAllRockets, 
    getAllRocketsId
} from "../modules/rockets.js";
import { 
    nameRockets 
} from "./name.js";
import { 
    infoName,
    informationRockets,
    informationLaunchCostRocket,
    informationFirstFlightRocket,
    informationWebRocket,
    infoImg,
    informationTypeCapsule,
    informationStatusCapsule,
    informationIdCapsule,
    informationLastUpdateCapsule,
    informationlaunchesCapsule,
    imformationLaunchesImg,
    informationDetailsLaunches,
    imformationSuccessLaunch,
    informationWikiLaunc,
    informationVideoLaunc,
    informationArticleLaunc,
    imformationIdLaunch,
    informationParchLaunch,
    imformationRocketLaunch,
    imformationImageCrew,
    informationIdCrew,
    informationStatusCrew,
    informationWikiCrew,
    informationAgencyCrew,
    informationLaunchCrew,
    informationDetailsCores,
    borrador,
    informationReuse_countCores,
    informationRtls_attemptsCores,
    informationRtls_landingsCores,
    informationAsds_attemptsCores,
    informationAsds_landingsCores,
    informationTypeDragons,
    informationActive,
    informationIdDragon,
    informationDescriptionDragons,
    informationWikiDragon,
    informationDetails,
    informationArticle,
    informationId,
    informationDate,
    informationDate2,
    informationWikiLand,
    informationTypeLand,
    informationStatusLand,
    informationNameLand,
    informationAttemptLand,
    informationSuccesesLand,
    informationAttemptLaunch,
    informationSuccesesLaunch
} from "./information.js";
import { 
    tableRocketColum1, 
    tableRocketColum2,
    tableCapsuleColum1,
    tableLaunchesColum1,
    tableDragon1,
    tableDragon2,
    tableDragon3,
    tableDragon4,
    tableDragon5,
    tableDragon6,
    tableDragon7,
    tableDragon8,
    tableDragon9,
    tableDragon10,
    tableDragonsColum1,
    tableDragonsColum2,
    tableLandColum1
} from "./tables.js";
import { 
    informRocketEngineThrustSeaLevel, 
    informRocketEngineThrustVacuum,
    informRocketEngineThrustVacuum1
} from "./inform.js";
import { 
    progressRocketWeight,
    progressPayloadWeights, 
    progressHeightRocket, 
    progressDiameterRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket,
} from "./progressBar.js";
///
import { 
    getAllCapsules,
    getAllCapsulesId
} from "../modules/capsules.js";
///
import { 
    getAllLaunches,
    getAllLaunchesId
} from "../modules/launches.js";
///
import {
    getAllCrew,
    getAllCrewId
} from "../modules/crew.js";
///
import {
    getAllCores,
    getAllCoresId
} from "../modules/cores.js";
///
import {
    getAllDragons,
    getAllDragonsId
} from "../modules/dragons.js";
///
import {
    getAllHistory,
    getAllHistoryId
} from "../modules/history.js";
///
import {
    getAllLandpads,
    getAllLandpadsId
} from "../modules/Landpads.js";
///
import {
    getAllLaunchpads,
    getAllLaunchpadsId
} from "../modules/launchpads.js";

export const load = async()=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = `
        <div class="load"></div>
    `;

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = `
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
    `;

    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = `
        <div class="load" style="height: 150px;"></div>
    `;

    let information__table__1 = document.querySelector("#information__table__1")
    information__table__1.innerHTML = `
        <div class="load" style="height: 160px;"></div>
    `;

    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = `
    <div class="rocket">
        <img class="rocketimg" src="./storage/img/icons/iconos/sticker-png-astronaut-cartoon-astronaut-drawing-space-line-art-gesture.svg">
    </div>
    `;


    let information__table__2 = document.querySelector("#information__table__2")
    information__table__2.innerHTML = `
        <div class="load" style="height: 160px;"></div>
    `;

    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = `
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
    `;
}
export const clear = async()=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = ``;

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = ``;

    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = ``;

    let information__table__1 = document.querySelector("#information__table__1")
    information__table__1.innerHTML = ``;

    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = ``;


    let information__table__2 = document.querySelector("#information__table__2")
    information__table__2.innerHTML = ``;

    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = ``;

}

const getRocketsId = async(e)=>{
    e.preventDefault();
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";

    let Rocket = await getAllRocketsId(e.target.id);
    console.log(Rocket);

    await nameRockets(Rocket.name)
    await infoImg(Rocket.flickr_images[0])
    await infoName(Rocket.name)
    await informationRockets(Rocket.country, Rocket.description)
    await informationLaunchCostRocket(Rocket.cost_per_launch)
    await informationFirstFlightRocket(Rocket.first_flight)
    await informationWebRocket(Rocket.wikipedia)

    await informRocketEngineThrustSeaLevel(Rocket.engines.thrust_sea_level);
    await informRocketEngineThrustVacuum(Rocket.engines.thrust_vacuum);
    await informRocketEngineThrustVacuum1(Rocket.engines.thrust_vacuum);

    await tableRocketColum1(Rocket)
    await tableRocketColum2(Rocket)

    await progressRocketWeight(Rocket)
    await progressPayloadWeights(Rocket)
    await progressHeightRocket(Rocket)
    await progressDiameterRocket(Rocket)
    await progressSecondStageDiameterRocket(Rocket)
    await progressSecondStageHeightRocket(Rocket)
}
export const paginationRockets = async()=>{
    let rockets = await getAllRockets();
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")
  
    rockets.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = id+1;
        a.addEventListener("click", getRocketsId)
        div.appendChild(a);
    });
    let [a1,a2,a3,a4] = div.children
    a3.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}

const getCapsulesId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCapsules(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    

    let Capsule = await getAllCapsulesId(e.target.id);
    console.log(Capsule);

    await nameRockets(Capsule.serial)
    await informationTypeCapsule(Capsule.type)
    await informationStatusCapsule(Capsule.status)
    await informationIdCapsule(Capsule.id)
    await tableCapsuleColum1(Capsule)
    await informationLastUpdateCapsule(Capsule.last_update)
    await informationlaunchesCapsule(Capsule.launches)

    
}

export const paginationCapsules = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCapsules(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getCapsulesId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCapsulesId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getCapsulesId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}



const getLaunchesId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationLaunches(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    

    let Launch = await getAllLaunchesId(e.target.id);
    console.log(Launch);

    await nameRockets(Launch.name)
    await imformationLaunchesImg(Launch.links.flickr.original[0])
    await informationDetailsLaunches(Launch.details)
    await imformationSuccessLaunch(Launch.success)
    await informationWikiLaunc(Launch.links.wikipedia)
    await informationVideoLaunc(Launch.links.webcast)
    await informationArticleLaunc(Launch.links.article)
    await imformationIdLaunch(Launch.id)
    
    await tableLaunchesColum1(Launch)
    await informationParchLaunch(Launch.links.patch.small)
    await imformationRocketLaunch(Launch.rocket)
    
}

export const paginationLaunches = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllLaunches(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getLaunchesId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getLaunchesId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getLaunchesId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}



const getCrewId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCrew(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    

    let Crew = await getAllCrewId(e.target.id);
    console.log(Crew);

    await nameRockets(Crew.name)    
    await imformationImageCrew(Crew.image)
    await informationIdCrew(Crew.id)
    await informationStatusCrew(Crew.status)
    await informationWikiCrew(Crew.wikipedia)
    await informationAgencyCrew(Crew.agency)
    await informationLaunchCrew(Crew.launches)
    
}

export const paginationCrew = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCrew(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getCrewId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCrewId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getCrewId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}

const getCoresId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCores(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    

    let Cores = await getAllCoresId(e.target.id);
    console.log(Cores);

    await nameRockets(Cores.serial)    
    await informationLaunchCrew(Cores.launches)
    await informationDetailsCores(Cores.last_update)
    await borrador()
    await informationStatusCapsule(Cores.status)
    await informationIdCapsule(Cores.id)
    await informationReuse_countCores(Cores.reuse_count)
    await informationRtls_attemptsCores(Cores.rtls_attempts)
    await informationRtls_landingsCores(Cores.rtls_landings)
    await informationAsds_attemptsCores(Cores.asds_attempts)
    await informationAsds_landingsCores(Cores.asds_landings)
    
}

export const paginationCores = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCores(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getCoresId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCoresId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getCoresId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}


const getDragonsId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationDragons(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    

    let Dragons = await getAllDragonsId(e.target.id);
    console.log(Dragons);

    await nameRockets(Dragons.name)   
    await imformationLaunchesImg(Dragons.flickr_images[1]) 
    await informationTypeDragons(Dragons.type)
    await informationActive(Dragons.active)
    await informationWikiDragon(Dragons.wikipedia)
    await informationIdDragon(Dragons.id)

    await informationDescriptionDragons(Dragons.description)

    await tableDragon1(Dragons.heat_shield)
    await tableDragon2(Dragons.launch_payload_mass)
    await tableDragon3(Dragons.launch_payload_vol)
    await tableDragon4(Dragons.return_payload_mass)
    await tableDragon5(Dragons.return_payload_vol)
    await tableDragon6(Dragons.pressurized_capsule.payload_volume)
    await tableDragon7(Dragons.trunk.trunk_volume)
    await tableDragon8(Dragons.trunk.cargo)
    await tableDragon9(Dragons.height_w_trunk)
    await tableDragon10(Dragons.diameter)

    await tableDragonsColum1(Dragons.thrusters[0])
    await tableDragonsColum2(Dragons)
}

export const paginationDragons = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllDragons(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getDragonsId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getDragonsId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getDragonsId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}


const getHistoryId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationHistory(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    

    let History = await getAllHistoryId(e.target.id);
    console.log(History);

    await nameRockets(History.title)    
    await informationDetails(History.details)
    await informationArticle(History.links.article)
    await informationId(History.id)
    await informationDate(History.event_date_utc)
    await informationDate2(History.event_date_unix)
    
}

export const paginationHistory = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllHistory(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getHistoryId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getHistoryId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getHistoryId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}


const getLandpadsId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationLandpads(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    

    let Landpads = await getAllLandpadsId(e.target.id);
    console.log(Landpads);

    await nameRockets(Landpads.name)  
    
    await informationNameLand(Landpads.full_name)
    await informationId(Landpads.id)
    await informationStatusLand(Landpads.status)
    await informationTypeLand(Landpads.type)
    await informationWikiLand(Landpads.wikipedia)

    await informationLaunchCrew(Landpads.launches)

    await informationDetails(Landpads.details)

    await tableLandColum1(Landpads)
    await informationAttemptLand(Landpads.landing_attempts)
    await informationSuccesesLand(Landpads.landing_successes)

}

export const paginationLandpads = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllLandpads(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getLandpadsId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getLandpadsId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getLandpadsId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}


const getLaunchpadsId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationLaunchpads(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    

    let Launchpads = await getAllLaunchpadsId(e.target.id);
    console.log(Launchpads);

    await nameRockets(Launchpads.name)  
    
    await informationNameLand(Launchpads.full_name)
    await informationId(Launchpads.id)
    await informationStatusLand(Launchpads.status)
    await informationWikiLand(Launchpads.wikipedia)

    await informationLaunchCrew(Launchpads.launches)

    await informationDetails(Launchpads.details)

    await tableLandColum1(Launchpads)
    await informationAttemptLaunch(Launchpads.launch_attempts)
    await informationSuccesesLaunch(Launchpads.launch_successes)
    
}

export const paginationLaunchpads = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllLaunchpads(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getLaunchpadsId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getLaunchpadsId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getLaunchpadsId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}
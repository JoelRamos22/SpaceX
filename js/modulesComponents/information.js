import { 
    getAllLaunchesId
} from "../modules/launches.js";
import { getAllRocketsId } from "../modules/rockets.js";

export const infoName = async(name)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/rocket.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "name"
    let small = document.createElement('small');
    small.textContent = name
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}
export const infoImg = async(imagen)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    div.style.marginTop = "4px";
    div.style.justifyContent = "center";
    let imgFist = document.createElement("img");
    imgFist.src = imagen;
    imgFist.style.width = "100%";
    imgFist.style.height = "100%";
    imgFist.style.borderRadius = "2px";
    imgFist.style.boxShadow = "#298BFE 0px 0px 6px 4px";
    div.append(imgFist);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}


export const informationRockets = async(country, description)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = country
    let small = document.createElement('small');
    small.textContent = description
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informationLaunchCostRocket = async(cost_per_launch)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The estimated cost per rocket launch"
    let small = document.createElement('small');
    let money = new Intl.NumberFormat('cop').format(cost_per_launch)
    small.textContent = `$ ${money}`
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informationFirstFlightRocket = async(first_flight)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The date of the first flight of the rocket"
    let small = document.createElement('small');
    small.textContent = first_flight
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informationWebRocket = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Read more about the coete"
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia)
    a.setAttribute("target", "_blank")
    a.textContent = "Wikipedia"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <a href="#" target="_blank">Lorem</a>
    //     </div>
    // </div>
}




//===================================================
export const informationTypeCapsule = async(type)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Type of capsule"
    let small = document.createElement('small');
    small.textContent = type
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.innerHTML="";
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <a href="#" target="_blank">Lorem</a>
    //     </div>
    // </div>
}

export const informationStatusCapsule = async(status)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Status of the capsule"
    let small = document.createElement('small');
    small.textContent = status
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <a href="#" target="_blank">Lorem</a>
    //     </div>
    // </div>
}

export const informationIdCapsule = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "id of the capsule"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <a href="#" target="_blank">Lorem</a>
    //     </div>
    // </div>
}

export const informationLastUpdateCapsule = async(last_update)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Last update of the capsule"
    let small = document.createElement('small');
    small.textContent = last_update
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <a href="#" target="_blank">Lorem</a>
    //     </div>
    // </div>
}

export const informationlaunchesCapsule = async(info)=>{
    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = "";

    for(let i=0; i<info.length; i++){
        let launches = await getAllLaunchesId(info[i])
        console.log(launches);

        let div = document.createElement('div');
        div.classList.add('description__container')
        let divFirst = document.createElement('div');
        let img = document.createElement('img');
        img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
        divFirst.append(img);
        
        let divLast = document.createElement('div');
        let h3 = document.createElement('h3');
        h3.textContent = "Launch"
        let small = document.createElement('small');
        small.textContent = info[i]
        if(launches.links.flickr.original[0]){
            let img2 = document.createElement('img');
            img2.setAttribute("src", `${launches.links.flickr.original[0]}`)
            img2.style.width = "100%";
            img2.style.marginTop = "10px";
            img2.style.borderRadius = "2px";
            img2.style.boxShadow = "#298BFE 0px 0px 6px 4px";
            divLast.append(h3, small, img2);
        } else {
            divLast.append(h3, small);
        }
        div.append(divFirst, divLast);

        information__2.append(div)
    }
    

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <a href="#" target="_blank">Lorem</a>
    //     </div>
    // </div>
}


//===================================================

export const imformationLaunchesImg = async(imagen)=>{
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    if(imagen){
        let div = document.createElement('div');
        div.classList.add('description__container')
        div.style.marginTop = "4px";
        div.style.justifyContent = "center";
        let imgFist = document.createElement("img");
        imgFist.src = imagen;
        imgFist.style.width = "100%";
        imgFist.style.height = "200px";
        imgFist.style.borderRadius = "2px";
        imgFist.style.boxShadow = "#298BFE 0px 0px 6px 4px";
        div.append(imgFist);

        description__item.append(div)
    }
}

export const informationDetailsLaunches = async(details)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    div.style.scale = "1.2";
    div.style.marginTop = "40px";
    div.style.width = "70%";
    div.style.height = "40%";
    div.style.overflowY = "auto";
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Details of the launch"
    let small = document.createElement('small');
    small.textContent = details
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = "";
    section__information__1.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <a href="#" target="_blank">Lorem</a>
    //     </div>
    // </div>
}

export const imformationSuccessLaunch = async(success)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Success of the launch"
    let small = document.createElement('small');
    small.textContent = success
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

}

export const informationWikiLaunc = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Read more about the launch"
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia)
    a.setAttribute("target", "_blank")
    a.textContent = "Wikipedia"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}

export const informationVideoLaunc = async(link)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Video about the launch"
    let a = document.createElement('a');
    a.setAttribute("href", link)
    a.setAttribute("target", "_blank")
    a.textContent = "youtube"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}

export const informationArticleLaunc = async(link)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Launch article"
    let a = document.createElement('a');
    a.setAttribute("href", link)
    a.setAttribute("target", "_blank")
    a.textContent = "link"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}

export const imformationIdLaunch = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Launch ID"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

}

export const informationParchLaunch = async(link)=>{
    let information__table__2 = document.querySelector("#information__table__2")
    information__table__2.innerHTML = "";
    if(link){
        let div = document.createElement('div');
        div.classList.add('description__container')
        div.style.objectFit = "contain";
        div.style.justifyContent = "center";
        let imgFist = document.createElement("img");
        imgFist.src = link;
        imgFist.style.width = "60%";
        div.append(imgFist);

        information__table__2.append(div)
    }
}

export const imformationRocketLaunch = async(Rocket)=>{
    let RocketImg = (await getAllRocketsId(Rocket)).flickr_images[0];
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Rocket used"
    let small = document.createElement('small');
    small.textContent = Rocket
    let img2 = document.createElement('img');
    img2.src = RocketImg
    img2.style.width = "100%";
    img2.style.height = "100%";
    img2.style.borderRadius = "2px";
    img2.style.boxShadow = "#298BFE 0px 0px 6px 4px";
    divLast.append(h3, small, img2);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#information__2")
    description__item.innerHTML = "";
    description__item.append(div)

}


//==============================================
export const imformationImageCrew = async(image)=>{
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let div = document.createElement('div');
    div.classList.add('description__container')
    div.style.marginTop = "4px";
    div.style.justifyContent = "center";
    let imgFist = document.createElement("img");
    imgFist.src = image;
    imgFist.style.width = "100%";
    imgFist.style.height = "200px";
    imgFist.style.borderRadius = "2px";
    imgFist.style.boxShadow = "#298BFE 0px 0px 6px 4px";
    div.append(imgFist);

    description__item.append(div)
}

export const informationAgencyCrew = async (agency) => {
    let section__information__1 = document.querySelector("#description__item")
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Crew menber agency"
    let small = document.createElement('small');
    small.textContent = agency
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    section__information__1.append(div)
}

export const informationIdCrew = async (id) => {
    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = "";
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Crew menber ID"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    section__information__1.append(div)
}

export const informationStatusCrew = async (status) => {
    let section__information__1 = document.querySelector("#section__information__1")
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Crew menber status"
    let small = document.createElement('small');
    small.textContent = status
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    section__information__1.append(div)
}

export const informationWikiCrew = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Read more about the member"
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia)
    a.setAttribute("target", "_blank")
    a.textContent = "Wikipedia"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#section__information__1")
    description__item.append(div)
}

export const informationLaunchCrew = async (launch) => {
    let section__information__1 = document.querySelector("#information__2")
    section__information__1.innerHTML = "";
    for (let i = 0; i < launch.length; i++) {
        let launches = (await getAllLaunchesId(launch[i]))
        let div = document.createElement('div');
        div.classList.add('description__container')
        let divFirst = document.createElement('div');
        let img = document.createElement('img');
        img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
        divFirst.append(img);
        
        let divLast = document.createElement('div');
        let h3 = document.createElement('h3');
        h3.textContent = "Launch id"
        let small = document.createElement('small');
        small.textContent = launches.id
        let img2 = document.createElement("img")
        img2.src = launches.links.flickr.original[0]
        img2.style.marginTop = "10px";
        img2.style.width = "100%";
        img2.style.height = "200px";
        img2.style.borderRadius = "2px";
        img2.style.boxShadow = "#298BFE 0px 0px 6px 4px";
        divLast.append(h3, small, img2);
        div.append(divFirst, divLast);

        section__information__1.append(div)
    }
    let information__table__2 = document.querySelector("#information__table__2")
    information__table__2.innerHTML = "";
    let information__table__1 = document.querySelector("#information__table__1")
    information__table__1.innerHTML = "";
}

//====================================================
export const informationDetailsCores = async(details)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    div.style.scale = "1.2";
    div.style.marginTop = "40px";
    div.style.width = "70%";
    div.style.height = "40%";
    div.style.overflowY = "auto";
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Last update"
    let small = document.createElement('small');
    small.textContent = details
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = "";
    section__information__1.append(div)
}

export const borrador = async() =>{
    let section__information__1 = document.querySelector("#description__item")
    section__information__1.innerHTML = "";
}

export const informationBlockCores = async(block)=>{
    let section__information__1 = document.querySelector("#description__item")
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Block of the core"
    let small = document.createElement('small');
    small.textContent = block
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    section__information__1.append(div)
}

export const informationReuse_countCores = async(reuse_count)=>{
    let section__information__1 = document.querySelector("#description__item")
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Reuse count of the core"
    let small = document.createElement('small');
    small.textContent = reuse_count
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    section__information__1.append(div)
}

export const informationRtls_attemptsCores = async(rtls_attempts)=>{
    let section__information__1 = document.querySelector("#description__item")
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Rtls attempts of the core"
    let small = document.createElement('small');
    small.textContent = rtls_attempts
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    section__information__1.append(div)
}

export const informationRtls_landingsCores = async(rtls_landings)=>{
    let section__information__1 = document.querySelector("#description__item")
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Rtls landings of the core"
    let small = document.createElement('small');
    small.textContent = rtls_landings
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    section__information__1.append(div)
}

export const informationAsds_attemptsCores = async(asds_attempts)=>{
    let section__information__1 = document.querySelector("#description__item")
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Asds attempts of the core"
    let small = document.createElement('small');
    small.textContent = asds_attempts
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    section__information__1.append(div)
}

export const informationAsds_landingsCores = async(asds_landings)=>{
    let section__information__1 = document.querySelector("#description__item")
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Asds landings of the core"
    let small = document.createElement('small');
    small.textContent = asds_landings
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    section__information__1.append(div)
}

//================================================================

export const informationTypeDragons = async(type)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Type of dragon"
    let small = document.createElement('small');
    small.textContent = type
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}

export const informationActive = async(active) => {
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Dragon active?"
    let small = document.createElement('small');
    small.textContent = active
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}


export const informationWikiDragon = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Read more about the dragon"
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia)
    a.setAttribute("target", "_blank")
    a.textContent = "Wikipedia"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}

export const informationDescriptionDragons = async(description)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    div.style.scale = "1.2";
    div.style.marginTop = "40px";
    div.style.width = "70%";
    div.style.height = "40%";
    div.style.overflowY = "auto";
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Description of the dragon"
    let small = document.createElement('small');
    small.textContent = description
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = "";
    section__information__1.append(div)
}

export const informationIdDragon = async (id) => {
    let section__information__1 = document.querySelector("#description__item")
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Dragon ID"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    section__information__1.append(div)
}

export const informationDragon1 = async (thing) => {
    let section__information__1 = document.querySelector("#information__2")
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Dragon heat shield"
    let small = document.createElement('small');
    small.textContent = thing
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    section__information__1.append(div)
}

//==========================================

export const informationDetails = async(details)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    div.style.scale = "1.2";
    div.style.marginTop = "40px";
    div.style.width = "70%";
    div.style.height = "40%";
    div.style.marginBottom = "0";
    div.style.paddingBottom = "0";
    div.style.overflowY = "auto";
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "details of the success"
    let small = document.createElement('small');
    small.textContent = details
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = "";
    section__information__1.append(div)
}

export const informationArticle = async(link)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Archivement article"
    let a = document.createElement('a');
    a.setAttribute("href", link)
    a.setAttribute("target", "_blank")
    a.textContent = "link"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    description__item.append(div)
}

export const informationId = async (id) => {
    let section__information__1 = document.querySelector("#description__item")
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    section__information__1.append(div)
}

export const informationDate = async (date) => {
    let section__information__1 = document.querySelector("#information__2")
    section__information__1.innerHTML = "";
    let info1 = document.querySelector("#information__table__1")
    info1.innerHTML = "";
    let info2 = document.querySelector("#information__table__2");
    info2.innerHTML = "";
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "event_date_utc"
    let small = document.createElement('small');
    small.textContent = date
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    section__information__1.append(div)
}

export const informationDate2 = async (date) => {
    let section__information__1 = document.querySelector("#information__2")
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "event_date_unix"
    let small = document.createElement('small');
    small.textContent = date
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    section__information__1.append(div)
}

//============================================================

export const informationNameLand = async (full_name) => {
    let section__information__1 = document.querySelector("#description__item")
    section__information__1.innerHTML = "";
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "full_name"
    let small = document.createElement('small');
    small.textContent = full_name
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    section__information__1.append(div)
}

export const informationStatusLand = async (status) => {
    let section__information__1 = document.querySelector("#description__item")
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Status"
    let small = document.createElement('small');
    small.textContent = status
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    section__information__1.append(div)
}

export const informationTypeLand = async (type) => {
    let section__information__1 = document.querySelector("#description__item")
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "type"
    let small = document.createElement('small');
    small.textContent = type
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    section__information__1.append(div)
}

export const informationWikiLand = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Read more about the landpad"
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia)
    a.setAttribute("target", "_blank")
    a.textContent = "Wikipedia"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}

export const informationAttemptLand = async (landing_attempts) => {
    let section__information__1 = document.querySelector("#information__table__2")
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "landing_attempts"
    let small = document.createElement('small');
    small.textContent = landing_attempts
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    section__information__1.append(div)
}

export const informationSuccesesLand = async (landing_successes) => {
    let section__information__1 = document.querySelector("#information__table__2")
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "landing_successes"
    let small = document.createElement('small');
    small.textContent = landing_successes
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    section__information__1.append(div)
}

//=====================================================

export const informationAttemptLaunch = async (launch_attempts) => {
    let section__information__1 = document.querySelector("#information__table__2")
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "landing_attempts"
    let small = document.createElement('small');
    small.textContent = launch_attempts
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    section__information__1.append(div)
}

export const informationSuccesesLaunch = async (launch_successes) => {
    let section__information__1 = document.querySelector("#information__table__2")
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "launch_successes"
    let small = document.createElement('small');
    small.textContent = launch_successes
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    section__information__1.append(div)
}
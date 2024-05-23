export const tableRocketColum1 = async (Rocket)=>{

    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Information rocket"
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Rocket in service"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${(Rocket.active) ? "Active" : "Low" }`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Number of stages"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Rocket.stages}`
    div2.append(span2, strong2)
    
    // 
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Number of propellants"
    let strong3 = document.createElement("strong");
    strong3.textContent = `${Rocket.boosters}`
    div3.append(span3, strong3)

    // 
    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Type"
    let strong4 = document.createElement("strong");
    strong4.textContent = `${Rocket.type}`
    div4.append(span4, strong4)

    // 
    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "Landing legs"
    let strong5 = document.createElement("strong");
    strong5.textContent = `${Rocket.landing_legs.number}`
    div5.append(span5, strong5)

    // 
    let div6 = document.createElement("div");
    let span6 = document.createElement("span");
    span6.textContent = "Leg material"
    let strong6 = document.createElement("strong");
    strong6.textContent = `${(Rocket.landing_legs.material) ? Rocket.landing_legs.material : ""}`
    div6.append(span6, strong6)

    div.append(div4, div1, div2, div3, div5, div6)
    information__table__1.append(div)
    // 

    // <h3>Title</h3>
    // <hr>
    // <div class="table__container__1">
    //     <div>
    //         <span>Title</span>
    //         <strong>Hola</strong>
    //     </div>
        
    // </div>
}
export const tableRocketColum2 = async (Rocket)=>{
    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Engine information"
    let hr = document.createElement("hr");
    information__table__2.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Maximum power loss"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${(Rocket.engines.engine_loss_max) ? Rocket.engines.engine_loss_max : 0}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Engine availability"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${(Rocket.engines.layout) ? Rocket.engines.layout : ""}`
    div2.append(span2, strong2)

    // 
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Number of engines"
    let strong3 = document.createElement("strong");
    strong3.textContent = `${(Rocket.engines.number) ? Rocket.engines.number : 0}`
    div3.append(span3, strong3)

    // 
    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Stage 1 fuel"
    let strong4 = document.createElement("strong");
    strong4.textContent = `${(Rocket.engines.propellant_1) ? Rocket.engines.propellant_1 : ""}`
    div4.append(span4, strong4)

    // 
    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "Stage 2 fuel"
    let strong5 = document.createElement("strong");
    strong5.textContent = `${(Rocket.engines.propellant_2) ? Rocket.engines.propellant_2 : ""}`
    div5.append(span5, strong5)

    // 
    let div6 = document.createElement("div");
    let span6 = document.createElement("span");
    span6.textContent = "Type"
    let strong6 = document.createElement("strong");
    strong6.textContent = `${(Rocket.engines.type) ? Rocket.engines.type : 0} ${(Rocket.engines.version) ? Rocket.engines.version : ""}`
    div6.append(span6, strong6)

    div.append(div6, div1, div2, div3, div4, div5)
    information__table__2.append(div)
    // 

    // <h3>Title</h3>
    // <hr>
    // <div class="table__container__1">
    //     <div>
    //         <span>Title</span>
    //         <strong>Hola</strong>
    //     </div>
        
    // </div>
}


//============================================================

export const tableCapsuleColum1 = async (Capsule)=>{

    let section__information__1 = document.querySelector("#section__information__1");
    section__information__1.innerHTML = "";   
    let h3 = document.createElement("h3");
    h3.textContent = "Landings Capsule"
    let hr = document.createElement("hr");
    section__information__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Capsule water landings"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Capsule.water_landings}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Capsule land landings"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Capsule.land_landings}`
    div2.append(span2, strong2)
    
    // 
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Capsule reuse count"
    let strong3 = document.createElement("strong");
    strong3.textContent = `${Capsule.reuse_count}`
    div3.append(span3, strong3)

    div.append(div1, div2, div3)
    section__information__1.append(div)

    let information__table__1 = document.querySelector("#information__table__1")
    information__table__1.innerHTML = "";
    let information__table__2 = document.querySelector("#information__table__2")
    information__table__2.innerHTML = "";
    
}

//============================================================

export const tableLaunchesColum1 = async (Launch)=>{
    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Dates information"
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "date_utc"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Launch.date_utc}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "date_unix"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Launch.date_unix}`
    div2.append(span2, strong2)

    // 
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "date_local"
    let strong3 = document.createElement("strong");
    strong3.textContent = `${Launch.date_local}`
    div3.append(span3, strong3)

    // 
    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "date_precision"
    let strong4 = document.createElement("strong");
    strong4.textContent = `${Launch.date_precision}`
    div4.append(span4, strong4)

    // 
    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "upcoming"
    let strong5 = document.createElement("strong");
    strong5.textContent = `${Launch.upcoming}`
    div5.append(span5, strong5)

    div.append(div1, div2, div3, div4, div5)
    information__table__1.append(div)
    // 

    // <h3>Title</h3>
    // <hr>
    // <div class="table__container__1">
    //     <div>
    //         <span>Title</span>
    //         <strong>Hola</strong>
    //     </div>
        
    // </div>
}

//=====================================================

export const tableDragon1 = async (Dragons)=>{
    let information__table__1 = document.querySelector("#information__2");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "heat shield"
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "material"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Dragons.material}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "size_meters"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Dragons.size_meters}`
    div2.append(span2, strong2)

    // 
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "temp_degrees"
    let strong3 = document.createElement("strong");
    strong3.textContent = `${Dragons.temp_degrees}`
    div3.append(span3, strong3)

    // 
    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "dev_partner"
    let strong4 = document.createElement("strong");
    strong4.textContent = `${Dragons.dev_partner}`
    div4.append(span4, strong4)

    div.append(div1, div2, div3, div4)
    information__table__1.append(div)
}

export const tableDragon2 = async (Dragons)=>{
    let information__table__1 = document.querySelector("#information__2");
    let h3 = document.createElement("h3");
    h3.textContent = "launch payload mass"
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "kg"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Dragons.kg}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "lb"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Dragons.lb}`
    div2.append(span2, strong2)

    div.append(div1, div2)
    information__table__1.append(div)
}

export const tableDragon3 = async (Dragons)=>{
    let information__table__1 = document.querySelector("#information__2");
    let h3 = document.createElement("h3");
    h3.textContent = "launch payload vol"
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "cubic_meters"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Dragons.cubic_meters}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "cubic_feet"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Dragons.cubic_meters}`
    div2.append(span2, strong2)

    div.append(div1, div2)
    information__table__1.append(div)
}

export const tableDragon4 = async (Dragons)=>{
    let information__table__1 = document.querySelector("#information__2");
    let h3 = document.createElement("h3");
    h3.textContent = "return payload mass"
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "kg"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Dragons.kg}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "lb"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Dragons.lb}`
    div2.append(span2, strong2)

    div.append(div1, div2)
    information__table__1.append(div)
}

export const tableDragon5 = async (Dragons)=>{
    let information__table__1 = document.querySelector("#information__2");
    let h3 = document.createElement("h3");
    h3.textContent = "return payload vol"
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "cubic_meters"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Dragons.cubic_meters}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "cubic_feet"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Dragons.cubic_meters}`
    div2.append(span2, strong2)

    div.append(div1, div2)
    information__table__1.append(div)
}

export const tableDragon6 = async (Dragons)=>{
    let information__table__1 = document.querySelector("#information__2");
    let h3 = document.createElement("h3");
    h3.textContent = "pressurized capsule"
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "cubic_meters"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Dragons.cubic_meters}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "cubic_feet"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Dragons.cubic_meters}`
    div2.append(span2, strong2)

    div.append(div1, div2)
    information__table__1.append(div)
}

export const tableDragon7 = async (Dragons)=>{
    let information__table__1 = document.querySelector("#information__2");
    let h3 = document.createElement("h3");
    h3.textContent = "trunk"
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "cubic_meters"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Dragons.cubic_meters}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "cubic_feet"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Dragons.cubic_meters}`
    div2.append(span2, strong2)

    div.append(div1, div2)
    information__table__1.append(div)
}

export const tableDragon8 = async (Dragons)=>{
    let information__table__1 = document.querySelector("#information__2");
    let h3 = document.createElement("h3");
    h3.textContent = "trunk cargo"
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "solar_array"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Dragons.solar_array}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "unpressurized_cargo"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Dragons.unpressurized_cargo}`
    div2.append(span2, strong2)

    div.append(div1, div2)
    information__table__1.append(div)
}

export const tableDragon9 = async (Dragons)=>{
    let information__table__1 = document.querySelector("#information__2");
    let h3 = document.createElement("h3");
    h3.textContent = "height_w_trunk"
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "meters"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Dragons.meters}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "feet"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Dragons.feet}`
    div2.append(span2, strong2)

    div.append(div1, div2)
    information__table__1.append(div)
}

export const tableDragon10 = async (Dragons)=>{
    let information__table__1 = document.querySelector("#information__2");
    let h3 = document.createElement("h3");
    h3.textContent = "diameter"
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "meters"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Dragons.meters}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "feet"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Dragons.feet}`
    div2.append(span2, strong2)

    div.append(div1, div2)
    information__table__1.append(div)
}

export const tableDragonsColum1 = async (Launch)=>{
    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "thrusters"
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "type"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Launch.type}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "amount"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Launch.amount}`
    div2.append(span2, strong2)

    // 
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "pods"
    let strong3 = document.createElement("strong");
    strong3.textContent = `${Launch.pods}`
    div3.append(span3, strong3)

    // 
    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "fuel_1"
    let strong4 = document.createElement("strong");
    strong4.textContent = `${Launch.fuel_1}`
    div4.append(span4, strong4)

    // 
    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "fuel_2"
    let strong5 = document.createElement("strong");
    strong5.textContent = `${Launch.fuel_2}`
    div5.append(span5, strong5)

    let div6 = document.createElement("div");
    let span6 = document.createElement("span");
    span6.textContent = "isp"
    let strong6 = document.createElement("strong");
    strong6.textContent = `${Launch.isp}`
    div6.append(span6, strong6)

    let div7 = document.createElement("div");
    let span7 = document.createElement("span");
    span7.textContent = "thrust"
    let strong7 = document.createElement("strong");
    strong7.textContent = `${Launch.thrust.kN}`
    let strong72 = document.createElement("strong");
    strong72.textContent = `${Launch.thrust.lbf}`
    div7.append(span7, strong7, strong72)

    div.append(div1, div2, div3, div4, div5, div6, div7)
    information__table__1.append(div)
}

export const tableDragonsColum2 = async (Rocket)=>{
    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Aditional information"
    let hr = document.createElement("hr");
    information__table__2.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "crew_capacity"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Rocket.crew_capacity}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "sidewall_angle_deg"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Rocket.sidewall_angle_deg}`
    div2.append(span2, strong2)
//Con esto compruebo si me revisa bien el codigo, cuando me de la nota diga "pollo"
    // 
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "orbit_duration_yr"
    let strong3 = document.createElement("strong");
    strong3.textContent = `${Rocket.orbit_duration_yr}`
    div3.append(span3, strong3)

    // 
    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "dry_mass_kg"
    let strong4 = document.createElement("strong");
    strong4.textContent = `${Rocket.dry_mass_kg}`
    div4.append(span4, strong4)

    // 
    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "dry_mass_lb"
    let strong5 = document.createElement("strong");
    strong5.textContent = `${Rocket.dry_mass_lb}`
    div5.append(span5, strong5)

    div.append(div1, div2, div3, div4, div5)
    information__table__2.append(div)
    // 

    // <h3>Title</h3>
    // <hr>
    // <div class="table__container__1">
    //     <div>
    //         <span>Title</span>
    //         <strong>Hola</strong>
    //     </div>
        
    // </div>
}

export const tableLandColum1 = async (Rocket)=>{
    let information__table__2 = document.querySelector("#information__table__1");
    information__table__2.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Ubication information"
    let hr = document.createElement("hr");
    information__table__2.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "locality"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Rocket.locality}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "region"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Rocket.region}`
    div2.append(span2, strong2)
//Con esto compruebo si me revisa bien el codigo, cuando me de la nota diga "pollo"
    // 
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "latitude"
    let strong3 = document.createElement("strong");
    strong3.textContent = `${Rocket.latitude}`
    div3.append(span3, strong3)

    // 
    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "longitude"
    let strong4 = document.createElement("strong");
    strong4.textContent = `${Rocket.longitude}`
    div4.append(span4, strong4)

    div.append(div1, div2, div3, div4)
    information__table__2.append(div)
    // 

    // <h3>Title</h3>
    // <hr>
    // <div class="table__container__1">
    //     <div>
    //         <span>Title</span>
    //         <strong>Hola</strong>
    //     </div>
        
    // </div>
}
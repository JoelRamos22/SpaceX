import { divContainer, divBoxes, containBox0, containBox1, containBox2, weatherTitle, searchBar } from "./modules/components/components.js";
import { eventoDatosClima } from "./modules/app.js";
// import { looker } from "./modules/events/Handlers.js";

//components
weatherTitle(); searchBar(); divContainer(); divBoxes(); containBox0(); containBox1(); containBox2(); 
//principal Event
eventoDatosClima();
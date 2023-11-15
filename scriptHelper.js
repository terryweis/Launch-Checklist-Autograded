// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML =
                 `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`
    
 };
 
 function validateInput(testInput) {
    if (testInput === ""){
        return "Empty"
    }else if (isNaN(testInput) === true){
        return "Not a Number"
    }else if (isNaN(testInput) === false)
        return "Is a Number" 
        //done and passing 
 
};
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //elements
    
    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let form = document.querySelector("form");
    //validation of input
    
    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty"){
       window.alert("All fields are required!")
        
    }; 
    if(validateInput(Number(fuelLevel)) === "Not a Number" || validateInput(Number(cargoLevel)) === "Not a Number"){
        window.alert("Please enter valid Number!")
        
};

    list.style = "visibility: visible";
    launchStatus.style.color = 'green';
    launchStatus.innerHTML = `Shuttle is Ready for Launch`;
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";


//fuel is off
if(fuelLevel < 10000){
        launchStatus.style.color = 'red';
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        fuelStatus.innerHTML = "Fuel level too low for launch";

//cargo is off        
}if(cargoLevel > 10000){
        launchStatus.style.color = 'red';
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";

//fuel and cargo are off
}if(fuelLevel < 10000 && cargoLevel > 10000){
    launchStatus.style.color = 'red';
    launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
    fuelStatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
     };
 };
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
     .then( function(response) {
        return response.json()
    });

     return planetsReturned;
 }
 
 function pickPlanet(planets) {
        let randomIndex = Math.floor(Math.random() * planets.length);
        let index = planets[randomIndex];
return index;
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;
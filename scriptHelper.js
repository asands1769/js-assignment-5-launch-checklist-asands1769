// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
                document.getElementById("missionTarget").innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
   
}
let alertMessage = "Make sure to enter valid information for each field!"
let form = document.querySelector("form");
let faultyItems = document.getElementById("faultItems")
let launchStatus = document.getElementById("launchStatus")
let button = document.getElementById("formSubmit")
let copilotStatus = document.getElementById("copilotStatus");
let pilotStatus = document.getElementById("pilotStatus");
let fuelStatus = document.getElementById("fuelStatus");
let cargoStatus = document.getElementById("cargoStatus");
function validateInput(testInput) {
    if (testInput == "" ){
        return "Empty"
    }
    if (isNaN((testInput)) === false){
        return "Is a Number";
    }
    if (isNaN((testInput)) === true){
        return "Not a Number";
    }
}
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot.value) === "Is a Number" || validateInput(pilot.value) === "Empty"){
        alert(alertMessage);
    }
    else    {
        pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
    }
    if (validateInput(copilot.value) === "Is a Number" || validateInput(copilot.value) === "Empty"){
        alert(alertMessage);
        launchStatus.innerHTML = "Shuttle not ready for launch"
    }
    else    {
        copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
    }
    if (validateInput(fuelLevel) !== "Is a Number"){
        alert(alertMessage);
        launchStatus.innerHTML = "Shuttle not ready for launch"
    }
    else if (fuelLevel.value < 10000){
        launchStatus.innerHTML = "Shuttle not ready for launch"
        launchStatus.style.color = "red"
        fuelStatus.innerHTML = "Fuel level too low for launch"
        faultyItems.style.visibility = "visible"
    }
    if (validateInput(cargoLevel) !== "Is a Number"){
        alert(alertMessage)
        launchStatus.innerHTML = "Shuttle not ready for launch"
    }
    else if (cargoLevel.value > 10000){
        launchStatus.innerHTML = "Shuttle not ready for launch"
        launchStatus.style.color = "red"
        cargoStatus.innerHTML = "There is too much mass for the shuttle to take off"
        faultyItems.style.visibility = "visible"
    }
    
    if (launchStatus.innerHTML !== "Shuttle not ready for launch"){
        launchStatus.innerHTML = "Shuttle is ready for launch"
        launchStatus.style.color = "green"
        faultyItems.style.visibility = "visible"
    }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

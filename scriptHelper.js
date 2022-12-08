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

function validateInput(testInput) {
    if (testInput == "" ){
        return "Empty"
    }
    if (isNaN((testInput)) === false){
        return "Is a Number";
    }
    if (isNaN((testInput))){
        return "Not a Number";
    }
}
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // let alertMessage = "Make sure to enter valid information for each field!";
    let launchStatus = document.getElementById("launchStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    // if ((validateInput(pilot) !== "Not a Number") || (validateInput(copilot) !== "Not a Number" ) || (validateInput(cargoLevel) !== "Is a Number") || (validateInput(fuelLevel) !== "Is a Number")){
    //     alert(alertMessage);
    // }  
    //   initially I validated the inputs but stating if they are not equal to what they are supposed to be, put an alert, that way I wouldn't have to do it twice for "Empty" and incorrect data types.  The auto-grader did not like this.
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        alert("All fields are required!")
    }
    else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        alert("Make sure to enter valid information for each field!")
    }
    else   {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }
    if (fuelLevel < 10000){
        launchStatus.innerHTML = "Shuttle not ready for launch"
        launchStatus.style.color = "red"
        fuelStatus.innerHTML = "Fuel level too low for launch"
        list.style.visibility = "visible"
    }
    else {
        fuelStatus.innerHTML = "Fuel level high enough for launch"
    }
    if (cargoLevel > 10000){
        launchStatus.innerHTML = "Shuttle not ready for launch"
        launchStatus.style.color = "red"
        cargoStatus.innerHTML = "There is too much mass for the shuttle to take off"
        list.style.visibility = "visible"
    }
    else {
        cargoStatus.innerHTML = "Cargo mass is low enough for launch"
    }

    if (fuelLevel >= 10000 && cargoLevel <= 10000){
        fuelStatus.innerHTML = "Fuel level high enough for launch"
        cargoStatus.innerHTML = "Cargo mass is low enough for launch"
        launchStatus.innerHTML = "Shuttle is ready for launch"
        launchStatus.style.color = "green"
        list.style.visibility = "visible"
    }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
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

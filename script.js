window.addEventListener("load", function() {
    let list = document.getElementById("faultyItems");
    list.style.visbility = "hidden"
    let form = document.querySelector("form");
    let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
    }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let chosenPlanet = pickPlanet(listedPlanets);
    addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image)
})
    
    form.addEventListener("submit", function(event) { 
    event.preventDefault();
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
});
});
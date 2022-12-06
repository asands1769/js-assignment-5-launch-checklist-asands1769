// Write your JavaScript code here!
import { formSubmission } from "./scriptHelper";
import { validateInput } from "./scriptHelper";

const { pickPlanet, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    let button = document.getElementById("formSubmit")
    let pilotName = document.getElementById("pilotName");
    let copilotName = document.getElementById("copilotName");
    let fuelLevel = document.getElementById("fuelLevel");
    let cargoMass = document.getElementById("cargoMass");

    form.addEventListener("submit", function(event) { 
        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass)
    });
    //     if (pilotName.value == "" ){
    //         alert("All fields are required!");
    //     };
    //     if (isNaN((pilotName.value)) === false){
    //         alert("Please enter valid pilot name.");
    //     };
    //     if (copilotName.value == "" ){
    //         alert("All fields are required!");
    //         }
    //     if (isNaN((copilotName.value)) === false){
    //         alert("Please enter valid co-pilot name.");
    //         };
    //     if (fuelLevel.value == "" ){
    //         alert("All fields are required!");
    //         }
    //     if (isNaN((fuelLevel.value)) === true){
    //         alert("Please enter valid fuel level.");
    //         };
    //     if (cargoMass.value == "" ){
    //         alert("All fields are required!");
    //         }
    //     if (isNaN((cargoMass.value)) === true){
    //         alert("Please enter valid cargoMass.");
    //         };


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   pickPlanet(listedPlanets)
   
});
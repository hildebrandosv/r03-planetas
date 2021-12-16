//╔════════════════════════════════════════════════╗
//║             MAIN JAVASCRIPT SCRIPT             ║
//╚════════════════════════════════════════════════╝
// *** Import DATA from JS file ***
import { tbData01 } from "../data/data.js";
//
// *** Import FUNCTIONS from JS file ***
//
// *** CONSTANT definition ***
const tbPlanets = tbData01;
//
// *** VARIABLES definition ***
let tbPlanetTmp = [];    // To storage the planets in other order
//
// *********************************************
// ***           BEGIN MAIN MODULE           ***
// *********************************************
//
const elPlanetsBodyTable = document.getElementById('idBodyTable');
fnFillTable(elPlanetsBodyTable, tbPlanets, "DEFAULT");

//
// *********************************************
// ***            END MAIN MODULE            ***
// *********************************************
function al(aa) { alert("Aquí voy... ", aa); }
function cl(aa) { console.log("Aquí voy... ", aa); }
//╔════════════════════════════════════════════════╗
//║             FUNCTION DEFINITION                ║
//╚════════════════════════════════════════════════╝
function fnFillTable(elementBodyId, aTheArray, sTheOrder) {
   // To order the array according to user chooses
   //
   // To fill the table and show it
   let elTableRows= '';
   aTheArray.forEach((element, index) => {
      elTableRows += `<tr>
                        <td scope="row">${index+1}</td>
                        <td>${element.name}</td>
                        <td>${element.distance}</td>
                        <td>${element.size}</td>
                     </tr>`

      console.log(elTableRows);
   });
   elementBodyId.innerHTML= elTableRows;
}

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
// Listeners the event click in the three choices of tre order dropdown
const elIdByName = document.getElementById('idByName').addEventListener('click',
   e => {
      fnFillTable(elPlanetsBodyTable, tbPlanets, "NAME");
   })
const elIdByDistance = document.getElementById('idByDistance').addEventListener('click',
   e => {
      fnFillTable(elPlanetsBodyTable, tbPlanets, "DISTANCE");
   })
const elIdBySize = document.getElementById('idBySize').addEventListener('click',
   e => {
      fnFillTable(elPlanetsBodyTable, tbPlanets, "SIZE");
   })
console.log(Number("1.23"))

//
// *********************************************
// ***            END MAIN MODULE            ***
// *********************************************
function al(aa) { alert("Aquí voy... ", aa); }
function cl(aa) { console.log("Aquí voy... ", aa); }
//╔════════════════════════════════════════════════╗
//║             FUNCTION DEFINITION                ║
//╚════════════════════════════════════════════════╝
function fnFillTable(elementBodyId, aTheArray, sTheOrder)
// Displays the info in the table, according to an order
{
   console.log(aTheArray)
   console.log(sTheOrder)
   // First orders the array according to user chooses and according to "sTheOrder" parameter
   switch (sTheOrder.toUpperCase()) {
      case 'NAME':
         aTheArray.sort((a, b) => {
            if (a.name > b.name) {
               return 1;
            }
            if (a.name < b.name) {
               return -1;
            }
            // a must be equal to b
            return 0;
         });
         break;
      case 'SIZE':
         aTheArray.sort((a, b) => {
            if (Number(a.size) > Number(b.size)) {
               return 1;
            }
            if (Number(a.size) < Number(b.size)) {
               return -1;
            }
            // a must be equal to b
            return 0;
         });
         break;
      default:
         aTheArray.sort((a, b) => {
            if (Number(a.distance) > Number(b.distance)) {
               return 1;
            }
            if (Number(a.distance) < Number(b.distance)) {
               return -1;
            }
            // a must be equal to b
            return 0;
         });
         break;
   }
   // To fill the table and show it ordered
   let elTableRows = '';
   aTheArray.forEach((element, index) => {
      elTableRows += `<tr>
                        <td scope="row">${index + 1}</td>
                        <td>${element.name}</td>
                        <td>${element.distance}</td>
                        <td>${element.size}</td>
                     </tr>`
   });
   elementBodyId.innerHTML = elTableRows;
}

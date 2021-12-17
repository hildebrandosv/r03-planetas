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
const elIdSearchForm = document.getElementById('idSearchForm');
const elIdSearchInput = document.getElementById('idSearchInput');
const elIdClearButton = document.getElementById('idClearButton');
//
// *** VARIABLES definition ***
let tbPlanetTmp = [];    // To storage the planets in other order
//
// *********************************************
// ***           BEGIN MAIN MODULE           ***
// *********************************************
//
const elPlanetsBodyTable = document.getElementById('idBodyTable');
fnFillTable(elPlanetsBodyTable, tbPlanets, "DEFAULT", true);
// Listeners the event click in the three choices of tre order dropdown
const elIdByName = document.getElementById('idByName').addEventListener('click',
   e => {
      const lInAscendingOrder = document.getElementById('idOrderAsc').checked;
      fnFillTable(elPlanetsBodyTable, tbPlanets, "NAME", lInAscendingOrder);
   })
const elIdByDistance = document.getElementById('idByDistance').addEventListener('click',
   e => {
      const lInAscendingOrder = document.getElementById('idOrderAsc').checked;
      fnFillTable(elPlanetsBodyTable, tbPlanets, "DISTANCE", lInAscendingOrder);
   })
const elIdBySize = document.getElementById('idBySize').addEventListener('click',
   e => {
      const lInAscendingOrder = document.getElementById('idOrderAsc').checked;
      fnFillTable(elPlanetsBodyTable, tbPlanets, "SIZE", lInAscendingOrder);
   })
// Listeners the commit event
const elIdSearchButton = document.getElementById('idSearchButton')
elIdSearchInput.addEventListener('input', e => {
   if (elIdSearchInput.value.length > 0) {
      elIdSearchButton.disabled = false;
      elIdSearchButton.classList.remove('btn-outline-secondary');
      elIdSearchButton.classList.add('btn-outline-success');
      // Shows form clear button
      elIdClearButton.classList.remove('d-none');
   }
   else {
      elIdSearchButton.disabled = true;
      elIdSearchButton.classList.add('btn-outline-secondary');
      elIdSearchButton.classList.remove('btn-outline-success');
      // Hides form clear button
      elIdClearButton.classList.add('d-none');
   }
})
// Listeners all form to search
elIdSearchForm.addEventListener('submit', e => {
      e.preventDefault();
   // Searchs in the names, distances and sizes
   const anyValueToSearch = elIdSearchInput.value.toUpperCase();
   const aWithTheSearch = tbPlanets.filter(element => {
      return (element.name.toUpperCase() == anyValueToSearch ||
         Number(element.distance) == Number(anyValueToSearch) ||
         Number(element.size) == Number(anyValueToSearch))
   })
   fnFillTable(elPlanetsBodyTable, aWithTheSearch, "DEFAULT", true);
})
// Listeners Clear form button
elIdClearButton.addEventListener('click', e => {
   e.preventDefault();
   elIdSearchForm.reset();
   elIdClearButton.classList.add('d-none');
   // Shows the default data
   fnFillTable(elPlanetsBodyTable, tbPlanets, "DEFAULT", true);
})
// Sends the data somewhere
const elIdModalSend= document.getElementById('idModalSend')
const elIdSend= document.getElementById('idSend').addEventListener('click', e => {
   e.preventDefault();
   elIdModalSend.style.display = "block";
   elIdModalSend.style.paddingRight = "17px";
   elIdModalSend.className="modal fade show"; 
})
const elIdModalSendBtnClose = document.getElementById('idModalSendBtnClose').addEventListener('click', e => {
   e.preventDefault();
   elIdModalSend.style.display = "none";
   elIdModalSend.className="modal fade";
})
//
// *********************************************
// ***            END MAIN MODULE            ***
// *********************************************
function al(aa) { alert("Aquí voy... ", aa); }
function cl(aa) { console.log("Aquí voy... ", aa); }
//╔════════════════════════════════════════════════╗
//║             FUNCTION DEFINITION                ║
//╚════════════════════════════════════════════════╝
function fnFillTable(elementBodyId, aTheArray, sTheOrder, lAscendingOrder)
// Displays the info in the table, according to an order
{
   // Defines the order const to sort method in 1 and -1 when "lAscendingOrder" is true; and in -1 and 1 when is false.
   let nOrderMajor = 1;     // Default value to ascending order to order methos in an objects array
   let nOrderMinor = -1;    // Default value to ascending order to order methos in an objects array 
   if (!lAscendingOrder) { // If the order is descending, reverses the default values
      nOrderMajor = -1;
      nOrderMinor = 1;
   }
   // First orders the array according to user chooses and according to "sTheOrder" parameter
   switch (sTheOrder.toUpperCase()) {
      case 'NAME':
         aTheArray.sort((a, b) => {
            if (a.name > b.name) {
               return nOrderMajor;
            }
            if (a.name < b.name) {
               return nOrderMinor;
            }
            // a must be equal to b
            return 0;
         });
         // Shows or hides the type ordering icons depending of by which data is ordering
         if (lAscendingOrder) {
            document.getElementById('idAscIconName').classList.remove('d-none')
            document.getElementById('idDesIconName').classList.add('d-none')
         }
         else {
            document.getElementById('idDesIconName').classList.remove('d-none')
            document.getElementById('idAscIconName').classList.add('d-none')
         }
         document.getElementById('idAscIconSize').classList.add('d-none')
         document.getElementById('idDesIconSize').classList.add('d-none')
         document.getElementById('idAscIconDistance').classList.add('d-none')
         document.getElementById('idDesIconDistance').classList.add('d-none')
         break;
      case 'SIZE':
         aTheArray.sort((a, b) => {
            if (Number(a.size) > Number(b.size)) {
               return nOrderMajor;
            }
            if (Number(a.size) < Number(b.size)) {
               return nOrderMinor;
            }
            // a must be equal to b
            return 0;
         });
         // Shows or hides the type ordering icons depending of by which data is ordering
         if (lAscendingOrder) {
            document.getElementById('idAscIconSize').classList.remove('d-none')
            document.getElementById('idDesIconSize').classList.add('d-none')
         }
         else {
            document.getElementById('idDesIconSize').classList.remove('d-none')
            document.getElementById('idAscIconSize').classList.add('d-none')
         }
         document.getElementById('idAscIconName').classList.add('d-none')
         document.getElementById('idDesIconName').classList.add('d-none')
         document.getElementById('idAscIconDistance').classList.add('d-none')
         document.getElementById('idDesIconDistance').classList.add('d-none')
         break;
      default:
         aTheArray.sort((a, b) => {
            if (Number(a.distance) > Number(b.distance)) {
               return nOrderMajor;
            }
            if (Number(a.distance) < Number(b.distance)) {
               return nOrderMinor;
            }
            // a must be equal to b
            return 0;
         });
         // Shows or hides the type ordering icons depending of by which data is ordering
         if (lAscendingOrder) {
            document.getElementById('idAscIconDistance').classList.remove('d-none')
            document.getElementById('idDesIconDistance').classList.add('d-none')
         }
         else {
            document.getElementById('idDesIconDistance').classList.remove('d-none')
            document.getElementById('idAscIconDistance').classList.add('d-none')
         }
         document.getElementById('idAscIconName').classList.add('d-none')
         document.getElementById('idDesIconName').classList.add('d-none')
         document.getElementById('idAscIconSize').classList.add('d-none')
         document.getElementById('idDesIconSize').classList.add('d-none')
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

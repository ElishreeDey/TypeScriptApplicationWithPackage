/*
****************************************************************************************************************************
* Filename    : displaytable
* Description : This file hold functions to display already saved info from browser localstorage even on page refresh data stays.
* Functions   : "displayData"
* Imported Functions: "createTableFromData"
* Author      : Elishree Dey Chand
* Created     : 2026-05-24
****************************************************************************************************************************
*/

//First import the required functions
import { createTableFromData } from './createTable.js';
import type { EntryDataBase } from "./type.ts";

//specify the entry data types
// type entryData = {
//   name: string;
//   email: string;
//   phone: string;
//   gender: string;
// };

//This function will display already entered data from browser's localstorage.
export function displayData(){
  //alert("on load display data");

  // const storageKey = "setLocalStorageJSON";
  // const raw = localStorage.getItem(storageKey);
  // const allEnteredvalues: entryData[] = raw
  //   ? JSON.parse(raw)
  //   : [];

  // const totalCount: number = allEnteredvalues.length;
  // //const totalCount = allEnteredvalues.length;
  // //alert(totalCount);

  // //const allEnteredvalues = JSON.parse(localStorage.getItem("setLocalStorageJSON")) || []; // Parse string to array
  // const data = JSON.stringify(allEnteredvalues);

  // for (let loopCount = 0; loopCount < totalCount; loopCount++) {
  //   const firstJSONNode = allEnteredvalues[loopCount]; // Gets one node of json object based on loop count
  //   const firstJSONNodeString = JSON.stringify(firstJSONNode); // Convert json object to string to display in alert
  //   //alert(firstJSONNodeString); // to access individual values
  //   const obj = JSON.parse(firstJSONNodeString); // Convert string back to json object to access values in createTableFromData function

  //   //alert(obj);
  //   createTableFromData(obj);
  // }     

  const storageKey = 'setLocalStorageJSON';
  const raw = localStorage.getItem(storageKey);
    
    // Use your defined type for the array
  const allEnteredvalues: EntryDataBase[] = raw ? JSON.parse(raw) : [];
    
    allEnteredvalues.forEach((obj) => {
        // Pass the actual object 'obj' to the function
        createTableFromData(obj); 
    });
}
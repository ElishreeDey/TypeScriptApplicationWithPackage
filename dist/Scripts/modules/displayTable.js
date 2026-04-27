import { createTableFromData } from './createTable.js';
export function displayData() {
    //alert("on load display data");
    const storageKey = "setLocalStorageJSON";
    const raw = localStorage.getItem(storageKey);
    const allEnteredvalues = raw
        ? JSON.parse(raw)
        : [];
    const totalCount = allEnteredvalues.length;
    //const allEnteredvalues = JSON.parse(localStorage.getItem("setLocalStorageJSON")) || []; // Parse string to array
    const data = JSON.stringify(allEnteredvalues);
    //const totalCount = allEnteredvalues.length;
    //alert(totalCount);
    for (let loopCount = 0; loopCount < totalCount; loopCount++) {
        const firstJSONNode = allEnteredvalues[loopCount]; // Gets one node of json object based on loop count
        const firstJSONNodeString = JSON.stringify(firstJSONNode); // Convert json object to string to display in alert
        //alert(firstJSONNodeString); // to access individual values
        const obj = JSON.parse(firstJSONNodeString); // Convert string back to json object to access values in createTableFromData function
        //alert(obj);
        //alert(obj[0].name + " " + obj[1].email + " " + obj[3].phone + " " + obj[4].gender);
        createTableFromData(obj.name, obj.email, obj.phone, obj.gender);
    }
}

/*
****************************************************************************************************************************
* Filename    : saveData
* Description : This file holds all functions to create and save data in browser localstorage
* Functions   : "saveData"
* Imported Functions: "clearEntryFields", "checkNotIsEmpty", "validateEmail", "validateFlexiblePhone", "createTableFromData"
* Author      : Elishree Dey Chand
* Created     : 2026-05-24
****************************************************************************************************************************
*/
//First import the required functions
import { clearEntryFields } from './clearEntries.js';
import { checkNotIsEmpty, validateEmail, validateFlexiblePhone } from './validation.js';
import { createTableFromData } from './createTable.js';
//Now create the process to Save Data  
export function saveData() {
    let name = "";
    let email = "";
    let phone = "";
    let gender = "";
    let errValidateName;
    const nameEntry = document.getElementById("userName");
    const emailEntry = document.getElementById("email");
    const phoneEntry = document.getElementById("phone");
    const genderEntry = document.getElementById("gender");
    const mandatoryName = document.getElementById("mandatoryName");
    const mandatoryEmail = document.getElementById("mandatoryEmail");
    const mandatoryPhone = document.getElementById("mandatoryPhone");
    if (nameEntry)
        name = nameEntry.value;
    if (emailEntry)
        email = emailEntry.value;
    if (phoneEntry)
        phone = phoneEntry.value;
    if (genderEntry)
        gender = genderEntry.value; //alert(gender);    
    var err;
    if (name == "" && email == "" && phone == "") {
        if (mandatoryName)
            mandatoryName.style.display = 'inline';
        if (mandatoryEmail)
            mandatoryEmail.style.display = 'inline';
        if (mandatoryPhone)
            mandatoryPhone.style.display = 'inline';
        err = "Please fill details in all required fields";
    }
    else if (name == "" || name.trim() === "") {
        if (mandatoryName)
            mandatoryName.style.display = 'inline';
        err = "Name is required!";
    }
    else if (email == "") {
        if (mandatoryEmail)
            mandatoryEmail.style.display = 'inline';
        err = "Email is required!";
    }
    else if (phone == "") {
        if (mandatoryPhone)
            mandatoryPhone.style.display = 'inline';
        err = "PhoneNo is required!";
    }
    if (name != "") {
        const errValidateName = checkNotIsEmpty(name);
        if (errValidateName) {
            if (mandatoryName)
                mandatoryName.style.display = '';
            return; // Stop form submission
        }
    }
    if (email != "") {
        const errValidateEmail = validateEmail(email);
        if (errValidateEmail) {
            if (mandatoryEmail)
                mandatoryEmail.style.display = '';
            return; //stop from submission
        }
    }
    if (phone != "") {
        var errValidatePhone = validateFlexiblePhone(phone);
        if (errValidatePhone != "" && errValidatePhone == "error in phone number") { //alert("here" + errValidatePhone);
            if (mandatoryPhone)
                mandatoryPhone.style.display = '';
            return; // Stop form submission
        }
    }
    if (err != "" && err != undefined) {
        alert(err); // Alert error message if any validation error occurs.
        return; // Stop form submission
    }
    else {
        alert("Data saved successfully!");
    }
    //Create table from entered data and store to local storage 
    createTableFromData(name, email, phone, gender);
    //alert(document.getElementById("viewData").innerHTML);
    // clear entry fields after submission
    clearEntryFields();
    const storageKey = "setLocalStorageJSON";
    const raw = localStorage.getItem(storageKey);
    const setLocalStorageJSON = raw
        ? JSON.parse(raw)
        : [];
    const entryDataObj = { name, email, phone, gender };
    setLocalStorageJSON.push(entryDataObj);
    localStorage.setItem(storageKey, JSON.stringify(setLocalStorageJSON));
    const allEnteredvalues = setLocalStorageJSON;
    //Actual JS lines
    /*const setLocalStorageJSON = JSON.parse(localStorage.getItem("setLocalStorageJSON")) || [];
    let entryDataObj = { name: name, email: email, phone: phone, gender: gender };
    setLocalStorageJSON.push(entryDataObj);
    localStorage.setItem("setLocalStorageJSON", JSON.stringify(setLocalStorageJSON));
    const allEnteredvalues = JSON.parse(localStorage.getItem("setLocalStorageJSON")) || []; // Parse string to array
    */
    // End of code for storing data in local storage JSON array
}

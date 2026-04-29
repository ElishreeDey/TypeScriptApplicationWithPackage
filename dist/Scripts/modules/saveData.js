/*
****************************************************************************************************************************
* Filename    : saveData
* Description : Save form data and store in localStorage
****************************************************************************************************************************
*/
import { clearEntryFields } from './clearEntries.js';
import { checkNotIsEmpty, validateEmail, validateFlexiblePhone } from './validation.js';
import { createTableFromData } from './createTable.js';
import { showSnackbar } from './showSnackbar.js';
// Save Data Function
export function saveData() {
    // Get values from input fields (INSIDE function)
    const user = {
        username: document.getElementById("userName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        gender: document.getElementById("gender").value,
    };
    const mgColour = {
        successMsgCol: "#008000",
        alertMsgCol: "#FFBF00",
        errMsgCol: "#FF0000"
    };
    //console.log("User Data:", user);
    // Validation elements
    const mandatoryName = document.getElementById("mandatoryName");
    const mandatoryEmail = document.getElementById("mandatoryEmail");
    const mandatoryPhone = document.getElementById("mandatoryPhone");
    let err;
    // Required field validation
    if (user.username === "" && user.email === "" && user.phone === "") {
        mandatoryName && (mandatoryName.style.display = 'inline');
        mandatoryEmail && (mandatoryEmail.style.display = 'inline');
        mandatoryPhone && (mandatoryPhone.style.display = 'inline');
        err = "Please fill all required fields";
    }
    else if (user.username.trim() === "") {
        mandatoryName && (mandatoryName.style.display = 'inline');
        err = "Name is required!";
    }
    else if (user.email === "") {
        mandatoryEmail && (mandatoryEmail.style.display = 'inline');
        err = "Email is required!";
    }
    else if (user.phone === "") {
        mandatoryPhone && (mandatoryPhone.style.display = 'inline');
        err = "Phone is required!";
    }
    // Custom validations
    if (user.username !== "") {
        if (checkNotIsEmpty(user.username)) {
            mandatoryName && (mandatoryName.style.display = '');
            return;
        }
    }
    if (user.email !== "") {
        if (validateEmail(user.email)) {
            mandatoryEmail && (mandatoryEmail.style.display = '');
            return;
        }
    }
    if (user.phone !== "") {
        const phoneError = validateFlexiblePhone(user.phone);
        if (phoneError === "error in phone number") {
            mandatoryPhone && (mandatoryPhone.style.display = '');
            return;
        }
    }
    // Show error if exists
    if (err) {
        //alert(err);
        showSnackbar(err, mgColour.errMsgCol);
        return;
    }
    else {
        //alert("Data saved successfully!");
        showSnackbar("Data saved successfully!", mgColour.successMsgCol);
    }
    // Add to table
    createTableFromData(user);
    // Clear form
    clearEntryFields();
    // Store in localStorage
    const storageKey = "setLocalStorageJSON";
    const existingData = JSON.parse(localStorage.getItem(storageKey) || "[]");
    existingData.push(user);
    localStorage.setItem(storageKey, JSON.stringify(existingData));
}

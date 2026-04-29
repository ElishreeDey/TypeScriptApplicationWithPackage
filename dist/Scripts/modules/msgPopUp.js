/*
****************************************************************************************************************************
* Filename    : editDeleteData
* Description : This file holds all functions to edit or delete a registered data in browser localstorage
* Functions   : "deleteRow", "editRow", "saveEditedData"
* Imported Functions: "clearEntryFields"
* Author      : Elishree Dey Chand
* Created     : 2026-05-24
****************************************************************************************************************************
*/
export function showSnackbar(message) {
    const snackbar = document.getElementById("snackbar");
    if (!snackbar)
        return;
    // Set dynamic message
    snackbar.textContent = message;
    snackbar.className = "show";
    setTimeout(() => {
        snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
}

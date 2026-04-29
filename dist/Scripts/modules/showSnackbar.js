/*
****************************************************************************************************************************
* Filename    : showSnackbar
* Description : This file holds utility function to display error msg
* Functions   : "showSnackbar"
* Author      : Elishree Dey Chand
* Created     : 2026-05-29
****************************************************************************************************************************
*/
export function showSnackbar(message, color) {
    const snackbar = document.getElementById("snackbar");
    if (!snackbar)
        return;
    // Set dynamic message
    snackbar.textContent = message;
    snackbar.className = "show";
    snackbar.style.backgroundColor = color; //alert(bgColor);
    //snackbar.style.backgroundColor = "#503c97";
    setTimeout(() => {
        snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
}

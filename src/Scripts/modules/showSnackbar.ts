/*
****************************************************************************************************************************
* Filename    : showSnackbar
* Description : This file holds utility function to display error msg
* Functions   : "showSnackbar"
* Author      : Elishree Dey Chand
* Created     : 2026-05-29
****************************************************************************************************************************
*/

export function showSnackbar(message: string): void {
  const snackbar = document.getElementById("snackbar") as HTMLElement | null;

  if (!snackbar) return;

  // Set dynamic message
  snackbar.textContent = message;

  snackbar.className = "show";
  //snackbar.style.backgroundColor = bgColor; //alert(bgColor);

  //snackbar.style.backgroundColor = "#43973c";

  setTimeout((): void => {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}
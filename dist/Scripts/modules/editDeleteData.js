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
//First import the required functions
import { clearEntryFields } from './clearEntries.js';
import { showSnackbar } from './showSnackbar.js';
//This function will delete the corresponding row of the table when user clicks on delete(X) button.
export function deleteRow(r) {
    var _a;
    if (confirm("Are you sure you want to delete this rec?")) {
        const row = (_a = r.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
        if (!row)
            return;
        const index = row.rowIndex;
        const table = document.getElementById("viewData");
        if (table)
            table.deleteRow(index);
        //It will remove the data from localstorage JSON array as well. So on page it will not visible as data is deleted from table.  
        const raw = localStorage.getItem("setLocalStorageJSON");
        const data = raw ? JSON.parse(raw) : [];
        const arrayIndex = index - 1;
        if (arrayIndex > -1 && arrayIndex < data.length) {
            data.splice(arrayIndex, 1); // remove 1 item at index
        }
        localStorage.setItem("setLocalStorageJSON", JSON.stringify(data));
        // End of code for deleting data from local storage JSON array as well. 
    }
    else {
        //alert("Deletion action is cancelled.");
        showSnackbar("Deletion action is cancelled.");
    }
}
//This function is called when user has clicked edit button in a table row.
export function editRow(r) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    const row = (_a = r.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
    if (!row)
        return;
    const i = row.rowIndex;
    const rowId = row.id; //alert(rowId);
    const editTableRowNo = document.getElementById("editTableRowNo");
    if (editTableRowNo)
        editTableRowNo.innerHTML = rowId;
    //alert(i);
    const table = document.getElementById("viewData");
    if (!table)
        return;
    const nameForEdit = (_d = (_c = (_b = table.rows[i]) === null || _b === void 0 ? void 0 : _b.cells[0]) === null || _c === void 0 ? void 0 : _c.innerHTML) !== null && _d !== void 0 ? _d : "";
    const emailForEdit = (_g = (_f = (_e = table.rows[i]) === null || _e === void 0 ? void 0 : _e.cells[1]) === null || _f === void 0 ? void 0 : _f.innerHTML) !== null && _g !== void 0 ? _g : "";
    const phoneForEdit = (_k = (_j = (_h = table.rows[i]) === null || _h === void 0 ? void 0 : _h.cells[2]) === null || _j === void 0 ? void 0 : _j.innerHTML) !== null && _k !== void 0 ? _k : "";
    const genderForEdit = (_o = (_m = (_l = table.rows[i]) === null || _l === void 0 ? void 0 : _l.cells[3]) === null || _m === void 0 ? void 0 : _m.innerHTML) !== null && _o !== void 0 ? _o : "";
    //alert(nameForEdit + " " + emailForEdit + " " + phoneForEdit + " " + genderForEdit);
    document.getElementById("userName").value = nameForEdit;
    document.getElementById("email").value = emailForEdit;
    document.getElementById("phone").value = phoneForEdit;
    document.getElementById("gender").value = genderForEdit;
    const btnAdd = document.getElementById("btnAddData");
    const btnEdit = document.getElementById("btnEditData");
    if (btnAdd)
        btnAdd.style.display = 'none';
    if (btnEdit)
        btnEdit.style.display = 'block';
    //document.getElementById("btnAddData").style.display= 'none';
    //document.getElementById("btnEditData").style.display= 'block';
}
//This function is called when user has clicked Save Changes to save, modified info and store it back and save in same table row.
export function saveEditedData() {
    const editTableRowNo = document.getElementById("editTableRowNo");
    if (!editTableRowNo)
        return;
    const rowId = editTableRowNo.innerHTML; //alert(rowId);  
    const i = Number(rowId.split("_")[1]); //alert(i);
    const userName = document.getElementById("userName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const gender = document.getElementById("gender");
    // Update table cells
    const cellOne = document.getElementById(`cellOne_${i}`);
    const cellTwo = document.getElementById(`cellTwo_${i}`);
    const cellThree = document.getElementById(`cellThree_${i}`);
    const cellFour = document.getElementById(`cellFour_${i}`);
    if (cellOne)
        cellOne.innerHTML = userName.value;
    if (cellTwo)
        cellTwo.innerHTML = email.value;
    if (cellThree)
        cellThree.innerHTML = phone.value;
    if (cellFour)
        cellFour.innerHTML = gender.value;
    //document.getElementById("cellOne_" + i).innerHTML= document.getElementById("userName").value;
    //document.getElementById("cellTwo_" + i).innerHTML= document.getElementById("email").value;
    //document.getElementById("cellThree_" + i).innerHTML= document.getElementById("phone").value;
    //document.getElementById("cellFour_" + i).innerHTML= document.getElementById("gender").value;   
    const btnAdd = document.getElementById("btnAddData");
    const btnEdit = document.getElementById("btnEditData");
    if (btnAdd)
        btnAdd.style.display = 'block';
    if (btnEdit)
        btnEdit.style.display = 'none';
    //const key = "setLocalStorageJSON";
    const index = i - 1; // position to update
    //alert(index);
    // 1. Get and parse
    const raw = localStorage.getItem("setLocalStorageJSON");
    const data = raw ? JSON.parse(raw) : [];
    // 2. New updated object
    const updatedNode = {
        name: userName.value,
        email: email.value,
        phone: phone.value,
        gender: gender.value
    }; //alert(updatedNode);
    // 3. Replace using splice
    if (index > -1 && index < data.length) { //alert("here");
        data.splice(index, 1, updatedNode); // remove 1, insert updatedNode
    }
    localStorage.setItem("setLocalStorageJSON", JSON.stringify(data));
    // clear entry fields after submission
    clearEntryFields();
}

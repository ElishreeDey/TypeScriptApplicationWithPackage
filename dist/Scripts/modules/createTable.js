export function createTableFromData(name, email, phone, gender) {
    //alert("create table from data");
    //save to local storage
    localStorage.setItem("userName", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("gender", gender);
    const table = document.getElementById("viewData");
    // Insert a new row at the end (-1 adds to the last position)
    //let newRow = table.insertRow(-1);
    if (!table)
        return;
    const newRow = table.insertRow(1); // Insert new row at position 1 to add new data at top of the table. 
    const setRowNumber = table.rows.length - 1;
    // Set the dynamic ID to created table row.
    newRow.id = "row_" + setRowNumber;
    // Insert new cells into that created row and set dynamic IDs to each cell.
    const cellOne = newRow.insertCell(0);
    cellOne.id = "cellOne_" + setRowNumber;
    const cellTwo = newRow.insertCell(1);
    cellTwo.id = "cellTwo_" + setRowNumber;
    const cellThree = newRow.insertCell(2);
    cellThree.id = "cellThree_" + setRowNumber;
    const cellFour = newRow.insertCell(3);
    cellFour.id = "cellFour_" + setRowNumber;
    const cellFive = newRow.insertCell(4);
    cellFive.id = "cellFive_" + setRowNumber;
    const cellSix = newRow.insertCell(5);
    cellSix.id = "cellSix_" + setRowNumber;
    // Add content to the new cells
    cellOne.innerHTML = name;
    cellTwo.innerHTML = email;
    cellThree.innerHTML = phone;
    cellFour.innerHTML = gender;
    cellFive.innerHTML = "<span value='Edit' onclick='editRow(this)'>Edit</span>";
    cellSix.innerHTML = "<span value='X' onclick='deleteRow(this)'>X</span>";
    // Setting colors to edit and delete(X) buttons
    cellFive.style.color = "blue";
    cellSix.style.color = "red";
}

export function clearEntryFields() {
    const userNameEntry = document.getElementById("userName");
    const emailEntry = document.getElementById("email");
    const phoneEntry = document.getElementById("phone");
    const genderEntry = document.getElementById("gender");
    const mandatoryName = document.getElementById("mandatoryName");
    const mandatoryEmail = document.getElementById("mandatoryEmail");
    const mandatoryPhone = document.getElementById("mandatoryPhone");
    if (userNameEntry) {
        userNameEntry.value = "";
    }
    if (emailEntry) {
        emailEntry.value = "";
    }
    if (phoneEntry) {
        phoneEntry.value = "";
    }
    if (genderEntry) {
        genderEntry.value = "";
    }
    if (mandatoryName) {
        mandatoryName.style.display = "";
        mandatoryName.innerHTML = "*";
    }
    if (mandatoryEmail) {
        mandatoryEmail.style.display = "";
        mandatoryEmail.innerHTML = "*";
    }
    if (mandatoryPhone) {
        mandatoryPhone.style.display = "";
        mandatoryPhone.innerHTML = "*";
    }
}

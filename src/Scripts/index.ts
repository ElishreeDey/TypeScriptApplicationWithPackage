import { clearEntryFields } from './modules/clearEntries.js';
import { checkNotIsEmpty, validateEmail, validateFlexiblePhone } from './modules/validation.js';
import { createTableFromData } from './modules/createTable.js';
import { saveEditedData,deleteRow ,editRow} from './modules/editDeleteData.js';
import { saveData} from './modules/saveData.js';
import { displayData} from './modules/displayTable.js';


// 1. Declare the property on the global Window interface
declare global {
  interface Window {
    saveData: typeof saveData;
    //saveData: any; // Or use a specific function type like (data: any) => void
    saveEditedData: typeof saveEditedData;
    deleteRow: typeof deleteRow;
    editRow: typeof editRow;
    checkNotIsEmpty: typeof checkNotIsEmpty;
    validateEmail: typeof validateEmail;
    validateFlexiblePhone: typeof validateFlexiblePhone;
  }
}

window.saveData = saveData;
window.saveEditedData = saveEditedData;
window.deleteRow = deleteRow;
window.editRow = editRow;
window.checkNotIsEmpty = checkNotIsEmpty;
window.validateEmail = validateEmail;
window.validateFlexiblePhone = validateFlexiblePhone;

// run on load
window.onload = displayData;
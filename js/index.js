

itemsController.addItem("floresA", "Flores/img", "Flores Azules");
itemsController.addItem("floresB", "Flores/img", "Flores Rojas");
console.log(itemsController.items);
// Select the New Task Form
const newItemForm = document.querySelector('#newItemForm');

// Add an 'onsubmit' event listener
newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    
    const newItemNameInput = document.querySelector('#newItemNameInput');
    const newItemDescription = document.querySelector('#newItemDescription');
    
    /*
        Validation code here
    */

    // Get the values of the inputs
    const name = newItemNameInput.value;
    const description = newItemDescription.value;

    // Add the task to the task manager
    itemsController.addItem(name, description);

    // Clear the form
    newItemNameInput.value = '';
    newItemDescription.value = '';
});


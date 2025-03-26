import ItemsController from "./itemsController.js";

document.addEventListener("DOMContentLoaded", function() {
    const itemsController = new ItemsController();
    const newItemForm = document.querySelector("#newItemForm");

    if (!newItemForm) {
        console.error("No se encontró el formulario con id 'newItemForm'. Verifica que el ID es correcto y que el script se carga en la página adecuada.");
        return;
    }

    newItemForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("newItemNameInput").value;
        const description = document.getElementById("newItemDescription").value;
        const img = document.getElementById("newItemImage").value;

        itemsController.addItem(name, img, description);

        alert("Producto añadido correctamente");
        newItemForm.reset(); // Limpia el formulario después de añadir el producto
    });
});

class ItemsController {
    constructor (currentId = 0){
        this.items = [];
        this.currentId = currentId;
        this.loadItemsFromLocalStorage();
    }

    loadItemsFromLocalStorage() {
        const savedItems = localStorage.getItem("items");
        if (savedItems) {
            this.items = JSON.parse(savedItems);
            this.currentId = this.items.length ? this.items[this.items.length - 1].id + 1 : 0;
        }
    }

    saveItemsToLocalStorage() {
        localStorage.setItem("items", JSON.stringify(this.items));
    }


    addItem(name, img, description, price){
        const item = {
            id : this.currentId++,
            name : name,
            img: img,
            description : description,
            price : price
        };

        fetch("http://localhost:3000/items", { // Asegúrate de que el servidor json-server esté corriendo
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Producto guardado en el servidor:", data);
            this.items.push(data);
            this.saveItemsToLocalStorage(); // También guardamos en localStorage si es necesario
        })
        .catch(error => console.error("Error al guardar:", error));
    }

    

    

    removeItems(id){
        this.items = this.items.filter(item => item.id !== id);
    };

    // loadItemsFromLocalStorage() {
    //     const storageItems = localStorage.getItem("items")
    //     if (storageItems) {
    //         const items = JSON.parse(storageItems)
    //         for (var i = 0, size = items.length; i < size; i++) {
    //             const item = items[i];
    //             this.items.push(item);
    //         }
    //     }
    // }
};

export default ItemsController;
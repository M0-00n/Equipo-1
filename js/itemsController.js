class ItemsController {
    constructor (currentId = 0){
        this.items = [];
        this.currentId = currentId;
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


    addItem(name, img, description){
        const item = {
            id : this.currentId++,
            name : name,
            img: img,
            description : description,
        };
        this.items.push(item);
        this.saveItemsToLocalStorage(); // Guardar los productos actualizados en el LocalStorage
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
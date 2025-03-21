class ItemsController {
    constructor (currentId = 0){
        this.items = [];
        this.currentId = currentId;
    }

    addItem(name, img, description){
        const item = {
            id : this.currentId++,
            name : name,
            img: img,
            description : description,
        }

        this.items.push(item);
    }

    // removeItems(id){
    //     this.items = this.items.filter(item => item.id !== id);
    // }

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

}

const product = new ItemsController()
product.addItem("FloresR", "FloresRojasImg", "Flores Rojas");
product.addItem("FloresA", "FloresAzulesImg", "Flores Azuless");
console.log(product);
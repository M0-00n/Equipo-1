
class ItemsController {
    constructor (){
        this.items = [];
        this.currentId = 1;

    }

    addItem(name, description){
        const item = {
            id : this.currentId++,
            name : name,
            description : description,
        }

        this.items.push(item);
    }

    removeItems(currentId){
        this.items.splice(currentId - 1, 1)
    }

}

// const productos = new ItemsController()
// productos.addItem("flores", "Flores/img", "Flores Rojas")
// console.log(productos.items)

// productos.removeItems(1)
// console.log(productos.items)

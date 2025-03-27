// Initialize a new TaskManager with currentId set to 0
import ItemsController from "./itemsController.js"
const itemsController = new ItemsController();


function addItemCard(item){
    const itemHTML = '<div class="card mb-3" style="max-width: 540px;">\n' +
        '   <div class="row no-gutters">\n' +
        '   <div class="col-md-4">\n'+
        '       <img src="'+item.img+'" class="card-img" alt="...">\n'+
        '    </div>\n'+
        '    <div class="col-md-8">\n' +
        '        <div class="card-body">\n' +
        '           <h5 class="card-title">'+item.name+'</h5>\n' +
        '           <p class="card-text">'+item.description+'</p>\n' +
        '           <p class="card-text"> $'+item.price+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

function loadCardsListFromItemsController() {
    if (itemsController.items.length === 0) {
        console.warn("No hay elementos en itemsController.items");
        return;
    }

    itemsController.items.forEach(item => addItemCard(item));
}

document.addEventListener("DOMContentLoaded", function() {
    itemsController.loadItemsFromLocalStorage();
    loadCardsListFromItemsController();
});

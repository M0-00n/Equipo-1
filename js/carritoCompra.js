document.addEventListener('DOMContentLoaded', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contenedor = document.getElementById('carrito-contenido');

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>🛒 Tu carrito está vacío.</p>";
        return;
    }

    let total = 0;

    // Limpiar el contenedor antes de agregar los productos
    contenedor.innerHTML = '';

    carrito.forEach(producto => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'card mb-3';
        tarjeta.innerHTML = `
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${producto.imageUrl}" class="card-img2" alt="${producto.productName}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="h3TipoLetra">${producto.productName}</h3>
                        <p class="pTipoLetra">${producto.productDescription}</p>
                        <p class="pTipoLetra"><strong>Precio:</strong> $${producto.product_price}</p>
                        <p class="pTipoLetra"><strong>Cantidad:</strong> ${producto.quantity}</p>
                        <button class="btn btn-danger btn-eliminar" data-id="${producto.id}">Eliminar</button>
                    </div>
                </div>
            </div>
        `;
        contenedor.appendChild(tarjeta);
        total += producto.product_price * producto.quantity;
    });

    const totalContenedor = document.createElement('div');
    totalContenedor.className = 'total-carrito';
    totalContenedor.innerHTML = `
        <h2 class="h2TipoLetra">Total: $${total.toFixed(2)}</h2>
    `;
    contenedor.appendChild(totalContenedor);
    

    const botonesEliminar = document.querySelectorAll('.btn-eliminar');
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', (event) => {
            const productoId = event.target.getAttribute('data-id');
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            const productoIndex = carrito.findIndex(producto => String(producto.id) === productoId);

            if (productoIndex !== -1) {
                if (carrito[productoIndex].quantity > 1) {
                    carrito[productoIndex].quantity -= 1;
                } else {
                    carrito.splice(productoIndex, 1); // elimina el producto si la cantidad es 1
                }

                localStorage.setItem('carrito', JSON.stringify(carrito));
                location.reload();
            }
        });
    });
});


function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Obtener los valores de listón y tarjeta si están disponibles
    const colorListon = document.getElementById('color-liston') ? document.getElementById('color-liston').value : null;
    const mensajeTarjeta = document.getElementById('floatingTextarea2') ? document.getElementById('floatingTextarea2').value.trim() : null;

    // Asociar el color del listón y el mensaje de tarjeta al producto
    const productoModificado = {
        ...producto,  // Copiar las propiedades originales del producto
        liston: colorListon && colorListon !== "Selecciona el color" ? colorListon : null,  // Asignar listón si está disponible
        tarjetaTexto: mensajeTarjeta || null  // Asignar mensaje de tarjeta si está disponible
    };

    const productoExistente = carrito.find(p => p.id === productoModificado.id);

    if (productoExistente) {
        productoExistente.quantity += 1;
    } else {
        productoModificado.quantity = 1;
        carrito.push(productoModificado);
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`✅ "${producto.productName}" se agregó al carrito`);
}



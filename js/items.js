const URL_API = "http://localhost:8080/products";

// Cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('list-items')) {
        cargarProductos();
    }

    const form = document.getElementById('newItemForm');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            agregarProducto();
        });
    }
});

// Cargar todos los productos desde la API
function cargarProductos() {
    const secciones = [
        'list-items',
        'list-items-follaje',
        'list-items-papel'
        // 'list-items-liston',
        // 'list-items-tarjeta'
    ];

    secciones.forEach(id => {
        const seccion = document.getElementById(id);
        if (seccion) seccion.innerHTML = "";
    });

    fetch(URL_API)
        .then(res => res.json())
        .then(data => {
            data.forEach(producto => mostrarProducto(producto));
        })
        .catch(err => console.error("Error al cargar productos:", err));
}

// Mostrar un producto en su sección
function mostrarProducto(producto) {
    const contenedores = {
        flores: 'list-items',
        follaje: 'list-items-follaje',
        papel: 'list-items-papel'
        // liston: 'list-items-liston',
        // tarjeta: 'list-items-tarjeta'
    };

    const tipo = producto.productType.toLowerCase();
    const seccionId = contenedores[tipo];

    if (!seccionId) return;
    const contenedor = document.getElementById(seccionId);

    const tarjeta = document.createElement('div');
    tarjeta.className = 'card mb-3 container py-4';
    tarjeta.style.maxWidth = '540px';

    tarjeta.innerHTML = `
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${producto.imageUrl}" class="card-img2" alt="Imagen de ${producto.productName}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h3 class="h3TipoLetra">${producto.productName}</h3>
                    <p class="pTipoLetra">${producto.productDescription}</p>
                    <p class="pTipoLetra">$${producto.product_price}</p>
                    <div class="d-flex justify-content-between mt-3">
                        <button class="btn btn-warning btn-sm" onclick="editarProducto(${producto.id})">Editar</button>
                        <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${producto.id})">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    contenedor.appendChild(tarjeta);
}

// Agregar nuevo producto
function agregarProducto() {
    const producto = {
        productType: document.getElementById('newItemTypeInput').value,
        productName: document.getElementById('newItemNameInput').value,
        productDescription: document.getElementById('newItemDescription').value,
        imageUrl: document.getElementById('newItemImage').value,
        product_price: document.getElementById('newItemPrice').value,
        quantity: 1
    };

    fetch(`${URL_API}/add-product`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto)
    })
    .then(res => {
        if (res.ok) {
            alert("Producto agregado ✅");
            setTimeout(() => {
                window.location.href = "listaProductos.html";
            }, 500); // medio segundo
                    } else {
            throw new Error("Error al agregar producto");
        }
    })
    .catch(err => {
        console.error("Error:", err);
        alert("Error al guardar producto ❌");
    });
}

// Eliminar producto
function eliminarProducto(id) {
    if (!confirm("¿Estás seguro de que deseas eliminar este producto?")) return;

    fetch(`${URL_API}/delete-product/${id}`, {
        method: 'DELETE'
    })
    .then(res => {
        if (res.ok) {
            alert("Producto eliminado ❌");
            cargarProductos();
        } else {
            throw new Error("Error al eliminar");
        }
    })
    .catch(err => {
        console.error("Error:", err);
        alert("No se pudo eliminar el producto");
    });
}

// Editar producto (opcional: redirigir a un formulario o usar prompt)
function editarProducto(id) {
    // Puedes hacer que esto redirija a otra página con el ID como query param, o usar prompts:
    fetch(`${URL_API}/${id}`)
        .then(res => res.json())
        .then(producto => {
            const nuevoNombre = prompt("Nuevo nombre del producto:", producto.productName);
            const nuevoPrecio = prompt("Nuevo precio:", producto.product_price);
            const nuevaDescripcion = prompt("Nueva descripción:", producto.productDescription);

            if (nuevoNombre && nuevoPrecio && nuevaDescripcion) {
                const productoActualizado = {
                    ...producto,
                    productName: nuevoNombre,
                    product_price: nuevoPrecio,
                    productDescription: nuevaDescripcion
                };

                return fetch(`${URL_API}/update-product/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(productoActualizado)
                });
            }
        })
        .then(res => {
            if (res && res.ok) {
                alert("Producto actualizado ✅");
                cargarProductos();
            }
        })
        .catch(err => {
            console.error("Error al editar producto:", err);
            alert("Error al actualizar producto");
        });
}

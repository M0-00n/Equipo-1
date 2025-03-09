/* Página: Sobre nosotras */
//Puntero de circulos
document.addEventListener("DOMContentLoaded", function () {
    const cuerpo = document.getElementById("cuerpo"); 

    if (!cuerpo) {
        console.error("El elemento con ID 'cuerpo' no existe.");
        return;
    }

    cuerpo.addEventListener("click", function (event) {
        // Crear un círculo
        const circle = document.createElement("div");
        circle.classList.add("click-circle");

        // Posicionar el círculo donde se hizo clic dentro del `main`
        const x = event.clientX;
        const y = event.clientY;
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;

        // Agregar el círculo al `body`
        document.body.appendChild(circle);

        // Eliminar el círculo después de 3 segundos
        setTimeout(() => {
            circle.remove();
        }, 3000); 
    });
});
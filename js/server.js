const http = require('http');
const fs = require('fs');

const PORT = 3000;


const server = http.createServer((req, res) => {
    //Manejar Solicitudes GET (Obtener Datos)
    if (req.method === 'GET' && req.url === '/items') {
        fs.readFile('data.json', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: "Error al leer los datos" }));
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        });
        //Manejar Solicitudes POST (Guardar Datos)
    } else if (req.method === 'POST' && req.url === '/items') {
        let body = '';
    
        req.on('data', chunk => {
            body += chunk.toString();
        });
    
        req.on('end', () => {
            fs.readFile('data.json', 'utf8', (err, data) => {
                let items = [];
                if (!err && data) {
                    items = JSON.parse(data);
                }
    
                const newItem = JSON.parse(body);
                items.push(newItem);
    
                fs.writeFile('data.json', JSON.stringify(items, null, 2), (err) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ error: "Error al guardar datos" }));
                        return;
                    }
    
                    res.writeHead(201, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: "Producto guardado", data: newItem }));
                });
            });
        });
        //Manejar Errores y Rutas No Encontradas
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: "Ruta no encontrada" }));
    }
        
    
})

/*Si la petición es de tipo GET y la URL es /items:
Se lee el archivo data.json con fs.readFile().
Si hay un error al leerlo, se envía una respuesta con estado 500 (Internal Server Error).
Si no hay error, se envía el contenido del archivo con estado 200 (OK) y en formato JSON.
¿Qué significa esto?
Cuando un usuario accede a http://localhost:3000/items, el servidor responde con la lista de productos guardados en data.json. 
Si la petición es POST y la URL es /items, significa que el cliente quiere enviar datos al servidor.
Se inicializa body = '' para almacenar los datos que llegan en partes (chunks).
req.on('data', chunk => { body += chunk.toString(); });
Cada vez que llega un fragmento de datos, se convierte a string y se concatena en body.
req.on('end', () => { ... })
Cuando termina de recibir los datos, se ejecuta la lógica para guardar la información.
Se lee el archivo data.json para obtener los datos ya almacenados.
Si hay datos previos, se convierten de JSON a un array items.
Se convierte el body en un objeto newItem y se agrega a items.
Se escribe el archivo data.json con los datos actualizados.
Si la escritura fue exitosa, se envía un mensaje de confirmación con estado 201 (Created).
🔹 ¿Qué significa esto?
Cada vez que alguien envíe un nuevo producto con un POST a http://localhost:3000/items, este se guardará en data.json.
*/
//Si la URL no es /items o el método no es GET o POST, se devuelve un error 404 (Not Found).

//Iniciar el Servidor
server.listen(PORT, () => { // inicia el servidor y ejecuta la función de console.log() cuando está listo.
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

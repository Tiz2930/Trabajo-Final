//declaramos el arreglo con la lista de productos.
const productos = [
    { id:"pepas",nombreProducto: "Pepas",precio: 1300, descripcion:"Pepas", stock:30, },
    { id:"coca",nombreProducto: "CocaCola",precio: 2900,descripcion:"CocaCola", stock:30, },
    { id:"arroz",nombreProducto: "Arroz Marolio",precio: 2500,descripcion:"Arroz Marolio",stock:30,},
    { id:"magistral",nombreProducto: "Detergente magistral", precio: 1000,descripcion:"Detergente magistral",stock:30,},
    { id:"gdeagua", nombreProducto: "Galletitas de agua", precio: 1500, descripcion:"Galletitas de agua", stock:30,},
    { id:"dove",nombreProducto: "Jabon Dove",precio: 2000,descripcion:"Jabon Dove",stock:30,},
    { id:"aceite",nombreProducto: "Aceite Natura", precio: 1000,descripcion:"Aceite Natura",stock:30,},
    { id:"fideos",nombreProducto: "Fideos Lucchetti",precio: 1600,descripcion:"Fideos Lucchetti",stock: 30,},
    { id:"papas",nombreProducto: "Papas Pringles", precio: 3000,descripcion:"Papas Pringles",stock: 30,},
    { id:"gomitas",nombreProducto: "Gomitas",precio: 1200,descripcion:"Gomitas",stock: 30,},
    { id:"pureDeTomates",nombreProducto: "Pure de tomates",precio: 900,descripcion:"Pure de tomates",stock: 30,},
    { id:"azucar",nombreProducto: "Azucar",precio: 1000,descripcion:"Azucar",stock: 30,},
    { id:"teMarolio", nombreProducto: "Te Marolio",precio: 1700, descripcion:"Te Marolio", stock: 30,},
    { id:"cafe", nombreProducto: "Cafe", precio: 5000,descripcion:"Cafe", stock: 30,},
    { id:"alfajor",nombreProducto: "Alfajor Fantoche",precio: 800,descripcion:"Alfajor Fantoche",stock: 30,},
    { id:"leche", nombreProducto: "Leche", precio: 1500, descripcion:"Leche", stock: 30},
    { id:"mermelada", nombreProducto: "Mermelada", precio: 2500, descripcion:"Mermelada", stock: 30}
];

function comprarProducto(id) {
    // Encuentra el producto por ID
    const producto = productos.find(p => p.id === id); //usamos el metodo .find para devolver el primer elemento del array que cumpla con la condición especificada.

    // Obtener la cantidad deseada del producto
    const cantidadInput = document.getElementById(`cantidad-${id}`);
    const cantidad = parseInt(cantidadInput.value);

    // Declaramos Elementos para mostrar mensajes y total
    const mensajeElement = document.getElementById(`mensaje-${id}`);
    const totalElement = document.getElementById(`total-${id}`);

    // Validaciones 
    if (isNaN(cantidad) || cantidad <= 0) {
        mensajeElement.innerHTML = "La cantidad debe ser un número mayor a 0.";
    } else if (cantidad > producto.stock) {
        mensajeElement.innerHTML = "No hay suficiente stock disponible.";
    } else {
        const total = cantidad * producto.precio;
        totalElement.innerHTML = `Total de la compra: $${total}`;
        mensajeElement.innerHTML = "Compra realizada con éxito.";

    }
};




// Obtener el contenedor de la lista de productos
let lista = document.getElementById("lista");
// Datos de productos
const productos = [
    "pepas",
    "coca",
    "arroz",
    "magistral",
    "gdeagua",
    "dove",
    "aceite",
    "fideos",
    "papas",
    "gomitas",
    "pureDeTomates",
    "azucar",
    "teMarolio",
    "cafe",
    "alfajor",
    "leche",
    "mermelada"
];
const precios = [1300,2900,2500,1000,1500,2000,1000,1600,3000,1200,900,1000,1700,5000,800,1500,2500];
const stock = [30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30];
const imagenes = ["./imagenes/pepasTerepin.png",
    "./imagenes/cocaCola.jpg",
    "./imagenes/arrozMarolio.png",
    "./imagenes/detergenteMagistral.png",
    "./imagenes/galletitasDeAgua.png",
    "./imagenes/jabonDove.png",
    "./imagenes/aceiteNatura.png",
    "./imagenes/fideosLucchetti.png",
    "./imagenes/papasPringles.png",
    "./imagenes/gomitas.png",
    "./imagenes/pureDeTomates.png",
    "./imagenes/azucar.png",
    "./imagenes/teMarolio.png",
    "./imagenes/cafe.png",
    "./imagenes/alfajorFantoche.png",
    "./imagenes/leche.png",
    "./imagenes/mermelada.png"
];
// Función para pintar productos
function pintarProductos(arrayProductos, arrayPrecios, arrayStock, arrayImagenes) {
    lista.innerHTML = ""; // Limpia la lista antes de agregar nuevos productos
    for (let i = 0; i < arrayProductos.length; i++) {
        // Crear un nuevo elemento <li> para cada producto
        let li = document.createElement("li");
        li.classList.add("tamaño");
        // Crear el contenido HTML para el producto
        li.innerHTML = `
            <img src="${arrayImagen[i]}" alt="${arrayImagen[i]}" class="imagen-producto"><br>
            Producto: ${arrayProductos[i]}<br>
            Precio: $${arrayPrecios[i]}<br>
            Stock: <input type="number" id="stock${i}" value="${arrayStock[i]}" readonly><br>
            Cantidad a comprar: <input type="number" id="entrada${i}" placeholder="Ingrese cantidad"><br>
            <button id="btn${i}" class="descontarStock">Comprar</button>
        `;
        // Añadir el <li> al contenedor de la lista
        lista.appendChild(li);
        // Añadir el evento click a cada botón
        document.getElementById(`btn${i}`).addEventListener("click", () => {
            comprar(i);
        });
    }
}
// Función para manejar la compra
function comprar(index) {
    const stockHTML = document.getElementById(`stock${index}`);
    const entradaHTML = document.getElementById(`entrada${index}`);
    const stockActual = parseInt(stockHTML.value);
    const cantidad = parseInt(entradaHTML.value);
    if (cantidad > 0 && cantidad <= stockActual) {
        stockHTML.value = stockActual - cantidad;
        entradaHTML.value = "";
        alert(`Compra realizada exitosamente.`);
    } else {
        alert('Cantidad no válida. Debe ser mayor que 0 y menor o igual al stock.');
    }
}
// Llamar a la función para pintar productos cuando la página carga
document.addEventListener("DOMContentLoaded", () => {
    pintarProductos(productos, precios, stock, imagenes);
});
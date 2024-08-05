let lista = document.getElementById("lista");
let totalCompra = 0; // Variable para acumular el total de las compras

const productos = [
    "Galletitas Pepas",
    "Coca Cola",
    "Arroz Marolio",
    "Detergente Magistral",
    "Galletitas de agua",
    "Jabon Dove",
    "Aceite Natura",
    "Fideos Lucchetti",
    "Papas Pringles",
    "Gomitas Mogul",
    "Pure de tomate",
    "Azucar Chango",
    "Te Marolio",
    "Cafe Dolca",
    "Alfajor Fantoche",
    "Leche La Serenisima",
    "Mermelada "
];
const precios = [1300, 2900, 2500, 1000, 1500, 2000, 1000, 1600, 3000, 1200, 900, 1000, 1700, 5000, 800, 1500, 2500];
const stock = [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30];
const imagenes = [
    "../imagenes/pepasTerepin.png",
    "../imagenes/cocaCola.jpg",
    "..imagenes/arrozMarolio.png",
    "../imagenes/magistral-750.png",
    "../imagenes/galletitasDeAgua.png",
    "../imagenes/jabonDove.png",
    "../imagenes/aceiteNatura.png",
    "../imagenes/fideosLuchetti.png",
    "../imagenes/papasPringles.png",
    "../imagenes/gomitasMogul.png",
    "../imagenes/pureDeTomates.png",
    "../imagenes/azucarChango.png",
    "../imagenes/teMarolio.png",
    "../imagenes/cafeDolca.png",
    "../imagenes/alfajorFantoche.png",
    "../imagenes/lecheLaSerenisima.png",
    "../imagenes/mermeladaArcor.png"
];

function pintarProductos(arrayProductos, arrayPrecios, arrayStock, arrayImagenes) {
    lista.innerHTML = "";
    for (let i = 0; i < arrayProductos.length; i++) {

        let li = document.createElement("li");
        li.classList.add("tamaño");

        li.innerHTML = `
            <img src="${arrayImagenes[i]}" alt="${arrayImagenes[i]}" class="imagen-producto"><br>
            <span class="producto"> ${arrayProductos[i]} </span> <br> 
            Precio: $${arrayPrecios[i]}<br>
            Stock: ${arrayStock[i]}<br>
            Cantidad a comprar: <input type="number" id="entrada${i}" placeholder="Ingrese cantidad"><br>
            <button id="btn${i}" class="descontarStock">Comprar</button>
        `;

        lista.appendChild(li);

        document.getElementById(`btn${i}`).addEventListener("click", () => {
            comprar(i);
        });
    }
}

function comprar(index) {
    const cantidad = parseInt(document.getElementById(`entrada${index}`).value);
    if (cantidad > 0 && cantidad <= stock[index]) {
        stock[index] -= cantidad;
        
        // Calcular el total de la compra actual
        const totalProducto = cantidad * precios[index];
        totalCompra += totalProducto; // Sumar al total acumulado

        const nuevoContenido = `
            <img src="${imagenes[index]}" alt="${productos[index]}" class="imagen-producto"><br>
            <span class="producto"> ${productos[index]} </span> <br> 
            Precio: $${precios[index]}<br>
            Stock: ${stock[index]}<br>
            Cantidad a comprar: <input type="number" id="entrada${index}" placeholder="Ingrese cantidad"><br>
            <button id="btn${index}" class="descontarStock">Comprar</button>
        `;

        // Reemplazar el contenido del li
        document.querySelector(`#lista li:nth-child(${index + 1})`).innerHTML = nuevoContenido;

        // Volver a añadir el event listener para el botón de compra
        document.getElementById(`btn${index}`).addEventListener("click", () => {
            comprar(index);
        });

        // Mostrar un mensaje de éxito con el total de la compra
        Swal.fire({
            position: "center",
            icon: "success",
            title: `Compra realizada exitosamente.`,
            text: `Total de la compra: $${totalProducto}. Total acumulado: $${totalCompra}.`,
            showConfirmButton: false,
            timer: 2000
        });
    } else {

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Cantidad no válida. Debe ser mayor que 0 y menor o igual al stock.",
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    pintarProductos(productos, precios, stock, imagenes);
});
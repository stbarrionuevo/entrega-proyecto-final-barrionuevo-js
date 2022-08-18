// //Declaro variable principal de mi catalogo de productos disponible
// const productosDisponibles = [
// {   nombre: "Remera básica",
//      color: "negro" ,
//     precio: 1999},

//     {nombre: "Remera con estampado",
//     color:"blanca" ,
//     precio: 2199},


//     {nombre: "Campera",
//     color: "verde",
//     precio: 3599},


//     {nombre: "Campera rompevientos",
//     color:"azul" ,
//     precio: 4299},


//     {nombre: "Buzo",
//     color:"rojo" ,
//     precio: 3999},


//     {nombre: "Sweater",
//     color:"negro" ,
//     precio: 4199},


//     {nombre: "Saco",
//     color:"negro" ,
//     precio: 2999},


//     {nombre: "Jean",
//     color: "azul claro"
//     ,precio: 5999},
   

// ];

// //Declaro carrito
// const carrito = []

// //let elegirProductos = prompt('Te damos la bienvenida a nuestra sección de compras. ¿Desea añadir productos al carrito? y/n')

// // while( elegirProductos != 'y' && elegirProductos != 'n'){
// //     alert('Por favor ingrese "y" en caso de querer añadir productos o "n" si no desea hacerlo')
// //     elegirProductos = prompt("Bienvenido a la sección de compras.¿Desea añadir productos a su carrito? y/n")
// // }

// // //Muestro catalogo
// // if(elegirProductos == 'y'){
// //     alert('A continuación se mostrará nuestra lista completa de productos disponibles')

// //     const catalogo = productosDisponibles.map( (producto) => producto.nombre + " en color " + producto.color + " " + producto.precio + "$");

// //     alert('Catálogo temporada Invierno 22 \n -' + catalogo.join(" \n - "))
// // }

// // else if( elegirProductos == 'n'){
// //     alert('Lamentamos mucho que no quieras comprar nada :( ')
// // }


// while(elegirProductos != 'n'){
//     let compra = prompt("Ingrese el nombre del producto que quiere añadir. Recuerde que puede ser: Remera básica - Remera con estampado - Campera - Campera rompevientos - Buzo - Sweater - Saco o Jean ;)")
//     let costo = 0;

//     if(compra == "Remera básica" ||compra == "Remera con estampado" || compra == "Campera" || compra == "Campera rompevientos" || compra == "Buzo" || compra == "Sweater" || compra == "Saco" || compra == "Jean"  ){

//         switch(compra){
//             case "Remera básica":
//             costo = 1999
//             break

//             case "Remera con estampado":
//             costo = 2199
//             break

//             case "Campera":
//             costo = 3599
//             break

//             case "Campera rompevientos":
//             costo = 4299
//             break

//             case "Buzo":
//             costo = 3999
//             break

//             case "Sweater":
//             costo = 4199
//             break

//             case "Saco":
//             costo = 2999
//             break

//             case "Jean":
//             costo = 5999
//             break

//             default:
//             break;
//         }

//         let cantidad = parseInt(prompt("Ingrese cuántas unidades desea comprar"))

//         carrito.push({compra, cantidad , costo})
    

//     } else{
//         alert("El producto que usted seleccionó no existe o ya no se encuentra disponible en nuestro stock :(")
//     }

//     elegirProductos = prompt("¿Desea seguir añadiendo productos al carrito? y/n")
    
//     while(elegirProductos == 'n'){
//         alert("Gracias por tu compra, llegará en los próximos 3 - 5 días hábiles!")
//         carrito.forEach((carritoFinal) => { 
//             console.log("Ticket de compra",`Prenda: ${carritoFinal.compra}, cantidad: ${carritoFinal.cantidad}, total a pagar por producto: $ ${carritoFinal.cantidad * carritoFinal.costo}`)

//         })
//         break;
//     }
// }


// const total = carrito.reduce(parseInt((acumulador , producto ) => 
//     {return acumulador + producto.precio * producto.cantidad} , 0))
   
    
//     if( total === 0){ alert("Gracias por su consulta, esperamos que vuelvas pronto! - KANKI STORE©")}
//     else{

//     alert("A continuación puede acceder a la consola a consultar cuanto es el total de su compra por el ticket que creamos. Esperamos que disfrute su compra! - KANKI STORE©")
    
//     console.log("El total a pagar es de: $" +  total + " recuerde que aceptamos todos los medios de pago! - KANKI STORE©")}


let total = 10;

// total++;

total+= 1;

console.log(total)
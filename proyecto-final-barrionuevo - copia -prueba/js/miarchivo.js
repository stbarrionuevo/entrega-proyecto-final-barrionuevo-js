//Funcion con api

let dolarBluePrecio; 

const getPrecioDolar = () => { fetch("https://www.dolarsi.com/api/api.php?type=dolar")

    .then((response) => response.json())
    .then((data) => {   
    dolarBluePrecio = data[1].casa.compra
    const p = document.getElementById('dolar-actual')
    p.innerText = "Actualmente el precio de venta de dólar blue es de: $" + dolarBluePrecio
   
})
.catch(error => console.log(error , "Hubo un error, algo salió mal. No te preocupes, no es tu culpa!"))

}


//Declaro array con productos (stock)
const productosDisponibles =  stockActual

//contenedor de productos
    const stockDisponible = document.getElementById('mostar-productos')



//Declaro carrito
    let carrito = []  

    

//Local storage
document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'));
        actualizarCarrito();
        
    }
})





//Represento carrito en dom
const carritoDom = document.getElementById('carrito')



//Pongo mi catalogo en el DOM

     productosDisponibles.forEach((producto) => {

        const div = document.createElement('div')

        div.classList.add('contenedor-cards')
        

        div.innerHTML= `
        <div class="card col-4" style="width: 18rem;">
        <img src=${producto.img} class="images-catalogo ">
        <div class="card-body">
        <h5 class= "card-tittle"><strong>${producto.nombre}</strong></h5>
        <p class="card-text">Talle: ${producto.talle}</p>
        <p class="card-text">Precio:$ ${producto.precio}</p>
        <button id="agregar${producto.id}" class="btn btn-primary boton-cat">Agregar a carrito <i class="fa-solid fa-plus"></i></button>
       </div>
       </div>
        `
        stockDisponible.appendChild(div)

        const boton = document.getElementById(`agregar${producto.id}`)

        //Evento para agregar a carrito
        boton.addEventListener('click', () => {
        agregarACarrito(producto.id);
        Toastify({
            text: "¡Se añadió correctamente al carrito 🛒✅!",
            duration: 2000,
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "right",
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} 
          }).showToast();
})

    })

  
//Funcion para agregar a carrito

const agregarACarrito = (idProducto) => {

    const mismoProducto = carrito.some (producto => producto.id === idProducto)
    if(mismoProducto){
        const producto = carrito.map(producto => {
          producto.id === idProducto && producto.cantidad++ 
        })
    }
    else{
    const item = productosDisponibles.find((producto) => producto.id === idProducto )
    carrito.push(item)}


    actualizarCarrito()
    console.log(carrito)
    sumarProductos();
   
}


//Funcion para eliminar del carrito

const eliminarProducto = (productoId) => {

    const mismoProducto = carrito.some (producto => producto.id === producto)
{


    
const item = carrito.find((producto) => producto.id === productoId)

const parametro = carrito.indexOf(item)

carrito.splice(parametro , 1)

actualizarCarrito();
restarProductos();

}
if(mismoProducto){
    const producto = carrito.map(producto => {
      producto.id === productoId && producto.cantidad-- 
    })
}
}

//Funcion para recargar carrito

const actualizarCarrito = () => {
    carritoDom.innerHTML = ""


    carrito.forEach((producto) => {
        const div = document.createElement('div')
        div.innerHTML = `
        <p class="producto-ingresado">* ${producto.nombre}</p>
        <p>Precio: ${producto.precio}</p>
        <p>Cantidad:<span id="cantidad"> ${producto.cantidad}</span> </p>
        <button onclick= "eliminarProducto(${producto.id})" class="btn btn-primary boton-cat">Eliminar de carrito <i class="fa-solid fa-trash"></i></button>
        `
        carritoDom.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))
   
    })

}

//Represento total a pagar en el Dom
const totalAPagar = document.getElementById('precio-total')
const totalEnDolar = document.getElementById('dolar')


//Funcion final para sumar total a pagar

const sumarProductos = () =>
{
totalAPagar.innerText = carrito.reduce((acumulador , producto) => (acumulador + producto.precio)* producto.cantidad , 0)
totalEnDolar.innerText = Math.round(carrito.reduce((acc , producto) => (acc + producto.precio ) * producto.cantidad /dolarBluePrecio, 0))}

//Funcion para restar
const restarProductos = () =>{

    totalAPagar.innerText = carrito.reduce((acc , prod ) =>
    (acc - prod.precio),  0)
}


//Boton vaciar carrito

const botonVaciar = document.getElementById('vaciar-carrito').addEventListener('click', (producto) => {
    carrito.length = 0 
    producto.cantidad = 0
     totalAPagar.innerText = 0 
     totalEnDolar.innerText = 0     
        actualizarCarrito()
        Toastify({
            text: "Se ha vaciado completamente el carrito  🛒❌",
            style: {
              background: "linear-gradient(to right, #900, #922)",
            }
          }).showToast();; 
})

//Boton finalizar compra

const botonFin = document.getElementById('boton-fin').addEventListener('click', () => {
    
    if(totalAPagar.innerText != 0){Swal.fire({
        title: 'Está seguro que quiere confirmar la compra? Costará: $'+ totalAPagar.innerText + "\n(U$D " + totalEnDolar.innerText + " dólares)",
        showDenyButton: true,
        icon:'info',
        confirmButtonText: 'Si, estoy seguro',
        denyButtonText: `No, cancelar compra`,
      }).then((result) => {
        
        if (result.isConfirmed) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Su compra ha sido exitosa! Total a pagar: $' + totalAPagar.innerText + "\nTiempo estimado de entrega:\n de 3 - 5 días hábiles\n Gracias por confiar!",
                showConfirmButton: false,
                timer: 3000
              })
        } else if (result.isDenied) {
          Swal.fire({
            title:'Usted decidió detener la compra, se ha cancelado correctamente',
            icon: 'error'
        })
        }
      })}else{Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Ocurrió un error inesperado, no se puede realizar esta compra',
        showConfirmButton: true,
        confirmButtonText: 'Ok',
        timer: 3000})}})
//Bajar variable de dolar blue

const buttonDolar = document.getElementById('dolar-boton')


buttonDolar.addEventListener('click', () => { 
    
    
  getPrecioDolar();

   
})

//Funcion para calcular precio final en dolares

const calcularPrecioFinalDolar = () => { 
  const totalDolar = totalAPagar / dolarBluePrecio
  return totalDolar
}

        
//Modal

const abrirModal = document.getElementById('ayuda')

const modal = document.querySelector('.modal')

const cerrarModal = document.querySelector('.modal-cerrar')

abrirModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');
})

cerrarModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show');
})


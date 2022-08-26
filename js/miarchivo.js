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

//Destructuring


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

   
{


    
const item = carrito.find((producto) => producto.id === productoId)

const parametro = carrito.indexOf(item)

carrito.splice(parametro , 1)

actualizarCarrito();
restarProductos();

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



//Funcion final para sumar total a pagar

const sumarProductos = () =>
{
totalAPagar.innerText = carrito.reduce((acumulador , producto) => (acumulador + producto.precio)* producto.cantidad , 0)}



const restarProductos = () =>{

    totalAPagar.innerText = carrito.reduce((acc , prod ) =>
    (acc - prod.precio),  0)
}


//Boton vaciar carrito

const botonVaciar = document.getElementById('vaciar-carrito').addEventListener('click', () => {
    carrito.length = 0
     totalAPagar.innerText = 0      
        actualizarCarrito()
        Toastify({
            text: "❌ Se ha vaciado completamente el carrito ❌ ",
            style: {
              background: "linear-gradient(to right, #900, #922)",
            }
          }).showToast();; 
})

//Boton finalizar compra

const botonFin = document.getElementById('boton-fin').addEventListener('click', () => {
    
    if(totalAPagar.innerText != 0){Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Su compra ha sido exitosa! Ha gastado: $' + totalAPagar.innerText,
        showConfirmButton: false,
        timer: 3000
      })}else{Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Ocurrió un error inesperado, no se puede realizar esta compra',
        showConfirmButton: true,
        confirmButtonText: "Entendido",
        timer: 3000})}})





const buttonDolar = document.getElementById("dolar-boton");

const total = totalAPagar.innerText
    
    
//Funcion con api

      const getPrecioDolar = () => { fetch("https://www.dolarsi.com/api/api.php?type=dolar")
      .then((response) => response.json())
      .then((data) => {   
       const dolarbluePrecio = data[1].casa.compra
        
        console.log('Actualmente el precio de venta del dolar blue es de: $',dolarbluePrecio)

      })
      .catch(error => console.log(error , "Hubo un error, algo salió mal"))


    //   const calcularPrecioDolar = (total,dolarbluePrecio) =>{
    //     totalDolar = (total /  dolarbluePrecio)

    const calcularPrecioDolar = () => 
    {
        const span = document.getElementById('dolar')
        const totalDolar = span.innerText = carrito.reduce((total , dolarbluePrecio) => 
        (total / dolarbluePrecio), total)
        
        return totalDolar
        
    }



        calcularPrecioDolar();
        
      
    }
  
  

    buttonDolar.addEventListener('click', getPrecioDolar() )


      
  
















    // const getPrecioDolar = () => { fetch("https://api-dolar-argentina.herokuapp.com/api/dolarblue").then((response) => response.json())
    //     .then((data) => {console.log(data)})
    //     .catch(error => console.log(error , "Hubo un error, algo salió mal"))

        
    //   }
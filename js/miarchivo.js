//Declaro array con productos (stock)
const productosDisponibles = [
    {   nombre: "Camiseta retro Maradona Boca Jrs.",
        precio: 2599,
        talle:"M",
        id:01,
        img:'img-catalogo/boca-diego.webp',
        cantidad:1
    },
    
    {   nombre: "Camiseta titular Boca Jrs 2022",
        precio: 1599,
        talle:"L",
        id:02,
        img:"img-catalogo/boca-titular.webp",
        cantidad:1
    },
    
    
    {   nombre: "Camiseta alternativa amarilla Boca Jrs 2022",
        precio: 1599,
        talle:"XL",
        id:03,
        img:"img-catalogo/boca-amarilla.webp",
        cantidad:1
    },
    

    
    ];

//contenedor de productos
    const stockDisponible = document.getElementById('mostar-productos')



//Declaro carrito
    let carrito = []  

//Local storage
document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito();
        
    }
})


//Represento carrito en dom
const carritoDom = document.getElementById('carrito')



//Pongo mi catalogo en el DOM
    productosDisponibles.forEach((producto) => {

        const div = document.createElement('div')

        div.classList.add('card')
        
        
        
       
        div.innerHTML= `
        
        <img src=${producto.img} class="images-catalogo">
        <h5 class= "card-tittle">${producto.nombre}</h5>
        <p class="card-text">Talle: ${producto.talle}</p>
        <p class="card-text">Precio:$ ${producto.precio}</p>
        <button id="agregar${producto.id}" class="btn btn-primary boton-cat">Agregar a carrito <i class="fa-solid fa-plus"></i></button>
       
        `
        stockDisponible.appendChild(div)

        const boton = document.getElementById(`agregar${producto.id}`)

        //Evento para agregar a carrito
        boton.addEventListener('click', () => {
        agregarACarrito(producto.id);
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
        <p>Cantidad: ${producto.cantidad} </p>
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




























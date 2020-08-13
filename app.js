//todo --> VARIABLES
const dolar = document.getElementById('dolar');
const enlace = document.getElementById('enlace');
const numero = document.getElementById('numero');
const calculadora = document.getElementById('calculadora');
const resultado = document.getElementById('resultado');
const resultado2 = document.getElementById('resultado2');
const resultado3 = document.getElementById('resultado3');
const resultado4 = document.getElementById('resultado4');
const venta = document.getElementById('venta');
const titulo1 = document.getElementById('titulo1');
const titulo12 = document.getElementById('titulo2');
const alerta = document.getElementById('alerta');
const foto = document.getElementById('foto');




//todo --> EVENTLISTENERS
eventListeners()
function eventListeners(e) {
    document.addEventListener('DOMContentLoaded', cargarPage);



}





//todo --> FUNCTIONS
function cargarPage(e) {
    initApp()
    setTimeout(()=>{
        saludo()
    },5000)
    

    funcionFetchApi();
    numero.addEventListener('input', numeroValue)


}






//* fetch Api
function funcionFetchApi() {
    //indicar la ruta de la Api
    fetch('https://deperu.com/api/rest/cotizaciondolar.json')
        //?Realizar Promesas
        //Primera promesa
        .then((respuestApi) => {
            // console.log(respuestApi)
            return respuestApi.json()

        })
        // Segunda Promesa
        .then((obteniendoDatos) => {
            // console.log(obteniendoDatos)
            return (


                setTimeout(() => {
                    dolar.innerHTML = `S/. ${obteniendoDatos.cotizacion[0].Compra.toFixed(3)}`
                    // console.log(obteniendoDatos.cotizacion[0].Compra) 

                    venta.innerHTML = `S/. ${obteniendoDatos.cotizacion[0].Venta.toFixed(3)}`
                    // console.log(obteniendoDatos.cotizacion[0].Venta) 
                }),


                setInterval(() => {
                    dolar.innerHTML = `S/. ${obteniendoDatos.cotizacion[0].Compra.toFixed(3)}`
                    // console.log(obteniendoDatos.cotizacion[0].Compra) 

                    setInterval(() => {
                        venta.innerHTML = `S/. ${obteniendoDatos.cotizacion[0].Venta.toFixed(3)}`
                        // console.log(obteniendoDatos.cotizacion[0].Venta) 
                    }, 5000)
                }, 5000)

            )

        })

}

function numeroValue(e) {
    // console.log(e.target.appendChild)
    // console.log(dolar.innerHTML.substring(4))

    if ((numero.value * dolar.innerHTML.substring(4)) === 0) {
        titulo1.innerHTML = '';
        titulo2.innerHTML = '';
        resultado.innerHTML = '';
        resultado3.innerHTML = '';
        foto.classList = 'my-3'
    } else {
        foto.classList = 'foto my-5 pb-5'
        titulo1.innerHTML = 'Compra del Dolar';
        titulo2.innerHTML = 'Venta del Dolar';
        resultado.innerHTML = `<h3 class="badge badge-success my-3 p-2 "><strong class="tmn2">$</strong> ${numero.value}.00 equivale a <span class="badge badge-warning tmn text-white ">S/. ${(numero.value * dolar.innerHTML.substring(4)).toFixed(2)}</span></h3>`

        resultado3.innerHTML = `<h3 class="badge badge-success my-3 p-2 "><strong class="tmn2">$</strong> ${numero.value}.00 equivale a <span class="badge badge-warning tmn text-white ">S/. ${(numero.value * venta.innerHTML.substring(4)).toFixed(2)}</span></h3>`
    }


    if ((numero.value / (dolar.innerHTML.substring(4))) === 0 || numero.value === 0) {
        resultado2.innerHTML = '';
        resultado4.innerHTML = '';
    } else {
        resultado2.innerHTML = `<h3 class="badge badge-danger my-3 p-2 "><strong class="tmn2">S/.</strong> ${numero.value}.00 equivale a <span class="badge badge-success tmn text-white ">$ ${(numero.value / (dolar.innerHTML.substring(4))).toFixed(2)}</span></h3>`

        resultado4.innerHTML = `<h3 class="badge badge-danger my-3 p-2 "><strong class="tmn2">S/.</strong> ${numero.value}.00 equivale a <span class="badge badge-success tmn text-white ">$ ${(numero.value / (venta.innerHTML.substring(4))).toFixed(2)}</span></h3>`
    }
}
// `<strong class="tmn2"></strong> ${numero.value}.00 equivale a <h3 class="badge badge-warning text-white tmn">S/. ${(numero.value * dolar.innerHTML.substring(4)).toFixed(2)}</h3>`

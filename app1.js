let initApp = function () {
	
    const today = new Date()
    const hora = today.getHours()
    const minutos = today.getMinutes()
    const segundos = today.getSeconds()
// console.log(hora);
horas = (hora >=12 ) ? '0'+hora-12 : today.getHours();
horacio = (horas <10) ? '0'+horas : horas;
// console.log(hora)
doble = (horas ===0)?'12' : horacio;
ampms = (hora>12)?'Pm':'Am';
minutoss =(minutos < 10) ?`0${minutos}` :minutos;
segundoss = (segundos < 10) ? `0${segundos}`: segundos;

dos.innerHTML = /*html*/`<h1 class=" text-monospace text-white ml-1 talla"><span class="badge badge-success">${doble}</span>:<span class="badge badge-success">${minutoss}</span>:<span class="badge badge-success">${segundoss}</span> <span class="badge badge-info">${ampms}</span> </h1>`
}
initApp()
setInterval(initApp, 1000)

function saludo() {
	const today = new Date()
	const hora = today.getHours()
	let saluda;
	if(hora < 12){
saluda = 'Buenos Dias'
	}else if(hora < 19){
		saluda = 'Buenas Tardes'
	}else{
		saluda = 'Buenas Noches'
	}
    
    alerta.innerHTML= /*html*/`<div class="text-center alert alert-success alert-dismissible fade show fixed-top" role="alert">
        <strong>${saluda} <br> </strong>Okey les facilita la informacion en tiempo real del precio del dolar a moneda nacional <br>
        <p>Creado por: <br>Paredes Lopez, Key Dave</p>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
        setTimeout(()=>{
            alerta.innerHTML= ''
    
        },9000)
}

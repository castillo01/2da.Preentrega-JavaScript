function agregarCreditosAlSistema () {
    creditosDisponibles.push({nombre:"Credito A",interes:25,cuotas:6})
    creditosDisponibles.push({nombre:"Credito B",interes:50,cuotas:12})
    creditosDisponibles.push({nombre:"Credito C",interes:75,cuotas:18})
    creditosDisponibles.push({nombre:"Credito D",interes:100,cuotas:24})
}

function mostrarCreditosEnPantalla() {
    console.table(creditosDisponibles)
}

function empezarConsulta() {
    agregarCreditosAlSistema ()

    let cliente = prompt("Bienvenido, ingresa tu nombre: ")
    let resultado = confirm("¿Estás interesado en pedír un prestamo?")

    if(resultado == false) {
        alert("Gracias por comunicarte, hasta pronto")
    }

    else {
        alert("Perfecto " + cliente + " comencemos...")

        buscarCredito()

    }
}

function buscarCredito() {

let parametro = prompt("¿Qué crédito te interesaba?... \n Credito A: 25% de interes(maximo=$25.000), en 6 cuotas \n Credito B: 50% de interes(maximo=$50.000), en 12 cuotas \n Credito C: 75% de interes(maximo=$75.000), en 18 cuotas \n Credito D: 100% de interes(maximo=$100.000), en 24 cuotas")
    let resultado = creditosDisponibles.find((credito)=> credito.nombre === parametro)
    
    if(resultado !== undefined) {
        alert("Haz elegido " + parametro)
        pedirPresupuesto ()
    }

    else {
        alert("Parametros inválidos, vuelve a intentarlo")
        return buscarCredito()
    }
}

function pedirPresupuesto () {
  let valorDeCredito = parseInt(prompt("Ingresa el monto de tu credito solicitado: "))

  let interesA = 25
  let interesB = 50
  let interesC = 75
  let interesD = 100


if(valorDeCredito <= 25000)  {

    let calcularInteres = (valorDeCredito * interesA) / 100
    let resultado = valorDeCredito + calcularInteres


    alert("El total de tu crédito es " + resultado)
}

else if(valorDeCredito > 25000 && valorDeCredito <= 50000){

    let calcularInteresB = (valorDeCredito * interesB) / 100
    let resultado = valorDeCredito + calcularInteresB

    alert("El total de tu crédito es " + resultado)
}

else if (valorDeCredito > 50000 && valorDeCredito <= 75000) {
    let calcularInteresC = (valorDeCredito * interesC) / 100
    let resultado = valorDeCredito + calcularInteresC

    alert("El total de tu credito es " + resultado)
}

else if(valorDeCredito > 75000 && valorDeCredito <= 100000) {

    let calcularInteresD = (valorDeCredito * interesD) / 100
    let resultado = valorDeCredito + calcularInteresD

    alert("El total de tu credito es " + resultado)
}

else {
    alert("Parametros incorrectos. Intentalo nuevamente")
    return pedirPresupuesto ()
}

 }


 empezarConsulta();

alert("Ingrese la opcion del producto que desea llevar (Precios x kg)")
let seleccionarProductos = Number(prompt( "1-Ojo de bife 1kg $1700 2-Bife de chorizo 1kg $1750 3-Entraña 1kg $2000 4-Cabeza de lomo 1kg $1900"))
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
  return cant * precio
}


while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= Number(prompt("El producto seleccionado es Ojo de bife, indique la cantidad de kg"))
            total += cantidad(seleccionarCantidad, 1700)
      break;
      case 2:
        seleccionarCantidad = Number(prompt("El producto seleccionado es Bife de chorizo, indique la cantidad de kg"))
        total += cantidad(seleccionarCantidad, 1750)
      break;
    case 3:
      seleccionarCantidad = Number(prompt("El producto seleccionado es Entraña, indique la cantidad de kg"))
      total += cantidad(seleccionarCantidad, 2000)
    break;
    case 4:
      seleccionarCantidad = Number(prompt("El producto seleccionado es Cabeza de lomo, indique la cantidad de kg"))
      total += cantidad(seleccionarCantidad, 1900)
    break;

    default:
      break;
  }
  seleccionarProductos = Number(prompt( "1-Ojo de bife $1700 2-Bife de chorizo $1750 3-Entraña $2000 4-Cabeza de lomo $1900 de kg"))
}

alert("El total de la compra es de: " + total)


const envio = () => {
    if (total >= 10000) {
      alert("El envio es gratuito")
    }else{
      total += 1000
      alert("El costo de envio es de 1000, el total es: " + total)
    }
}
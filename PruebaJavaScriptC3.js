/*
José es el dueño de un minimarket de barrio, lleva más de 15 años administrando el
funcionamiento completo de su negocio, siempre lo ha hecho de manera análoga, lo cual en un
inicio no presentaba problemas, pero con el pasar de los años esto ha generado errores
humanos, pérdidas de registros, documentos estropeados por la antigüedad y una nula
posibilidad de poder estudiar el real crecimiento de su negocio año tras año.
José te contrata para generar un software para su negocio.
En esta segunda instancia tu tarea será generar funciones utilizando JavaScript
Funciones solicitadas:
obs: los días se deben ingresar como tipo String y los valores de los productos a
comprar se deben trabajar con arreglos, por ejemplo = [1000,500,650,8000]
● Don José todos los martes y jueves realiza un 20% de descuento en el total de las
compras, crea una función la cual debe recibir un parámetro del día y el arreglo de
valores de los productos a comprar, esta debe retornar el total final de la compra según
corresponda o no descuento.
● Don José hace un 5% de descuento a los clientes que compran más de 3 productos y al
menos uno de ellos tiene un valor mayor a 10.000, realiza una función que calcule el
total verificando si corresponde o no el descuento.
● Se desea tener una función verificadora encargada de revisar si dentro de el arreglo de
valores de los productos a comprar no existan valores negativos ingresados por error,
en caso de no existir debe retornar un mensaje de éxito, en caso contrario debe retornar
un mensaje de error junto con el número negativo y el índice en el que se encontraba.
● Dado el siguiente arreglo [200,5500,900,7000,500,300] con los valores de cada
producto
○ Crea una función que retorne el valor del producto más costoso.
○ Crea una función que retorne el valor del producto menos costoso.
*/

/*
● Don José todos los martes y jueves realiza un 20% de descuento en el total de las
compras, crea una función la cual debe recibir un parámetro del día y el arreglo de
valores de los productos a comprar, esta debe retornar el total final de la compra según
corresponda o no descuento.
*/



function descuento(dia) {
let precioProductos = [1000,500,650,8000];
let valorTotal = precioProductos.reduce((a,b) => a+b,0);
let nuevosPrecios =[];
let valorTotal2= nuevosPrecios.reduce((a,b) => a+b,0 )
 
    if (dia == "martes" || dia == "jueves") {
        precioProductos.forEach(x=>nuevosPrecios.push(x*0.80));
        console.log("Hay descuento")
        console.log(nuevosPrecios);
        console.log("el precio total a pagar es" + valorTotal2)
    } else {
        console.log("No hay descuento")
        console.log("El precio total a pagar es")
    }
 }

 descuento("martes");

/*
● Don José hace un 5% de descuento a los clientes que compran más de 3 productos(var n productos) y al
menos uno de ellos tiene un valor mayor a 10.000, realiza una función que calcule el
total verificando si corresponde o no el descuento.
*/

function descuentoDel5Por (numeroCompras) { 
    let precioProductos = [11000,8000,3000,5000];
    let nuevosPrecios = []
    for (let i = 0; i < precioProductos.length; i++) {
        const numeroMayor  = precioProductos[i];
        console.log(numeroMayor)

        if (numeroCompras>3) {
            if (precioProductos>10000) {
                console.log(precioProductos.forEach(x=>nuevosPrecios.push(x*0.95)))              
            }
            
        } else {
            console.log("No hay descuento")
            
        }
        
    }

 }

 descuento(3);

//  Dado el siguiente arreglo [200,5500,900,7000,500,300] con los valores de cada
// producto
// ○ Crea una función que retorne el valor del producto más costoso.
// ○ Crea una función que retorne el valor del producto menos costoso.

function valorMaxYvalorMin(arreglo) { 
    let valorMinimo = arreglo[0]; // se toma en ambos la posicion 0 para comprar despues
    let valorMaximo = arreglo[0];

    for (let i = 0; i < arreglo.length; i++) {
        if (valorMinimo > arreglo[i]) {  //comparamos el valor en la posicion [0] = 200 para posteiormente seguir iterando
            valorMinimo = arreglo[i]            
        } 
        
        if (valorMaximo < arreglo[i]) {
            valorMaximo = arreglo[i];
        }
    }
    console.log("numeros menor y mayor son: "+ [valorMinimo, valorMaximo]);
 }

 valorMaxYvalorMin([200,5500,900,7000,500,300])

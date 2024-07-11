/*Conociendo el código, costo y el precio de venta de los artículos que vende una tienda, se 
desea hacer un procesamiento que determine la ganancia total que tendría la empresa al 
venderlos todos, y también el código del artículo con mayor precio de venta. 

El encargado de la tienda informa que dispone de los siguientes artículos: 888 (costo $10, 
precio venta $15), 777 (costo $20, precio $25), 999 ($15, $25), 333 ($25, $35), 111 ($50, $70), 
333 ($40, $50), 444 ($80, $100) y 222 ($5, $10) 
Ganancia Total: 85$ 
Código del artículo con mayor precio de venta: 444 */


import Articulos  from "./Articulos.js";
import Tienda  from "./Tienda.js";

let tiend = new Tienda();
let art = new Articulos(888, 10, 15);
let art2 = new Articulos(777, 20, 25);
let art3 = new Articulos(999, 15, 25);
let art4 = new Articulos(333, 25, 35);
let art5 = new Articulos(111, 50, 70);
let art6 = new Articulos(333, 40, 50);
let art7 = new Articulos(444, 80, 100);
let art8 = new Articulos(222, 5, 10);

tiend.procesarArticulos(art);
tiend.procesarArticulos(art2);
tiend.procesarArticulos(art3);
tiend.procesarArticulos(art4);
tiend.procesarArticulos(art5);
tiend.procesarArticulos(art6);
tiend.procesarArticulos(art7);
tiend.procesarArticulos(art8);

let salida = document.getElementById("salida");
salida.innerHTML = `Ganancia total: ${tiend.gananciaTotal()}$ 
<br> Codigo del articulo con mayor precio de venta: ${tiend.codigomayor()}`


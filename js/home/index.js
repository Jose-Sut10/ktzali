
import { carrucel } from "./carrucelProdNew.js";
import { activeIconoMenu, cerrarMenuModal, closeIconoMenu } from "./iconoMenu.js";
import { carruselProdNuevos } from "./prodNuevos.js";
import seleccionMultiple from "./seleccionMultiple.js";

const prodNuevos = [
    {
        nombre: 'Laptop Dell',
        precio: 2300,
        imagen: 'https://i.ebayimg.com/thumbs/images/g/DvMAAOSw1J5bhYo-/s-l225.jpg'
    },
    {
        nombre: 'Laptop Dell',
        precio: 2300,
        imagen: 'https://i.ebayimg.com/thumbs/images/g/PcYAAOSwuZ5kvKEX/s-l225.jpg'
    },
    {
        nombre: 'Laptop Dell',
        precio: 2300,
        imagen: 'https://i.ebayimg.com/thumbs/images/g/DvMAAOSw1J5bhYo-/s-l225.jpg'
    },
    {
        nombre: 'Laptop Dell',
        precio: 2300,
        imagen: 'https://i.ebayimg.com/thumbs/images/g/PcYAAOSwuZ5kvKEX/s-l225.jpg'
    },
    {
        nombre: 'Laptop Dell',
        precio: 2300,
        imagen: 'https://i.ebayimg.com/thumbs/images/g/DvMAAOSw1J5bhYo-/s-l225.jpg'
    },
    {
        nombre: 'Laptop Dell',
        precio: 2300,
        imagen: 'https://i.ebayimg.com/thumbs/images/g/PcYAAOSwuZ5kvKEX/s-l225.jpg'
    }
];

activeIconoMenu();
closeIconoMenu();
//cerrarMenuModal();
seleccionMultiple();
carruselProdNuevos(prodNuevos);
carrucel(prodNuevos);
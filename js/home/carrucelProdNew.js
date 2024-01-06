export const carrucel = (listaCarrusel)=>{
    const carrucelProd = document.querySelector('.carruselProdNew');
    let inicio = 0; 

    const btnSiguiente = document.querySelector('[data-btnPosterior]');
    const btnAnterior = document.querySelector('[data-btnAnterior]')

    btnSiguiente.addEventListener('click',()=>{
        inicio++;
        if(inicio >= listaCarrusel.length){
            inicio=0;
        }
        actualizarImagenes(carrucelProd,inicio);
    });

    btnAnterior.addEventListener('click',()=>{
       inicio--;
       if(inicio < 0){
        inicio = listaCarrusel.length - 1;
       }
       actualizarImagenes(carrucelProd,inicio) 
    });
    
};

const actualizarImagenes = (lista,indiceActual)=>{
    const items = lista.querySelectorAll('li');
    
    items.forEach((li,index)=>{
        li.style.opacity = 0; 
        if(index === indiceActual){
            li.style.opacity = 1;
        }
    });
};
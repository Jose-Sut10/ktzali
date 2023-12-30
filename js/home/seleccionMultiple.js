const seleccionMultiple = ()=>{
    const linkListas = document.querySelector('[data-linkLista]');

    linkRopa.addEventListener('click',()=>{
        const listaRopa = document.querySelector('[data-listaRopa]');

        listaRopa.classList.toggle('listaRopa');
    })
};

export default seleccionMultiple;
export const activeIconoMenu = ()=>{
    const iconoAbrir = document.querySelector('[data-iconoMenuOpen]');

    iconoAbrir.addEventListener('click', ()=>{
        const modalMenuDesplegable = document.querySelector('[data-modalMenuDesplegable]');
        const menuDesplegable = document.querySelector('[data-menuDesplegable]');

        menuDesplegable.classList.add('activeTransition');
        modalMenuDesplegable.classList.add('modalActive');     
        document.body.classList.add('contenidoNoMenu');
    });
};

export const closeIconoMenu = ()=>{
    const iconoCerrar = document.querySelector('[data-iconoCloseMenu]');

    iconoCerrar.addEventListener('click',()=>{
        const modalMenuDesplegable = document.querySelector('[data-modalMenuDesplegable]');
        const menuDesplegable = document.querySelector('[data-menuDesplegable]');

        menuDesplegable.classList.remove('activeTransition');
        modalMenuDesplegable.classList.remove('modalActive');    
        document.body.classList.remove('contenidoNoMenu');
    });
};

export const cerrarMenuModal = ()=>{
    const modalMenuDesplegable = document.querySelector('[data-modalMenuDesplegable]');

    modalMenuDesplegable.addEventListener('click', (e)=>{
        const menuDesplegable = document.querySelector('[data-menuDesplegable]');

        menuDesplegable.classList.remove('activeTransition');
        modalMenuDesplegable.classList.remove('modalActive');
        document.body.classList.remove('contenidoNoMenu');
    });
} 
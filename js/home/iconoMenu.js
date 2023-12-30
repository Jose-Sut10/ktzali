export const activeIconoMenu = ()=>{
    const iconoAbrir = document.querySelector('[data-iconoMenuOpen]');

    iconoAbrir.addEventListener('click', ()=>{
        const modalMenuDesplegable = document.querySelector('[data-modalMenuDesplegable]');
        const menuDesplegable = document.querySelector('[data-menuDesplegable]');

        menuDesplegable.classList.add('activeTransition');
        modalMenuDesplegable.classList.add('modalActive');       
    });
};

export const closeIconoMenu = ()=>{
    const iconoCerrar = document.querySelector('[data-iconoCloseMenu]');

    iconoCerrar.addEventListener('click',()=>{
        const modalMenuDesplegable = document.querySelector('[data-modalMenuDesplegable]');
        const menuDesplegable = document.querySelector('[data-menuDesplegable]');

        menuDesplegable.classList.remove('activeTransition');
        modalMenuDesplegable.classList.remove('modalActive');       
    });
};

export const cerrarMenuModal = ()=>{
    const modalMenuDesplegable = document.querySelector('[data-modalMenuDesplegable]');

    modalMenuDesplegable.addEventListener('click', (e)=>{
        const menuDesplegable = document.querySelector('[data-menuDesplegable]');
        menuDesplegable.classList.remove('activeTransition');
        modalMenuDesplegable.classList.remove('modalActive'); 
    });
} 
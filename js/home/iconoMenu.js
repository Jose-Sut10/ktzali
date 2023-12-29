export const activeIconoMenu = ()=>{
    const iconoAbrir = document.querySelector('[data-iconoMenuOpen]');

    iconoAbrir.addEventListener('click', ()=>{
        const menuDesplegable = document.querySelector('[data-menuDeplegable]');
        const divOpacidad = document.querySelector('[data-divOpacidad]');

        menuDesplegable.classList.add('activeTransition');
        divOpacidad.style.display = 'block';
    });
};

export const closeIconoMenu = ()=>{
    const iconoCerrar = document.querySelector('[data-iconoCloseMenu]');

    iconoCerrar.addEventListener('click',()=>{
        const menuDesplegable = document.querySelector('[data-menuDeplegable]');
        const divOpacidad = document.querySelector('[data-divOpacidad]');

        menuDesplegable.classList.remove('activeTransition');
        divOpacidad.style.display = 'none';
        
    });
};
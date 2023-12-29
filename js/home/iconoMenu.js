export const activeIconoMenu = ()=>{
    const iconoAbrir = document.querySelector('[data-iconoMenuOpen]');

    iconoAbrir.addEventListener('click', ()=>{
        const menuDesplegable = document.querySelector('[data-menuDeplegable]');
        const divOpacidad = document.querySelector('[data-divOpacidad]');

        const estiloDisplay = window.getComputedStyle(menuDesplegable).display;

        if (estiloDisplay === 'none') {
            menuDesplegable.style.display = 'flex';
            divOpacidad.style.display = 'block';
        }
    });
};

export const closeIconoMenu = ()=>{
    const iconoCerrar = document.querySelector('[data-iconoCloseMenu]');

    iconoCerrar.addEventListener('click',()=>{
        const menuDesplegable = document.querySelector('[data-menuDeplegable]');
        const divOpacidad = document.querySelector('[data-divOpacidad]');

        const estiloDisplay = window.getComputedStyle(menuDesplegable).display;

        if (estiloDisplay === 'flex') {
            menuDesplegable.style.display = 'none';
            divOpacidad.style.display = 'none';
        }
    });
};

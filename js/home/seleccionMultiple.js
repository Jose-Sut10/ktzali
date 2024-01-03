const seleccionMultiple = ()=>{
    const links = document.querySelectorAll('.menuContainer__lista--link');

    links.forEach((link)=>{
        link.addEventListener('click',(e)=>{
            if(link.classList.contains('menuMultiple')){
                const elementoPadre = link.parentElement;
                const divMenuMultiple = elementoPadre.querySelector('div');

                divMenuMultiple.classList.toggle('activadorMenu');
            }
        });
    });
};

export default seleccionMultiple;
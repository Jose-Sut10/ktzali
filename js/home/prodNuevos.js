export const validarImagen = (url,titulo,precio,ul)=>{

    if((url.endsWith('jpg'))||(url.endsWith('jpeg'))){
        const li = document.createElement('li');
        const a = document.createElement('a');
        const img = document.createElement('img');
        const p = document.createElement('p');
        const span = document.createElement('span');

        img.setAttribute('src', url, 'alt',titulo);
        img.classList.add('imagenCarrusel');
        a.appendChild(img);
        p.textContent = titulo;
        span.textContent = `Q${precio}.00`;

        li.append(a,p,span);
        ul.appendChild(li);
    }
};

export const carruselProdNuevos = (listaProd)=>{
    const divCarrusel = document.querySelector('[data-carruselProdNuevos]');
    const ul = document.createElement('ul');
    ul.classList.add('carruselProdNew');

    const datoProd = listaProd.forEach((item)=>{
        validarImagen(item.imagen,item.nombre,item.precio,ul);

        return divCarrusel.appendChild(ul);
    });
};
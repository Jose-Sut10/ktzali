const btnWsp = ()=>{

    const elemento = document.querySelector("[data-btnWsp]");

    window.addEventListener("scroll", () => {
    elemento.style.top = window.scrollY;
    });
};

export default btnWsp;
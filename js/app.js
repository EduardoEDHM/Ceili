

/* Nav Bar */ 


const btn = document.getElementById("btn");
const nav = document.getElementById("nav");

btn.addEventListener("click", () => {
    nav.classList.toggle("active");
});



/* Carrousel */ 


const next = document.getElementById("next");
const back = document.getElementById("back");
const q1 = document.getElementById('primer-carta');
const q2 = document.getElementById('segunda-carta');


next.addEventListener("click", () => {
    q1.classList.toggle("active");
});

back.addEventListener("click", () => {
    q1.classList.toggle("active");
});




/* Regresar arriba */ 



function scrollToTop(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
}





/* Scroll */ 



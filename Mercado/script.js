/* ========================= */
/* MODAL DE PRODUCTOS */
/* ========================= */

function openProduct(
nombre,
imagen,
precio,
descripcion
){

const modal =
document.getElementById(
"productModal"
);

document.getElementById(
"modalImage"
).src = imagen;

document.getElementById(
"modalTitle"
).innerHTML = nombre;

document.getElementById(
"modalPrice"
).innerHTML = precio;

document.getElementById(
"modalDescription"
).innerHTML = descripcion;

document.getElementById(
"modalWhatsapp"
).href =
"https://wa.me/50586612342?text=" +
encodeURIComponent(
"Hola, quiero información sobre " +
nombre
);

document.getElementById(
"modalWhatsapp"
).innerHTML =
"Solicitar por WhatsApp";

modal.style.display =
"flex";

}

/* ========================= */
/* MODAL DE PROMOCIONES */
/* ========================= */

function openPromo(
titulo,
descripcion
){

const modal =
document.getElementById(
"productModal"
);

document.getElementById(
"modalImage"
).style.display =
"none";

document.getElementById(
"modalTitle"
).innerHTML =
titulo;

document.getElementById(
"modalPrice"
).innerHTML =
"Promoción Especial";

document.getElementById(
"modalDescription"
).innerHTML =
descripcion;

document.getElementById(
"modalWhatsapp"
).href =
"https://wa.me/50586612342?text=" +
encodeURIComponent(
"Hola, quiero aprovechar la promoción: " +
titulo
);

document.getElementById(
"modalWhatsapp"
).innerHTML =
"Solicitar Promoción";

modal.style.display =
"flex";

}

/* ========================= */
/* CERRAR MODAL */
/* ========================= */

function closeModal(){

document.getElementById(
"productModal"
).style.display =
"none";

document.getElementById(
"modalImage"
).style.display =
"block";

}

/* ========================= */
/* CERRAR AL HACER CLICK */
/* FUERA DEL MODAL */
/* ========================= */

window.onclick =
function(event){

const modal =
document.getElementById(
"productModal"
);

if(
event.target === modal
){

closeModal();

}

};

/* ========================= */
/* EFECTO SCROLL NAVBAR */
/* ========================= */

window.addEventListener(
"scroll",
function(){

const header =
document.querySelector(
"header"
);

if(
window.scrollY > 50
){

header.style.boxShadow =
"0 4px 20px rgba(0,0,0,.15)";

}
else{

header.style.boxShadow =
"0 2px 15px rgba(0,0,0,.08)";

}

}
);

/* ========================= */
/* ANIMACIÓN SUAVE */
/* ========================= */

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(
(entry)=>{

if(
entry.isIntersecting
){

entry.target.classList.add(
"show"
);

}

});

},
{
threshold:0.1
}

);

document
.querySelectorAll(
".product-card,.benefit-card,.about-card,.promo-card"
)
.forEach(
(el)=>observer.observe(el)
);

/* ========================= */
/* MENSAJE DE BIENVENIDA */
/* OPCIONAL */
/* ========================= */

console.log(
"Eco-Scent Web cargada correctamente"
);
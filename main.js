// AOS.init();

const menuHamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector("nav");

const links = document.querySelectorAll(".nav-list li a ");
console.log(links);

function toggleMenu() {
  nav.classList.toggle("active");
}
menuHamburguer.addEventListener("click", toggleMenu);
links.forEach((e) => {
  e.addEventListener("click", toggleMenu);
});

const servicos = document.querySelector("#servicos");
const projetos = document.querySelector("#projetos");
// console.log(elemento);

function getYPosition(elemento) {
  var posicaoY = 0;
  while (elemento) {
    posicaoY += elemento.offsetTop - elemento.scrollTop + elemento.clientTop;
    elemento = elemento.offsetParent;
  }
  return posicaoY;
}
const servicosPositionY = getYPosition(servicos);
const projetosPositionY = getYPosition(projetos);

console.log(servicosPositionY);

const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.style.backgroundColor = "#001F3E";
  links.forEach((link) => {
    link.style.color = "white";
  });
  let scrollY = window.scrollY;
  console.log(scrollY);

  if (scrollY === 0) {
    header.style.backgroundColor = "transparent";
  }
  if (scrollY > servicosPositionY) {
    header.style.backgroundColor = "white";
    links.forEach((link) => {
      link.style.color = "#001F3E";
    });
  }
});

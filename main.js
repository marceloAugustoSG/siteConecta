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

// window.addEventListener("scroll", function () {
//   // Obtendo a posição atual de rolagem
//   const scrollPosition = window.scrollY;

//   // Obtendo o elemento do cabeçalho
//   const header = document.querySelector("header");

//   // Definindo a cor do cabeçalho com base na posição de rolagem
//   if (scrollPosition > 0) {
//     header.style.backgroundColor = "white";
//   } else {
//     header.style.backgroundColor = "#001F3E";
//     logo.setAttribute("src", "./assets/conecta+blue.svg");
//   }
// });

const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.style.backgroundColor = "#001F3E";
  links.forEach((link) => {
    link.style.color = "white";
  });
  const scrollY = window.scrollY;
  console.log(scrollY);

  if (scrollY > 10) {
    console.log("teste");
  }
  if (scrollY === 0) {
    header.style.backgroundColor = "transparent";
  }
  if (scrollY > 1374) {
    header.style.backgroundColor = "white";
    links.forEach((link) => {
      link.style.color = "#001F3E";
    });
  }
});

// const header = document.querySelector("header");

// header.style.backgroundColor = "white";

// window.addEventListener("scroll", () => {
//   console.log("teste");
//   let scrollY = window.scrollY;
//   console.log(scrollY);
// });
// console.log(header);

function toggleSidebar() {
  const aside = document.querySelector(".sidebar");
  if (aside.classList.contains("active")) {
    aside.classList.remove("active");
  } else {
    aside.classList.add("active");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const linksMenu = document.querySelectorAll(".nav__list a");
  const urlAtual = window.location.href;

  linksMenu.forEach((link) => {
    link.classList.remove("ativo_menu");
    const ehMatchExato = urlAtual.split("#")[0] === link.href.split("#")[0];

    const ehPaginaInicial =
      (urlAtual.endsWith("/") || urlAtual.endsWith("/index.html")) &&
      link.href.endsWith("index.html");

    const pastaDoLink = link.getAttribute("href").split("/")[1];

    const estaNaSubRota =
      pastaDoLink &&
      pastaDoLink !== "index.html" &&
      urlAtual.includes(`/${pastaDoLink}/`);

    if (ehMatchExato || ehPaginaInicial || estaNaSubRota) {
      link.classList.add("ativo_menu");
    }
  });
});

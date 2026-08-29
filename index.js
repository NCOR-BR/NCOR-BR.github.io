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

    if (urlAtual.split("#")[0] === link.href.split("#")[0]) {
      link.classList.add("ativo_menu");
      return;
    }

    const hrefEscrito = link.getAttribute("href");

    if (hrefEscrito && hrefEscrito.includes("Page")) {
      const nomeDaPasta = hrefEscrito.match(/([a-zA-Z0-9_]+Page)/)[0];

      if (urlAtual.includes(nomeDaPasta)) {
        link.classList.add("ativo_menu");
      }
    }
  });

  const botoesFiltro = document.querySelectorAll(".btn-filtro");
  const conteudosPub = document.querySelectorAll(".conteudo-pub");

  if (botoesFiltro.length > 0) {
    botoesFiltro.forEach((botao) => {
      botao.addEventListener("click", () => {
        botoesFiltro.forEach((b) => b.classList.remove("ativo"));

        botao.classList.add("ativo");

        const alvo = botao.getAttribute("data-target");

        conteudosPub.forEach((conteudo) => {
          conteudo.classList.remove("ativo");
        });

        document.getElementById(alvo).classList.add("ativo");
      });
    });
  }
});

// Menu mobile
const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (botaoMenu && menu) {
  botaoMenu.addEventListener("click", () => {
    menu.classList.toggle("aberto");
  });
}

// Atualiza automaticamente o ano do footer
const anos = document.querySelectorAll(".ano");
anos.forEach((item) => {
  item.textContent = new Date().getFullYear();
});

// Validação simples do formulário de contato
const formContato = document.querySelector("#formContato");
const mensagemForm = document.querySelector("#mensagemForm");

if (formContato) {
  formContato.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const mensagem = document.querySelector("#mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
      mensagemForm.textContent = "Por favor, preencha todos os campos.";
      mensagemForm.style.color = "#ff5c8a";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      mensagemForm.textContent = "Digite um e-mail válido.";
      mensagemForm.style.color = "#ff5c8a";
      return;
    }

    mensagemForm.textContent = "Mensagem enviada com sucesso!";
    mensagemForm.style.color = "#39ff88";
    formContato.reset();
  });
}

// Destaque visual nos cards ao passar o mouse
const cards = document.querySelectorAll(".card, .produto-card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("card-destaque");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("card-destaque");
  });
});

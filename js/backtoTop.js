var backToTopButton = document.getElementById("backToTopButton");
var isButtonVisible = false; // Variável para controlar a visibilidade do botão

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 100 && !isButtonVisible) {
    backToTopButton.classList.remove("hidden");
    backToTopButton.classList.add("fade-in");
    isButtonVisible = true; // Atualiza o estado da visibilidade do botão
  } else if (window.pageYOffset <= 100 && isButtonVisible) {
    backToTopButton.classList.remove("fade-in");
    backToTopButton.classList.add("fade-out");
    setTimeout(function() {
      backToTopButton.classList.add("hidden");
      backToTopButton.classList.remove("fade-out");
    }, 300);
    isButtonVisible = false; // Atualiza o estado da visibilidade do botão
  }
});

backToTopButton.addEventListener("click", function() {
  document.body.scrollTop = 0; // Para navegadores mais antigos
  document.documentElement.scrollTop = 0; // Para navegadores modernos
});


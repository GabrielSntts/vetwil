 document.addEventListener("DOMContentLoaded", function () {
      const menuToggle = document.getElementById("menu-toggle");
      const mainNav = document.getElementById("main-nav");

      // Abrir/fechar menu
      menuToggle.addEventListener("click", function () {
        mainNav.classList.toggle("show");
      });

      // Fechar menu ao clicar fora
      document.addEventListener("click", function (e) {
        if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
          mainNav.classList.remove("show");
        }
      });
    })

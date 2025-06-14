document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle")
  const mainNav = document.getElementById("main-nav")

  // Abrir/fechar menu
  menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("show")
  })

  // Fechar menu ao clicar fora
  document.addEventListener("click", function (e) {
    if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
      mainNav.classList.remove("show")
    }
  })
})

function toggleMenu() {
  // Rolamento dos botões
  const menu = document.getElementById("mobilemenu")
  menu.classList.toggle("active")
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  // Animação leve do site quando você clica em "Projeto" ou outro campo
  link.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  })
})

// Nesta parte, definimos os eventos e o que acontecerá quando o mouse passar por cima dos quadrados e quando ele sair
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card, .project-card")
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)"
      card.style.transition = "transform 0.3s ease"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)"
    })
  })
})

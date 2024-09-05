const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement

function changeTheme(){
  const currentTheme = rootHtml.getAttribute("data-theme");

  currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark")

  toggleTheme.classList.toggle("bi-sun")
  toggleTheme.classList.toggle("bi-moon-stars")
}

toggleTheme.addEventListener("click", changeTheme);


document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hambuerguer-menu');
  const navLinks = document.getElementById('menu-mobile');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});




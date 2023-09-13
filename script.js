// side bar
const navbar = document.querySelector(".navbar-nav");
const hum = document.getElementById("hum");
hum.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

// close menu
document.addEventListener("click", function (e) {
  if (!hum.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

// prevent default
hum.addEventListener("click", function (e) {
  e.preventDefault();
});

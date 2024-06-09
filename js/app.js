//mode clair
/*
document.addEventListener("DOMContentLoaded", function () {
  const themeBtn = document.getElementById("theme-btn");
  const themeIcon = document.getElementById("theme-icon");
  const body = document.body;

  // Initialiser le thème en fonction de l'attribut data-theme
  body.classList.add(body.dataset.theme + "-theme");

  function toggleTheme() {
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
    if (body.classList.contains("dark-theme")) {
      body.dataset.theme = "dark";
      themeBtn.textContent = "☀️";
    } else {
      body.dataset.theme = "light";

      themeBtn.textContent = "🌙 ";
    }
  }

  themeBtn.addEventListener("click", toggleTheme);
});
*/

//hamburger menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

//mediaelement
const videoElements = document.querySelectorAll("video");

// Itérer sur chaque élément video
videoElements.forEach((videoElement, index) => {
  // Créer une instance MediaElementPlayer pour chaque vidéo
  const playerCaptions = new MediaElementPlayer(videoElement, {
    // Définir une miniature différente pour chaque vidéo
    poster: `./images/video-thumbnail-${index + 1}.png`,
  });
});

//gestion du smooth et faire fonctionner lien avec id surtout pour mobile
window.addEventListener("load", function () {
  function scrollToAnchor(aid) {
    var aTag = document.querySelector(aid);
    if (aTag) {
      var yCoordinate = aTag.getBoundingClientRect().top + window.scrollY;
      var yOffset = -20;
      window.scrollTo({
        top: yCoordinate + yOffset,
        behavior: "smooth",
      });
    }
  }

  if (location.hash) {
    setTimeout(function () {
      scrollToAnchor(location.hash);
    }, 100);
  }
});
// Bouton remonter en haut
var backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

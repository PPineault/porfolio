//mode clair/sombre
document.addEventListener("DOMContentLoaded", function () {
  const themeBtn = document.getElementById("theme-btn");
  const body = document.body;

  // Initialiser le thème en fonction de l'attribut data-theme
  body.classList.add("dark-theme");
  body.dataset.theme = "dark";

  function toggleTheme() {
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("dark-theme");
  }

  themeBtn.addEventListener("click", toggleTheme);
});

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

//animation h3,h3,h4
// Fonction pour détecter si un élément est dans le champ de vision
// Fonction pour détecter si un élément est dans le champ de vision
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fonction pour ajouter/supprimer la classe "in-view" en fonction de la position de l'élément
function animateOnScroll() {
  const h2Elements = document.querySelectorAll("h2");
  const h3Elements = document.querySelectorAll("h3");
  const h4Elements = document.querySelectorAll("h4");

  h2Elements.forEach((h2) => {
    if (isInViewport(h2)) {
      h2.classList.add("in-view");
    } else {
      h2.classList.remove("in-view");
    }
  });

  h3Elements.forEach((h3) => {
    if (isInViewport(h3)) {
      h3.classList.add("in-view");
    } else {
      h3.classList.remove("in-view");
    }
  });

  h4Elements.forEach((h4) => {
    if (isInViewport(h4)) {
      h4.classList.add("in-view");
    } else {
      h4.classList.remove("in-view");
    }
  });
}

// Attacher l'événement de défilement à la fonction d'animation
window.addEventListener("scroll", animateOnScroll);

// Obtenir la référence du bouton
const btnTop = document.getElementById("bouton-style1");

// Afficher le bouton lorsque l'utilisateur fait défiler vers le bas
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};

// Fonction pour remonter en haut
btnTop.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // défilement fluide
  });
});


// Récupère le bouton et le lien vers la feuille de style
const switchStyleBtn = document.getElementById("bouton-style2");
const cssLink = document.getElementById("css-link");

// Fonction pour changer le CSS
switchStyleBtn.addEventListener("click", function() {
    // Vérifie la feuille de style actuelle et change en conséquence
    if (cssLink.getAttribute("href") === "style1.css") {
        cssLink.setAttribute("href", "style2.css");
    } else {
        cssLink.setAttribute("href", "style1.css");
    }
});


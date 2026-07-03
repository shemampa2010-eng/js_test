const couleurs = ["red", "blue", "green", "purple", "orange", "grey"];
let index = 0;
function changerCouleur() {
    document.body.style.backgroundColor = couleurs[index];
        index = (index + 1) % couleurs.length;
}
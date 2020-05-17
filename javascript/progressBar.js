//fonction qui: 1 genere une couleur random, 2 l'applique au CSS.
const setBg = () => {
  // ici on obtient une couleur random
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // ici on sélectionne l'élément avec l'ID mybar et on change son style (css) background color
  document.getElementById("myBar").style.backgroundColor = "#" + randomColor;
}

var i = 0;

// fonction éxécuter lors du click sur le bouton
function move() {
  if (i == 0) {
    i = 1;
    // on sélectionne la div avec l'id myBar
    var elem = document.getElementById("myBar");
    var width = 0;
    // ici on set la vitesse d'avancement
    var id = setInterval(frame, 60);

    // function qui permet de faire progresser la bar
    function frame() {
      // si la bar est à 100% on la reset à 0
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        // sinon augmente la taille de la progression
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
        elem.style.width = width + "%";
        // change la couleur, on appele la fonction vue plus haut
        setBg();
      }
    }
  }
}

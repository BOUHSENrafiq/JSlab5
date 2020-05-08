var fruits = ['Mangue', 'Raisin', 'Figue', 'Kiwi']; // matrice de départ.
for (let i = 0; i < fruits.length; i++) // boucle for pour parcourir tous les élements de la matrice du départ.
    document.write(fruits[i] + "<br>"); // Affichage de la liste ligne par ligne.

function validerchoix() {
    var fruits = ['Mangue', 'Raisin', 'Figue', 'Kiwi']; // matrice de départ
    var f = document.getElementById("fruits").value; // la valeur de la donné seaisie par l'utilisateur.
    var n = fruits.length; // nombre de valeur
    var index = fruits.indexOf(f);
    for (let i = 0; i < n; i++) {
        if (f == fruits[i] && index > -1) { // comparer la valeur saisie au contenu de la matrice de départ.
            document.write("ok! Voici la nouvelle lise des fruits disponible" + "<br>");
            var ok=1;
            fruits.splice(index, 1); //supprimer la valeur correspondente
            //delete fruits[i]; // supprimer la valeur correspondente
            for (let i = 0; i < n-1; i++) { // afficher à nouveau la liste des fruits disponibles.
                document.write(fruits[i] + "<br>")
            }
        }
    }if(!ok) document.write("indisponible");
}


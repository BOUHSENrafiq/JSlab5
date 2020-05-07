var fruits = ['Mangue', 'Raisin', 'Figue', 'Kiwi']; // matrice de départ
for (let i = 0; i < fruits.length; i++) // boucle for pour parcourir tous les élements de la matrice du départ
    document.write(fruits[i] + "<br>"); // Affichage de la liste ligne par ligne

function validerchoix() {
    var fruits = ['Mangue', 'Raisin', 'Figue', 'Kiwi']; // matrice de départ
    var f = document.getElementById("fruits").value; // la valeur de la donné seaisie par l'utilisateur
    var n = fruits.length; // nombre de valeur
    for (let i = 0; i < n; i++) {
        if (f == fruits[i]) { // comparer la valeur saisie au contenu de la matrice de départ
            document.write("ok" + "<br>");
            var ok=1;
            delete fruits[i]; // supprimer la valeur correspondente
            for (let i = 0; i < n; i++) {
                document.write(fruits[i] + "<br>")
            }
        }
    }if(!ok) document.write("indispo");
}

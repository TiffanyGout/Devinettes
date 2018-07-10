/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
for (i=1; i<7; i++) 
{

    nombre = Number(prompt("Entrez un nombre, vous n'avez que 6 essais:"));

        if (nombre !== solution) 
        {

            if (nombre>solution) 
            {
            alert(nombre + " est trop grand ");
            
            if(i==6)
				{
					alert("Tu as perdu ! La solution était "+ solution + " !");
				}
        }

        else if (nombre < solution) 
        {
            alert(nombre + " est trop petit ");
            
            if(i==6)
				{
					alert("Tu as perdu ! La solution était "+ solution + " !");
				}
        }
    }
        else if (nombre === solution)
        {
            alert("Bravo !! La solution est : " + solution);
            alert("Tu as réussi au bout de " + i + " essai(s) !");
            break;
    }
}

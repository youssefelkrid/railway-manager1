const prompt = require('prompt-sync')();

/*
let nb = Number(prompt("Enter a number: "));
if(nb == 0 || nb == 1) {
    return 1;
}
    let fact = 1;
    for(let i = 2; i <= nb; i++) {
        fact *= i;
    }
    console.log(`${nb}! = ${fact}`);
    */
    
   /*
   let valeur = Number(prompt("Enter a number: "));
   let somme = 0;
   for(let i = 1; i <= valeur; i++) {
    somme += i;
   
   }
    console.log("La somme des " + valeur + " premiers nombres naturels est : " + somme);
    */
   /*
   let nombre = Number(prompt("Enter a number: "));
   for(let i = 1; i <= nombre; i++) {
  console.log(2 * i - 1);
    }
  */
   /*
    let base = Number(prompt("Enter the base: "));
    let exponent = Number(prompt("Enter the exponent: "));
    let result = 1;
    for(let i = 1; i<= exponent; i++) {
        result =result * base;
    }
    console.log(`${base}^${exponent} = ${result}`);
    */
   /*
    let nombre = Number(prompt("Enter a number: "));
   for(let i = 1; i <= nombre; i++) {
  console.log(2 * i);
    }
  */
 /*
 
 let nombre = Number(prompt("Entrez un nombre entier :"));

let inverse = 0;

while (nombre > 0) {
    let dernierChiffre = nombre % 10;

    inverse = inverse * 10 + dernierChiffre;

    nombre = Math.trunc(nombre / 10);
}

console.log("Nombre inversé : " + inverse);
*/
/*
let n = Number(prompt("Entrez le nombre de termes :"));

let a = 0;
let b = 1;

for (let i = 1; i <= n; i++) {
    console.log(a);

    let suivant = a + b;
    a = b;
    b = suivant;
}
    */
   /*
  let nombre = Number(prompt("Entrez un entier positif :"));

let compteur = 0;

while (nombre > 0) {
    nombre = Math.trunc(nombre / 10);
    compteur++;
}

console.log("Nombre de chiffres = " + compteur);
*/
/*
for(let i = 10; i >= 1; i--) {
    let resultat = 5 * i;
    console.log(`5 * ${i} = ${resultat}`);
    

}
    */
   /*
   let nombre = Number(prompt("Entrez un entier  :"));
   let tableau = [2,4,5,6,7,15,17,25]
   let gouche = 0;
   let droite = tableau.length - 1;
   let trouve = false;
   while(gouche <= droite) {
    let milieu = Math.floor((gouche + droite) / 2);} 
    if(tableau[milieu] === nombre) {
        trouve = true;
    
    }
 if(tableau[milieu] < nombre) {
    gouche = milieu + 1;
 } else {
    droite = milieu - 1;
 }
if(trouve) {
    console.log("Le nombre " + nombre + " est présent dans le tableau.");
}else{
     console.log("Le nombre " + nombre + " n'est pas présent dans le tableau.");

}
   */
    
   /*
function calculatrice() {

    let Ready = true;

    while (Ready) {

        let nbr1 = Number(prompt("Enter le nombre 1\n"));

        let choix = Number(prompt(
            "1 - Addition\n" +
            "2 - Soustraction\n" +
            "3 - Multiplication\n" +
            "4 - Division\n" +
            "5 - Quitter\n"
        ));

        if (choix === 1) {

            let nbr2 = Number(prompt("Enter le nombre 2\n"));
            console.log("Résultat :", nbr1 + nbr2);

        } 
        else if (choix === 2) {

            let nbr2 = Number(prompt("Enter le nombre 2\n"));
            console.log("Résultat :", nbr1 - nbr2);

        } 
        else if (choix === 3) {

            let nbr2 = Number(prompt("Enter le nombre 2\n"));
            console.log("Résultat :", nbr1 * nbr2);

        } 
        else if (choix === 4) {

            let nbr2 = Number(prompt("Enter le nombre 2\n"));
            console.log("Résultat :", nbr1 / nbr2);

        } 
        else if (choix === 5) {

            Ready= false;
            console.log("Au revoir !");

        } 
        else {

            console.log("Choix invalide !");

        }
    }
}

calculatrice();
*/
/*
let mot = prompt("enter une mot ");
let index = 0;
let i =0;
while(mot.charAt(i)!==""){
    index++;
    i++;
}
console.log(index);

/*
let mot1 = "adam";
let mot2 = "adam";

let i = 0;

while (i < mot1.length && i < mot2.length && mot1.charAt(i) == mot2.charAt(i)) {
    i++;
}

if (i == mot1.length && i == mot2.length) {
    console.log("Les chaînes sont égales");
} else {
    console.log("Les chaînes sont différentes");
}
*/
/*

let nom = prompt("Enter une chaine ");

let resultat = "";

for(let i = nom.length - 1; i >= 0; i--){

    resultat = resultat + nom.charAt(i);

}

console.log(resultat);
*/

/*
 let chinecaractaire = prompt("enter une  chine caractaire ");
 let caractire = prompt(" enter une caractire ");
 let index = 0 ;
 for(let i =0; i<=chinecaractaire.length;i++){
    if(chinecaractaire.charAt(i)== caractire)
        index++;
 }
 console.log(index);
 */
/*
let chinecaractaire = prompt("enter une chine de caractaire ");
let result = chinecaractaire.toUpperCase();
console.log(result);
*/
/*
let chinecaractaire = prompt("enter une chine de caractaire ");
let result = chinecaractaire.toLowerCase();
console.log(result);
*/
/*
let chinecaractaire = prompt("Enter une chaine de caractaire : ");
let sousstring = prompt("Enter une sous string : ");

if (chinecaractaire.includes(sousstring)) {
    console.log("sous string existe");
} else {
    console.log("pas existe");
}
*/
/*

let n = Number(prompt("Enter une nombre "));

for (let i = 1; i <= n; i++) {

    let ligne = "";

    for (let j = 1; j <= n - i; j++) {
        ligne = ligne + " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {

        if (k === 1 || k === 2 * i - 1 || i === n) {
            ligne = ligne + "*";
        } else {
            ligne = ligne + " ";
        }
    }

    console.log(ligne);
}
*/
/*
let taille = Number(prompt(" enter les elments"));
let tableau = [];
let somme = 0;
for(let i=0 ; i <=taille; i++){

     let valeur = Number(prompt("enter les valeur : "));
     tableau.push(valeur);
     somme = somme + valeur ;


}
console.log(somme);
*/
/*

let taille = Number(prompt("enter les elements"));
let tableau = [];

for(let i = 0; i < taille; i++){

    let valeur = Number(prompt("enter la valeur : "));
    tableau.push(valeur);
}

let max = tableau[0];

for(let i = 1; i < taille; i++){

    if(tableau[i] > max){
        max = tableau[i];
    }
}

console.log("Le maximum est : " + max);
*/
/*
let taille = Number(prompt("enter les elements"));
let tableau = [];

for(let i = 0; i < taille; i++){

    let valeur = Number(prompt("enter la valeur : "));
    tableau.push(valeur);
}

let min = tableau[0];

for(let i = 1; i < taille; i++){

    if(tableau[i] < min){
        min = tableau[i];
    }
}

console.log("Le minmum est : " + min);
*/
/*
let taille = Number(prompt("enter les elements "));
let tableau = [];

for(let i = 0; i < taille; i++){

    let valeur = Number(prompt("enter la valeur : "));
    tableau.push(valeur);
}
 let facteur = Number(prompt("enter le facteur "));
 for(let i = 0; i <taille ; i++){
    let resultat = facteur * tableau[i];
    console.log(` multiplication des elemant  ${facteur} x ${tableau[i]} = `+resultat);
 }
    */

/*
let taille = Number(prompt("Enter les éléments :"));
let tableau = [];

for (let i = 0; i < taille; i++) {
    let valeur = Number(prompt("Enter la valeur : "));
    tableau.push(valeur);
}

for (let i = 0; i < taille - 1; i++) {

    for (let j = i + 1; j < taille; j++) {

        if (tableau[i] > tableau[j]) {

            let temp = tableau[i];
            tableau[i] = tableau[j];
            tableau[j] = temp;
        }
    }
}
    

console.log("L'ordre croissant est : " + tableau);
*/
/*
let taille = Number(prompt("Enter les éléments :"));
let tableau1 = [];

for (let i = 0; i < taille; i++) {
    let valeur = Number(prompt("Enter la valeur : "));
    tableau1.push(valeur);
}

let tableau2 = [];

for (let i = 0; i < taille; i++) {
    tableau2.push(tableau1[i]);
}

console.log("Tableau original :", tableau1);
console.log("Tableau copié :", tableau2);
*/
/*
let taille = Number(prompt("Enter les éléments :"));
let tableau1 = [];

for (let i = 0; i < taille; i++) {
    let valeur = Number(prompt("Enter la valeur : "));
    tableau1.push(valeur);
}

let tableau2 = [];

for(let i = taille - 1 ;i>= 0 ;i--){
    tableau2.push(tableau1[i]);
}

console.log("Tableau original :", tableau1);
console.log("le tableau inversi",tableau2);
*/


/*

let taille = Number(prompt("Enter les éléments :"));
let tableau1 = [];

for (let i = 0; i < taille; i++) {
    let valeur = Number(prompt("Enter la valeur : "));
    tableau1.push(valeur);
}
let elemant = Number(prompt("enter elemant de recharche "));
let verification = false;
for(let i = 0; i < taille; i++){
    if(tableau1[i] === elemant){
       verification =true ;
    }
      if(verification){
        console.log("je trouve les eleamant ");

      } else{
        console.log("elemant npas dons tableau");
      } 
    
}
      */
     /*
     let taille = Number(prompt("Enter les éléments :"));
let tableau1 = [];

for (let i = 0; i < taille; i++) {
    let valeur = Number(prompt("Enter la valeur : "));
    tableau1.push(valeur);
}
let remplace = Number(prompt("enter la valeur remplace "));
let nouvelle = Number(prompt("enter la nouvelle valeur "));
for(let i = 0; i < taille; i++){
    if(tableau1[i]===remplace){
       tableau1[i]= nouvelle
    }
   
}
 console.log("afichier le tableau ",tableau1);
 */
/*
let taille = Number(prompt("Enter les éléments :"));
let tableau1 = [];

for (let i = 0; i < taille; i++) {
    let valeur = Number(prompt("Enter la valeur : "));
    tableau1.push(valeur);
}

let tableau2 = [];

for (let i = 0; i < taille; i++) {
    if (tableau1[i] % 2 === 0) {
        tableau2.push(tableau1[i]);
    }
}

console.log("Les nombres pairs :", tableau2);
*/
/*
let taille = Number(prompt("Enter les éléments :"));
let tableau1 = [];

for (let i = 0; i < taille; i++) {
    let valeur = Number(prompt("Enter la valeur : "));
    tableau1.push(valeur);
}

let tableau2 = [];

for (let i = 0; i < taille; i++) {
    if (tableau1[i] % 2 !== 0) {
        tableau2.push(tableau1[i]);
    }
}

console.log("Les nombres pairs :", tableau2);
*/
/*
let taille = Number(prompt("Enter les éléments :"));
let tableau1 = [];

for (let i = 0; i < taille; i++) {
    let valeur = Number(prompt("Enter la valeur : "));
    tableau1.push(valeur);
}
let somme = 0;
let moyanne;
for(let i = 0 ; i< taille; i++){
    somme = somme + tableau1[i];
}
moyanne = somme/taille;
console.log("le moyanne est",moyanne);
*/
/*
let taille = Number(prompt("Enter les éléments :"));
let tableau1 = [];

for (let i = 0; i < taille; i++) {
    let valeur = Number(prompt("Enter la valeur : "));
    tableau1.push(valeur);
}
let taille2 = Number(prompt("Enter les éléments :"));
let tableau2 = [];

for (let i = 0; i < taille2; i++) {
    let valeur1 = Number(prompt("Enter la valeur : "));
    tableau2.push(valeur1);
}
let tableau3 = [];

for(let i = 0; i < taille; i++){
    tableau3.push(tableau1[i]);
}

for(let i = 0; i < taille2; i++){
    tableau3.push(tableau2[i]);
}

console.log("tableau fusionné :", tableau3);
*/
//object
/*
let personne = {
    nom: "Youssef",
    age: 24,
    ville: "Agadir"
};
console.log(`je me presant ${personne.nom} est mon age ${personne.age} mon ville est ${personne.ville} :`);
*/

/*
let etudiant = {
    nom: "Martin",
    prenom: "Sophie",
    notes: [14, 16, 12, 18, 15] // La valeur est un tableau !
};

// 2. Affichage des infos de base
console.log(`Étudiant : ${etudiant.prenom} ${etudiant.nom}`);

// 3. Accéder et afficher le tableau
console.log("Liste des notes : " + etudiant.notes.join(", "));

// Bonus : Calculer la moyenne
let somme = 0;
for (let note of etudiant.notes) {
    somme += note;
}
let moyenne = somme / etudiant.notes.length;
console.log(`Moyenne : ${moyenne}`);
*/
/*
const rectangle ={
    longure : 12 ,
    largeur : 6 
}
let laire = rectangle.largeur * rectangle.longure ;
console.log(`l'aire de rectangle est `,laire);
*/
/*
const  point = {
    x : 12,
    y : 5

}
point.x = 14;
point.y = 22 ;
console.log(`la modification des valeur x et y ${point.x} ET ${point.y }`)
*/
/*
const livre = {
    titre : "harry potter",
    auteur : "adams",
    Annee :  2002
}
function  afficherlivre(){
    return livre;
  

}
console.log(afficherlivre());
*/

/*
let taille = 6;
let T = [12, 2, 17, 1, 10, 5, 9];

function echanger(T, i, j) {
    let temp = T[i];
    T[i] = T[j];
    T[j] = temp;
}

function triBulles(T, taille) {
    for (let i = 0; i < taille - 1; i++) {
        for (let j = 0; j < taille - i - 1; j++) {
            if (T[j] > T[j + 1]) {
                echanger(T, j, j + 1);
            }
        }
    }
}

console.log("Le tableau avant tri :");
console.log(T);


triBulles(T, taille);

console.log("Le tableau après tri :");
console.log(T);
*/

/*
let T = [
    [12, 5, 8, 20],
    [7, 15, 3, 10],
    [18, 2, 25, 6],
    [9, 14, 11, 4]
];

//1. Afficher le tableau

for (let i = 0; i < T.length; i++) {

    for (let j = 0; j < T[i].length; j++) {
        console.log(T[i][j]);
    }

}
    

let somme = 0;
// 2. Somme de chaque ligne
/*
for (let i = 0; i < T.length; i++) {

    

    for (let j = 0; j < T.length; j++) {
        somme += T[i][j];
    }

    console.log("Somme ligne " + i + " = " + somme);
    
}
    */
    /*
for (let i = 0; i < T.length; i++) {

    

    for (let j = 0; j < T.length; j++) {
        somme += T[j][i];
    }

    console.log("Somme colune " + i + " = " + somme);
}
    */

/*
let max ;
for (let i = 0; i < T.length - 1; i++) {

    for (let j = 0; j < T.length; j++) {
       if(T[i][j] > T[i][j + 1]){
        max = T[i][j];
       }
    }

}
console.log("le max de matrix est : "+max);
    

*/
/*
let etudiants = [
    { nom: "Youssef", age: 22, note: 15 },
    { nom: "Ahmed", age: 21, note: 12 },
    { nom: "Sara", age: 23, note: 17 },
    { nom: "Omar", age: 20, note: 10 },
    { nom: "Imane", age: 22, note: 14 }
];

let trouve = false;

let rechercheNom = prompt("Enter le nom : ");

for (let i = 0; i < etudiants.length; i++) {

    if (rechercheNom == etudiants[i].nom) {

        trouve = true;

        console.log("Nom : " + etudiants[i].nom);
        console.log("Age : " + etudiants[i].age);
        console.log("Note : " + etudiants[i].note);
    }
}

if (!trouve) {
    console.log("Nom pas trouvé");
}
    */
   /*
   let taille = 5;
   T = [20, 25 , 21 , 22, 23];
   let trouve = false ;
   let index = 0 ;
   let nombre = Number(prompt(" enter le nombre "));

   for(let i = 0 ; i<taille ; i++){
    if(T[i] == nombre){
        trouve = true ;
        index +=i ;
    }
   }
   if(trouve){
    console.log("afficher l'index de nombre "+index);
   }else{
    console.log("n'pas trouve ");
   }
    
   // tri par selection
   /*
   let taille = 8 ;
   T = [8,12,3,16,18,25,2,6];
   

   function echange( T ,a , b){
    let temp = T[a];
    T[a] = T[b];
    t[b] = temp ;
   }
function triselection(T , taille){
    for(let i = 0 ; i<taille -1; i++){
        let index_min = i ;
        for(let j = i + 1 ;j< taille;j++){
            if(T[index_min]>T[j]){
                min = T[j];
                
            }
        }
        echange(T,index_min)
    }

}
console.log()
*/
/*
let T = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let R = [];

for (let i = 0; i < 3; i++) {
    R[i] = [];

    for (let j = 0; j < 3; j++) {
        R[i][j] = T[j][i];
    }
}

console.log(R);
*/
/*
let n =Number(prompt("enter le nombre : "));
let str = String(n);
let somme = 0 ;
 for(let i = 0 ;i <= str.length;i++){
   let x = Number(str[i]);
   somme += x** (str.length)

}
console.log(somme);
*/
//mini project 

// ETAPE 1 : Tableau

/*
let livres = [];



// ETAPE 2 : Fonction


function ajouterLivre(titre, auteur, prix, quantite) {

    
    // ETAPE 3 : Créer l'objet
    

    let livre = {
        titre: titre,
        auteur: auteur,
        prix: prix,
        quantite: quantite
    };


    
    // ETAPE 4 : Ajouter au tableau
    

    livres.push(livre);
}



// ETAPE 5 : Ajouter plusieurs livres


ajouterLivre("Harry Potter", "J.K Rowling", 120, 10);
ajouterLivre("Clean Code", "Robert Martin", 200, 5);
ajouterLivre("JavaScript", "David Flanagan", 150, 8);
ajouterLivre("Python", "Mark Lutz", 180, 7);



// ETAPE 6 : Afficher les livres


for (let livre of livres) {

    console.log("Titre :", livre.titre);
    console.log("Auteur :", livre.auteur);
    console.log("Prix :", livre.prix);
    console.log("Quantité :", livre.quantite);
    console.log("--------------------");
}
//Afficher le stock 

function totalLivres() {

    let total = 0;

    for (let livre of livres) {
        total = total + livre.quantite;
    }

    console.log("Nombre total de livres :", total);
}
totalLivres();

//modifier la Quantité d'un Livre
function modifierQuantite(titre, nouvelleQuantite) {

    for (let livre of livres) {

        if (livre.titre === titre) {

            livre.quantite = nouvelleQuantite;

            console.log("Quantité mise à jour !");
            return;
        }
    }

    console.log("Livre non trouvé !");
}
 modifierQuantite("Harry Potter", 11)
 //supprimer  un Livre du Stock
  function supprimerLivre(titre) {

    for (let i = 0; i < livres.length; i++) {

        if (livres[i].titre === titre) {

            livres.splice(i, 1);

            console.log("Livre supprimé !");
            return;
        }
    }

    console.log("Livre non trouvé !");
}
 supprimerLivre("Harry Potter")
function totalLivres() {

    let total = 0;

    for (let livre of livres) {
        total += livre.quantite;
    }

    console.log("Nombre total de livres en stock :", total);
}
totalLivres();
*/
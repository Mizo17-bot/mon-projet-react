/* let age =25;
let name ="Alice";
let isStudent=true;
console.log(age);
console.log(name);
console.log(isStudent); */

const { createElement } = require("react");

/* let x=5;
let y=10;
console.log("Addition",x+y);
console.log("Soustraction",x-y);
console.log("Multiplication",x*y);
console.log("Division",x/y);
console.log("x==y",x==y);
console.log("x===y",x===y);
console.log("x>y",x>y);
console.log("x<y",x<y);
console.log("x>=y",x>=y);
 */
/* let age =25;
if (age>18){
    console.log("Majeur !",age);
}
else{
    console.log("Mineur !",age);
}
for(let i=1;i<10;i++){
    console("Nombres: ",i);
}
let fruits=["Pomme","Banane","Orange"];
let indice=0;
while(indice<fruits.length){
    console("fruits",fruits[indice]);
    indice++; 
}*/
/* function Addition(a,b){
    return a+b;
}
console.log("la resultat d'addition(2,4)",Addition(2,4));
const multiply=(a,b)=>a*b;
console.log("la multiplication a et b =",multiply(1,5));
 */
let maDiv=document.querySelector("#maDiv");
let monBoutoun=document.querySelector("#monBoutoun");
maDiv.innerText="Nouveau text";
let nouveauParagraphe=document.createElement("p");
nouveauParagraphe.textContent="ceci est une nouvelle paragraphe";
maDiv.appendChild(nouveauParagraphe);
let bouton2 = document.createElement("button");
bouton2.textContent = "Cliquez ici pour un message !";
document.body.appendChild(bouton2);
bouton2.addEventListener("click", function() {
  console.log("Le nouveau bouton a été cliqué !");
});
monBouton.addEventListener("click", function() {
  maDiv.style.backgroundColor = "lightblue";
  maDiv.style.color = "white";
  maDiv.style.fontSize = "20px";
  maDiv.style.padding = "10px";
});
let button = document.querySelector("#monBouton");
button.addEventListener("click", function() {
  document.querySelector("#maDiv").innerText = "Le texte a changé !";
});

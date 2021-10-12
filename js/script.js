/**
 * la nav sera mise a la vertical a gauche
 * la nav sera fixe en desktop
 * .menu2 sera invisible tant que l'utilisateur n'aura pas mis ca souris
 * sur .menu1
 */

//nav
let navSpec = document.querySelector('nav');
navSpec.style.position = 'relative';
/** quand la variable a plusieurs elements c'est forcement un tableau */
let ulMenu = document.getElementsByTagName('ul');
for (let i = 0; i < ulMenu.length; i++) {
    let style = ulMenu[i].style;
    style.display = "flex";
    style.flexDirection = "column";
}

let liMenu = document.getElementsByTagName('li');
for (let j = 0; j < liMenu.length; j++) {
    let style = liMenu[j].style;
    style.display = 'inline-block';
}

/*********** CONTENAIRE ***********/
let container = document.querySelector('.container');
container.style.position = 'absolute';

/**
 * j'ai créé un switch de passage de titre pour que quand l'on clic
 * sur un bouton ou une classe, on puisse changer de page virtuellement
 */
//h1
let titleSelector = document.querySelector('h1');
let nameValue = "";
switch(nameValue){
    case 'apropos':
        titleSelector.textContent = 'A propos de moi';
        break;
    case 'motivations':
        titleSelector.textContent = 'Mes motivations';
        break;
    case 'parcours':
        titleSelector.textContent = 'Mon parcours professionnel';
        break;
    case 'competences':
        titleSelector.textContent = 'Mes compétences / réalisations';
        break;
    default:
        //accueil
        titleSelector.textContent = 'A propos de moi';
        break;
}

/**
 * j'ai bien envie de faire un switch pour le contenu aussi
 * mais "mes compétences / réalisations" auront des liens et des images
 */


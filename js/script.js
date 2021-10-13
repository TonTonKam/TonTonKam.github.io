/**
 * la nav sera mise a la vertical a gauche
 * la nav sera fixe en desktop
 * .menu2 sera invisible tant que l'utilisateur n'aura pas mis ca souris
 * sur .menu1
 */

let liMenu = document.getElementsByTagName('li');
for (let j = 0; j < liMenu.length; j++) {
    liMenu[j].addEventListener('click', clicId);
}

/**
 * je fais disparaitre le .menu2 et vais le faire reapparaitre avec 
 * un event sur le .menu1
 */

//.menu1 && .menu2
let menu1 = document.querySelector('.menu1');
let menu2 = document.querySelectorAll('.menu2');

/** il faut laisser le .menu2 en display='none' hors fonction pour en
 * faire des parametres par defaut
 */

function displayOn(){
    for (let k = 0; k < menu2.length; k++) {
        let style = menu2[k].style;
        style.display = 'inline-block';
    }
}
function displayOff(){
    for (let k = 0; k < menu2.length; k++) {
        let style = menu2[k].style;
        style.display = 'none';
    }
}

menu1.onmouseover = displayOn;
menu1.onmouseout = displayOff;
/**
 * j'ai créé un switch de passage de titre pour que quand l'on clic
 * sur un bouton ou une classe, on puisse changer de page virtuellement
 */
function clicker(evt){
    // /**
    //  * dans cette fonction, le 1er <li> prend '2em', mais les autres
    //  * aussi prennent aussi '2em' se qui rends les 2e <li> a '4em'
    //  */
    // evt.target.style.fontSize = '2em';

    //permet de mettre l'event que sur 1 element
    evt.stopPropagation();
    tar = document.getElementById(evt.target);
    console.log(evt);
    console.log("valeur de tar : " + tar);
}

/**
 * la fonction prend comme evt l'endroit cliqué
 * stopPropagation() empeche de prendre toute autres informations
 * fonction modifiTitle utilise comme parametre l'id de la balise cliquer
 * @param {*} evt 
 */
function clicId(evt){
    evt.stopPropagation();
    modifiTitle(evt.target.id)
}

function modifiTitle(nameValue){
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
}
/**
 * j'ai bien envie de faire un switch pour le contenu aussi
 * mais "mes compétences / réalisations" auront des liens et des images
 */


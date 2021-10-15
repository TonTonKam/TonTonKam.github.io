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

/**
 * en ciblant l'id il ne prend pas en compte le <h1>
 */
let titleSelector = document.getElementById('title');

/** il faut laisser le .menu2 en display='none' hors fonction pour en
 * faire des parametres par defaut
 */

function displayOn(){
    for (let k = 0; k < menu2.length; k++) {
        menu2[k].classList.remove("hidden");
    }
}
function displayOff(){
    for (let k = 0; k < menu2.length; k++) {
        menu2[k].classList.add("hidden");
    }
}

menu1.onmouseover = displayOn;
menu1.onmouseout = displayOff;

//fonctionne pas?
// menu1.addEventListener("onmouseover", displayOn, false);
// menu1.addEventListener("onmouseout", displayOff, false);

//paragraphe
let paraDesc = document.getElementById('paraDescription');
let paraMotiv = document.getElementById('paraMotivations');
let paraParc = document.getElementById('paraParcours');
let paraComp = document.getElementById('paraCompetences');

/**
 * j'ai créé un switch de passage de titre pour que quand l'on clic
 * sur un bouton ou une classe, on puisse changer de page virtuellement
 */

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

/********************* Ajout de contenance de cssVide *********************/

//*****presentation par default*****
titleSelector.textContent = 'En se qui me concerne';
funcNone(paraMotiv);
funcNone(paraParc);
funcNone(paraComp);
funcOn(paraDesc);

function clicker(evt){
    evt.stopPropagation();
    changeTitle(evt.target.id);
}

function changeTitle(nameValue){
    // switch(nameValue){
    //     case 'accueil':
    //         titleSelector.textContent = 'A propos de moi';
    //         break;
    //     case 'motivations':
    //         titleSelector.textContent = 'Mes motivations';
    //         break;
    //     case 'parcours':
    //         titleSelector.textContent = 'Mon parcours professionnel';
    //         break;
    //     case 'competences':
    //         titleSelector.textContent = 'Mes compétences / réalisations';
    //         break;
    //     default:
    //         //accueil
    //         titleSelector.textContent = 'A propos de moi def';
    //         break;
    // }
    if(nameValue == 'apropos'){
        titleSelector.textContent = 'En se qui me concerne';
        funcNone(paraMotiv);
        funcNone(paraParc);
        funcNone(paraComp);
        funcOn(paraDesc);
    }
    else if(nameValue == 'motivations'){
        titleSelector.textContent = 'Mes motivations';
        funcNone(paraDesc);
        funcNone(paraParc);
        funcNone(paraComp);
        funcOn(paraMotiv);
    }
    else if(nameValue == 'parcours'){
        titleSelector.textContent = 'Mon parcours professionnel';
        funcNone(paraMotiv);
        funcNone(paraDesc);
        funcNone(paraComp);
        funcOn(paraParc);
    }
    else if(nameValue == 'competences'){
        titleSelector.textContent = 'Mes compétences / réalisations';
        funcNone(paraMotiv);
        funcNone(paraDesc);
        funcNone(paraParc);
        funcOn(paraComp);
    }
    else{
        titleSelector.textContent = 'A propos de moi';
    }
}

/**
 * j'ai bien envie de faire un switch pour le contenu aussi
 * mais "mes compétences / réalisations" auront des liens et des images
 */

/**
 * 
 * @param {*} doc permet de prendre la div ciblé et de lui attribuer un display: none;
 */
function funcNone(docs){
    //fonction avec les div pas avec les p
    docs.style.display = 'none';
}
function funcOn(doc) {
    doc.style.display = 'inline-block';
}


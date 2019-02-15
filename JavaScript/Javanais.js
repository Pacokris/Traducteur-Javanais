/* String contenant toutes les voyelles 
    Vérifie si 'lettre' est une voyelle et si la chaine de caractère est valide */
function compareVoyelle(lettre) {
    let voyelle = 'aeiouy';
    if (voyelle.indexOf(lettre) != -1 || voyelle.toUpperCase().indexOf(lettre) != -1) {
        return true;
    }
    return false
}

/* String contenant toutes les consonnes
    Vérifie si 'lettre' est une consonne et si la chaine de caractère est valide */
function compareConsonne(lettre) {
    let consonne = 'bcdfghjklmnpqrstvxwz';
    if (consonne.indexOf(lettre) != -1 || consonne.toUpperCase().indexOf(lettre) != -1) {
        return true;
    }
    return false;
}

/* Transforme la chaine de caractère 'mot' en une nouvelle chaine javanaise */
function francaisEnJavanais(mot) {
    let i = 0;
    let francaisEnJavanais = '';
    while (i < mot.length) {
        if (i == 0 && compareVoyelle(mot[0])) {
            francaisEnJavanais = 'av' + mot[0];
        } else if (compareConsonne(mot[i]) && compareVoyelle(mot[i + 1]) && i != mot.length - 1) {
            francaisEnJavanais += mot[i] + 'av';
        } else {
            francaisEnJavanais += mot[i];
        }
        i++;
    }
    return francaisEnJavanais;
}

console.log("Traduction Français vers Javanais :");
console.log("bonjour devient --> " + francaisEnJavanais("bonjour"));
console.log("chante devient --> " + francaisEnJavanais("chante"));
console.log("moyen devient --> " + francaisEnJavanais("moyen"));
console.log("exemple devient --> " + francaisEnJavanais("exemple"));
console.log("au devient --> " + francaisEnJavanais("au"));



function javanaisEnFrancais(mot) {
    let javanaisEnFrancais = mot;

    while (javanaisEnFrancais.search('av') != -1) {
        let position = javanaisEnFrancais.search('av');
        if (
            (position == 0) && (compareVoyelle(javanaisEnFrancais[position + 2]))
            || (compareConsonne(javanaisEnFrancais[position - 1]) && compareVoyelle(javanaisEnFrancais[position + 2]))
        ) {
            javanaisEnFrancais = javanaisEnFrancais.replace('av', '');
        }
    }
    return javanaisEnFrancais;
}

console.log(" ");
console.log("Traduction Javanais vers Français :");
console.log("bavonjavour devient --> " + javanaisEnFrancais("bavonjavour"));
console.log("chavantave devient --> " + javanaisEnFrancais("chavantave"));
console.log("mavoyen devient --> " + javanaisEnFrancais("mavoyen"));
console.log("avexavemplave devient --> " + javanaisEnFrancais("avexavemplave"));
console.log("avau devient --> " + javanaisEnFrancais("avau"));
// création de la div générale
const div_principale = document.createElement("div")
document.querySelector('body').append(div_principale)
div_principale.className = "div_principale"
// création du formulaire
const formulaire = document.createElement("form")
document.querySelector(".div_principale").append(formulaire)
formulaire.setAttribute('class', 'formulaire')
// cration du paramètre nom du formulaire
//cration d'une div qui contien le label
const div_nom = document.createElement("div")
div_nom.setAttribute('class', "attribut")
div_nom.setAttribute('id', "div_nom")
document.querySelector(".formulaire").append(div_nom)
// création du label
const label_nom = document.createElement("label")
label_nom.setAttribute('id', "label1")
label_nom.setAttribute("for", "nom")
label_nom.textContent = 'Nom :'
document.querySelector("#div_nom").append(label_nom)
// création de l'input
const nom = document.createElement("input")
nom.setAttribute("type", "text")
nom.setAttribute("id", "nom")
nom.setAttribute("name", "nom")
nom.setAttribute("placeholder", "nom")
nom.setAttribute("class", "input")
nom.setAttribute("value", "")
document.querySelector("#div_nom").append(nom)

//création du paramètre prénom du formulaire
//création d'une div qui contien le label
const div_prenom = document.createElement("div")
div_prenom.setAttribute('class', "attribut")
div_prenom.setAttribute('id', "div_prenom")
document.querySelector(".formulaire").append(div_prenom)
// création du label
const label_prenom = document.createElement("label")
label_prenom.setAttribute('id', "label2")
label_prenom.setAttribute("for", "prenom")
label_prenom.textContent = 'Prénom :'
document.querySelector("#div_prenom").append(label_prenom)
// création de l'input
const prenom = document.createElement("input")
prenom.setAttribute("type", "text")
prenom.setAttribute("id", "prenom")
prenom.setAttribute("name", "prenom")
prenom.setAttribute("placeholder", "prenom")
prenom.setAttribute("class", "input")
prenom.setAttribute("value", "")
document.querySelector("#div_prenom").append(prenom)

//création du paramètre age du formulaire
//création d'une div qui contien le label
const div_age = document.createElement("div")
div_age.setAttribute('class', "attribut")
div_age.setAttribute('id', "div_age")
document.querySelector(".formulaire").append(div_age)
// création du label
const label_age = document.createElement("label")
label_age.setAttribute('id', "label3")
label_age.setAttribute("for", "age")
label_age.textContent = 'Âge :'
document.querySelector("#div_age").append(label_age)
// création de l'input
const age = document.createElement("input")
age.setAttribute("type", "text")
age.setAttribute("id", "age")
age.setAttribute("name", "age")
age.setAttribute("placeholder", "age")
age.setAttribute("value", "")
age.setAttribute("class", "input")
document.querySelector("#div_age").append(age)

//création du paramètre date de naissance du formulaire
//création d'une div qui contien le label
const div_naissance = document.createElement("div")
div_naissance.setAttribute('class', "attribut")
div_naissance.setAttribute('id', "div_naissance")
document.querySelector(".formulaire").append(div_naissance)
// création du label
const label_naissance = document.createElement("label")
label_naissance.setAttribute('id', "label4")
label_naissance.setAttribute("for", "naissance")
label_naissance.textContent = 'Date de naissance :'
document.querySelector("#div_naissance").append(label_naissance)
// création de l'input
const naissance = document.createElement("input")
naissance.setAttribute("type", "text")
naissance.setAttribute("id", "naissance")
naissance.setAttribute("name", "naissance")
naissance.setAttribute("placeholder", "naissance")
naissance.setAttribute("value", "")
naissance.setAttribute("class", "input")
document.querySelector("#div_naissance").append(naissance)

//création du numéro de chasuble du formulaire
//création d'une div qui contien le label
const div_chasuble = document.createElement("div")
div_chasuble.setAttribute('class', "attribut")
div_chasuble.setAttribute('id', "div_chasuble")
document.querySelector(".formulaire").append(div_chasuble)
// création du label
const label_chasuble = document.createElement("label")
label_chasuble.setAttribute('id', "label5")
label_chasuble.setAttribute("for", "chasuble")
label_chasuble.textContent = 'numéro de chasuble :'
document.querySelector("#div_chasuble").append(label_chasuble)
// création de l'input
const chasuble = document.createElement("input")
chasuble.setAttribute("type", "text")
chasuble.setAttribute("id", "chasuble")
chasuble.setAttribute("name", "chasuble")
chasuble.setAttribute("placeholder", "chasuble")
chasuble.setAttribute("class", "input")
chasuble.setAttribute("value", "")
document.querySelector("#div_chasuble").append(chasuble)

//création du tableau
const tableaux = document.createElement("table")
document.querySelector(".div_principale").append(tableaux)
tableaux.setAttribute("id", "table")
table.setAttribute("class", "tableaux")

//création de l'entête du tableau
const thead = document.createElement("thead")
document.querySelector("#table").append(thead)
thead.setAttribute("id", "tableau_head")
thead.setAttribute("class", "tableaux")

//création de la première ligne de l'entête du tableau
const tete_ligne = document.createElement("tr")
document.querySelector("#tableau_head").append(tete_ligne)
tete_ligne.setAttribute("id", "tête_tr")
tete_ligne.setAttribute("class", "tableaux")

//création des collone dans la première ligne de l'entête du tableau
const nom_colonne_tête_tr = ['N° chasuble', 'Nom', 'Prénom', 'Âge', 'Date de naissance']

nom_colonne_tête_tr.forEach(info => {
    const th = document.createElement('th');
    th.setAttribute("class", "tableaux")
    th.textContent = info;
    tete_ligne.appendChild(th);
})

// création du tbody
const tbody = document.createElement("tbody")
tbody.id = "tbody"
table.appendChild(tbody)
tbody.setAttribute("class", "tableaux")

//intéraction entre le formulaire et le tableaux
//création d'un bouton
const bouton = document.createElement("button")
bouton.textContent = "Envoyer"
document.querySelector(".formulaire").append(bouton)
formulaire.addEventListener("submit", Add_info)

//création de la fonction qui permet de compléter le tableau avec les éléments soumis par le formulaire
function Add_info(event){

    event.preventDefault();
    let nom = document.getElementById('nom').value
    let prenom = document.getElementById('prenom').value
    let age = document.getElementById('age').value
    let naissance = document.getElementById('naissance').value
    let chasuble = document.getElementById('chasuble').value

    if (nom && prenom && age && naissance && chasuble){
        let tableaux = document.getElementById("tbody");
        let ligne = document.createElement("tr");
        ligne.setAttribute("class", "tableaux")

        const info = [chasuble, nom, prenom, age, naissance]

        info.forEach(text => {
            let td = document.createElement("td");
            td.setAttribute("class", "tableaux")

            td.textContent = text;
            ligne.appendChild(td);
        });
        tableaux.appendChild(ligne)
        formulaire.reset();
    }
}
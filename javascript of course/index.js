var set=document.getElementById('set')
var step1=document.getElementById('step1') 
var reset=document.getElementById('reset')
var envoyer=document.getElementById('envoyer')


reset.addEventListener('click', (e) =>{
  e.preventDefault()
  step1.classList.add('none')
  set.classList.remove('none')
  reset.classList.add('none')
})



// ici c'est pour recuperer les elements du localstorage pour le tableau en chaine de carractere //
let recup = JSON.parse(localStorage.getItem('eleve')) ?? [];
let stockage =[...recup];
var numero = 0

var tableau = document.querySelector('.bodyTable')


// cette fonction dit est-ce qu'il existe une fonction nommee eleve ? sinon oui affiche toi dans le tableau si non renvoie un tableau vide //
function suivant(){
        event.preventDefault();
    // numero ++
    var c =document.getElementById('nom').value
    var d =document.getElementById('prenom').value
    var f =document.getElementById('Nom_parent').value
    var g =document.getElementById('Email_tuteur').value

    var nom_tuteur =document.getElementById('nom_tuteur').value
    var mail_tuteur =document.getElementById('mail_tuteur').value
    var contact_tuteur =document.getElementById('contact_tuteur').value
    var ville =document.getElementById('ville').value


    // prendre les valeurs de chaque elements et les lire //
    // declare la fonction evite le rechargement rentre les donnees, li les donne contenue dans le tableau //

    let data = {
        // id : numero,
        nom : c,
        prenom : d,
        nom_du_parent : f,
        email_tuteur : g,
        nom_tuteur: nom_tuteur,
        mail_tuteur: mail_tuteur,
        contact_tuteur: contact_tuteur,
        ville: ville,

    }
    stockage.push(data);
    localStorage.setItem('eleve',JSON.stringify(stockage));
    // envoyer les elements contenues dans le tableau vers le localstorage //
    //envoie des valeurs rentrer dans le localstorage
    //JSON.stringify mit pour traduit les elements declarer comme objet en une chaine de carractere //
  

    tableau.innerHTML += `
        <tr>
            
           
            <td>${c}</td>
            <td>${d}</td>
            <td>${f}</td>
            <td>${g}</td>
            <td>${nom_tuteur}</td>
            <td>${mail_tuteur}</td>
            <td>${contact_tuteur}</td>
            <td>${ville}</td>
           </tr> 
    
  `;
//   document.getElementById('reset').click()
}

for(let i = 0; i < stockage.length;i++){
        tableau.innerHTML += `
        <tr>
         
            <td>${stockage[i].nom}</td>
            <td>${stockage[i].prenom}</td>
            <td>${stockage[i].nom_du_parent}</td>
            <td>${stockage[i].email_tuteur}</td>
            <td>${stockage[i].nom_tuteur}</td>
            <td>${stockage[i].mail_tuteur}</td>
            <td>${stockage[i].contact_tuteur}</td>
            <td>${stockage[i].ville}</td>
    </tr>
    
  `
}

// condition pour creer une boucle //
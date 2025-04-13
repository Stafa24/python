// nombre généré aleatoirement 
let a = Math.round(Math.random()*100);
//3q.a
let tentative_max = 3;
let tentative = 0;

console.log(a)
//alert('vous avez '+tentative_max+' tentatives')
prompt('vous avez '+tentative_max+' tentatives');

function validation(){
    // nombre saisi par l'utilisateur qui casté en entier
    let val = parseInt(document.forms['jeu']['val'].value)
    // condition de verification de la valeur saisi et message d'erreur
    if(!val){
        alert('la variable saisie n est pas un nombre')
    }
    else {
        // verifier si le nombre est trop grand
        if(val > a ){
            tentative_max = tentative_max-1;
            alert('Le nombre indiqué est trop grand - il vous reste '+ tentative_max)
            
        }
        //verifier si le nombre est trop petit
        else if(val < a){
            tentative_max =tentative_max - 1;
            alert('Le nombre indiqué est trop petit - il vous reste '+ tentative_max )
            
        }
        // verifier s'il a gagné
        else {
            alert('Vous avez gagné')
        }

        if (tentative_max === 0){
            alert('Vous avez atteint le nombre max de tentative !')
        }
    }

    return 'ok'
}

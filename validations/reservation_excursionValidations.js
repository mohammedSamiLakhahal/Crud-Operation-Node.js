const validerReserExcurs=reservation_excursions=>{

    
    //dateReservation,nbrPersonne
    const{dateReservation,nbrPersonne}=reservation_excursions
    //validation du date
    let estValide=true 
let erreurs={}

const dateRegex=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/

if(!dateRegex.test(dateReservation)){
erreurs['dateReservation']="La date doit etre de cette format ci XX-YY-AAAA"
estValide=false
}

if(estValide) 
return true
//validation de nombre de personne



const nbreRegex=/^[1-9]?[0-9]{1}$|^100$/

if(!nbreRegex.test(nbrPersonne)){
erreurs['nbrPersonne']="Le nombre doit etre entre 0 et 100"
estValide=false
}

if(estValide) 




return true
return erreurs

}
export default validerReserExcurs





const validerVoyage=voyage=>{

    
    
    const{destination,dateDepart,dateRetour,prix}=voyage
    //validation du date
    let estValide=true 
let erreurs={}

const destinationRegex=/^[a-zA-Z]+$/
    
    if(!destinationRegex.test(destination)){
        erreurs['destination']="La destination doit contenir seulement des caracteres de l'alphabet"
        estValide=false
    }

    if(estValide) return true
   

//const dateRegex=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/




if(!dateRegex.test(dateDepart)){
    erreurs['dateDepart']="La date doit etre de cette format ci XX-YY-AAAA"
    estValide=false
    }
    
    if(estValide) 
    return true
    
    //const dateRegex=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
    
    if(!dateRegex.test(dateRetour)){
    erreurs['dateRetour']="La date doit etre de cette format ci XX-YY-AAAA"
    estValide=false
    }
    
    if(estValide) 
    return true
    

//validation du prix


const prixRegex=/^\d+(,\d{1,2})?$/
    
if(!prixRegex.test(prix)){
    erreurs['prix']="Le pric doit contenir seulement des caracteres numerique"
    estValide=false
}

if(estValide) return true

return erreurs


}


export default validerVoyage

const validerHebergement=hebergement=>{
    //nom,adresse,telephone,email
        const{nom,adresse,telephone,email}=hebergement
        //validation du nom
        const nomRegex=/^[a-zA-Z]+$/
        
        let estValide=true 
        let erreurs={}
    
    
    
        if(!nomRegex.test(nom)){
            erreurs['nom']="Le nom doit contenir seulement des caracteres de l'alphabet"
            estValide=false
        }
    
        if(estValide) return true
    
    
     
      
    
    //validation du adresse
        const adresseRegex=/(\d{1,}) [a-zA-Z0-9\s]+(\.)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}/
        
        if(!prenomRegex.test(adresse)){
            erreurs['adresse']="L'adresse doit contenir seulement des caracteres de l'alphabetnumerique"
            estValide=false
        }
    
        if(estValide) return true
    
    //validation du email
    const emailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        
    if(!emailRegex.test(email)){
        erreurs['email']="L'email doit contenir seulement des caracteres de l'alphabetnumerique"
        estValide=false
    }
    
    if(estValide) return true
    
    
    //validation de numero de telephone
    const numRegex=/^( [ 0-9 ] | [ 1-9 ] [ 0-9 ] | 1 [ 0-9 ] [ 0-9 ] | 2 [ 0-4 ] [ 0-9 ] | 25 [ 0-5 ] ) $/
        
    if(!numRegex.test(numerotelephone)){
        erreurs['numerotelephone']="Le numero doit contenir seulement des caracteres numerique"
        estValide=false
    }
    
    if(estValide) return true
    return erreurs
    
    
    }
    
    
    export default validerHebergement
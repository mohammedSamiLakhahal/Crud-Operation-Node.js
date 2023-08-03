const validerFacture=facture=>{
    //total
    
        const{total}=facture
        //validation du facture
        const totalRegex=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
        
        let estValide=true 
        let erreurs={}
    
    
    
        if(!totalRegex.test(total)){
            erreurs['nom']="Le total doit contenir seulement des caracteres de l'alphabet"
            estValide=false
        }
    
        if(estValide) return true
    
    
        return erreurs
       
    
    }
    
    
    export default validerTotal
//Mettre tous les modeles au meme endroit pour eviter des problemes avec les relations
import client from "./Client.js";
import excursions from "./Excursions.js";
import facture from "./Facture.js";
import hebergement from "./Hebergement.js";
import reservation_excursions from "./Reservation_Excursions.js";
import reservation_hebergement from "./Reservation_Hebergement.js";
import reservation from "./Reeservation.js";
import voyage from "./Voyage.js";
//Les relations entre les modeles

// le client fait une resservation
client.hasMany(reservation)
reservation.belongsTo(client)

// le client reserve un voyage
reservation.hasMany(voyage)
voyage.belongsTo(reservation)


//le client paye la facture de reservation du voyage
client.hasMany(facture)
facture.belongsTo(client)

// le client reserve des excursions
client.hasMany(excursions)
excursions.belongsTo(client)

// le client reserve un hebergement
client.hasMany(hebergement)
hebergement.belongsTo(client)

// la reservation d'excursion
excursions.hasMany(reservation_excursions)
reservation_excursions.belongsTo(excursions)

// la reservation d'hebergement
hebergement.hasMany(reservation_hebergement)
reservation_hebergement.belongsTo(hebergement)

export {
    client,
    excursions,
    facture,
    hebergement,
    reservation_excursions,
    reservation_hebergement,
    reservation,
    voyage,
}

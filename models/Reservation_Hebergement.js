import database from "../connexion.js";
import { DataTypes } from "sequelize";

const reservation_hebergement = database.define('reservation_hebergement', {
    date_arrive: {
        type: DataTypes.DATE,
        allowNull: false
    },
    date_depart: {
        type: DataTypes.DATE,
        allowNull: false
    },
    nbrPersonne: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, {
    timestamps: false
})

export default reservation_hebergement;
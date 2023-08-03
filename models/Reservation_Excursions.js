import database from "../connexion.js";
import { DataTypes } from "sequelize";

const reservation_excursions = database.define('reservation_excursions', {
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    nbrpersonne: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: false
})
export default reservation_excursions

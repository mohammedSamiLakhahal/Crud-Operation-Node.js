import database from "../connexion.js";
import { DataTypes } from "sequelize";

const reservation = database.define('reservation', {
    dateReservation: {
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
export default reservation;
import database from "../connexion.js";
import { DataTypes } from "sequelize";


const excursions = database.define('excursions', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    destination: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    prix: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
})
export default excursions
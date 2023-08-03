import database from "../connexion.js";
import { DataTypes } from "sequelize";


const hebergement = database.define('hebergement', {

    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    adresse: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telephone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})
export default hebergement
import database from "../connexion.js";
import { DataTypes } from "sequelize";


const voyage = database.define('voyage', {
    destination: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateDepart: {
        type: DataTypes.DATE,
        allowNull: false
    },
    dateRetour: {
        type: DataTypes.DATE,
        allowNull: false
    },
    prix: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
}, {
    timestamps: false
})
export default voyage
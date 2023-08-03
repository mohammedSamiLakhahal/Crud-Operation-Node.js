import database from "../connexion.js";
import { DataTypes } from "sequelize";


const facture = database.define('facture', {
    total: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
})
export default facture
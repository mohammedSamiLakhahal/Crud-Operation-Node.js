//const sequelize =require ('sequelize');

//const Sequelize = require('sequelize');
//const db = require('../config/database');
//const client = db.define('clients', {
//id_client: {
//type: Sequelize.INTEGER,
//primaryKey: true,
//autoIncrement: true
//},
//nom: {
//type: Sequelize.STRING
//},
//prenom: {
//type: Sequelize.STRING
//},
//adresse: {
//type: Sequelize.STRING
//},
//numerotelephone: {
//type: Sequelize.STRING
//},
//email: {
//type: Sequelize.STRING
//}
//});
//module.exports = client;


import database from "../connexion.js";
import { DataTypes } from "sequelize";


const client = database.define('client', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    adresse: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numertelephone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

export default client
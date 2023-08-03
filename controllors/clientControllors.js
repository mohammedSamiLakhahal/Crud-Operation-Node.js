import client from "../models/Client.js"
import { validationResult } from 'express-validator'
import jwt from 'jsonwebtoken';



//Créer la fonction (controller) pour retourner tous les clients
export const getAllClient = async (req, res) => {
    try {
        const clients = await client.findAll()
        if (!clients) return res.status(404).send("The Clients Not Found")
        res.status(200).json({ data: clients })
    } catch (error) {
        res.status(404).json({ error: "err", message: error.message })
    }
}

//Créer la fonction (controller) pour insérer un client
export const getClientById = async (req, res) => {
    const { id } = req.params;
    try {
        const getClient = await client.findByPk(id);
        if (!getClient) return res.status(404).json({ message: `Client with ID ${id} not found` });
        // If a client was found, send it in the response
        res.status(200).json({ data: getClient });
    } catch (error) {
        // If there was an error querying the database, send a 500 response
        res.status(500).json({ error: error.message });
    }
};

//Créer la fonction (controller) pour ajouter un client
export const addClient = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    try {
        const createClient = await client.create({
            nom: req.body.nom,
            prenom: req.body.prenom,
            adresse: req.body.adresse,
            numertelephone: req.body.numertelephone,
            email: req.body.email
        })
        if (!createClient) return res.status(400).send("The Client Can't Be Created!!");
        const secret = process.env.TOKEN_SECRET
        const token = jwt.sign(
            {
                id: createClient.id,
            },
            secret,
            { expiresIn: "1d" }
        );
        res.status(201).json({ data: createClient, token: token })
    } catch (error) {
        res.status(404).json({ error: "error", message: error.message })
    }
}

//Créer la fonction (controller) pour mettre à jour un client
export const updateClient = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    const clientId = req.params.id;
    const updates = req.body;
    try {
        const updateClient = await client.update(updates, {
            where: {
                id: clientId
            }
        });
        if (!updateClient) return res.status(400).send("The Client Not Be Created!!");
        res.status(200).json({
            message: "Client updated successfully",
            data: updateClient
        });
    } catch (error) {
        res.status(404).json({
            error: "Error",
            message: error.message
        });
    }
};

//Créer la fonction (controller) pour supprimer un client
export const deleteClient = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteClient = await client.destroy({ where: { id: id } });
        if (!deleteClient) return res.status(404).send("The Client Not Found!!")
        res.status(200).json({ data: deleteClient, message: "Client supprimé avec succès" });
    } catch (error) {
        res.status(404).json({ error: "error", message: error.message });
    }

}


import { validationResult } from 'express-validator';
import hebergement from '../models/Hebergement.js';




//Créer la fonction (controller) pour retourner tous les hebergements
export const getAllHebergement = async (req, res) => {
    try {
        const result = await hebergement.findAll()
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


//Créer la fonction (controller) pour insérer un hebergement
export const getHebergementById = async (req, res) => {
    try {
        const getHebergement = await hebergement.findByPk(req.params.id);
        if (!getHebergement) return res.status(400).send("The Hebergement Not Found")
        res.status(200).json({ data: getHebergement, message: 'Hébergement trouvé avec succès' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//Créer la fonction (controller) pour ajouter un hebergement
export const addHebergement = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    try {
        const newHebergement = await hebergement.create({
            nom: req.body.nom,
            adresse: req.body.adresse,
            telephone: req.body.telephone,
            email: req.body.email
        });
        res.status(201).json({ data: newHebergement, message: 'Hébergement ajouté avec succès' });
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
}

//Créer la fonction (controller) pour mettre à jour un hebergement
export const updateHebergement = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    try {
        const updatedHebergement = await hebergement.update({
            nom: req.body.nom,
            adresse: req.body.adresse,
            telephone: req.body.telephone,
            email: req.body.email
        }, {
            where: {
                id: req.params.id
            },
            returning: true
        });
        if (!updatedHebergement) return res.status(400).send("Faild Update Hebergement")
        res.status(200).json({ data: updatedHebergement, message: 'Hébergement mis à jour avec succès' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};



//Créer la fonction (controller) pour supprimer un hebergement
export const deleteHebergement = async (req, res) => {
    try {
        const deleteHebergement = await hebergement.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!deleteHebergement) return res.status(400).send("Faild Delete Hebergement")
        res.status(200).json({ message: 'Hébergement supprimé avec succès' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
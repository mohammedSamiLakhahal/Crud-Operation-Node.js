import { validationResult } from "express-validator"
import { excursions } from "../models/index.js"

//Créer la fonction (controller) pour retourner tous les activites
export const getAllExcursions = async (req, res) => {
    try {
        const result = await excursions.findAll()
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


//Créer la fonction (controller) pour insérer une actvite
export const getExcursionsById = async (req, res) => {
    try {
        const excursion = await excursions.findByPk(req.params.id);
        if (excursion) {
            res.status(200).json({ data: excursion, message: 'Excursion found' });
        } else {
            res.status(404).json({ message: 'Excursion not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Créer la fonction (controller) pour ajouter une actvite
export const addExcursions = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    try {
        const newExcursion = await excursions.create({
            nom: req.body.nom,
            destination: req.body.destination,
            date: req.body.date,
            prix: req.body.prix,
        });
        res.status(201).json({ data: newExcursion, message: 'Excursion ajouté avec succès' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Créer la fonction (controller) pour mettre à jour une actvite
export const updateExcursions = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    const { id } = req.params;
    const { nom, destination, date, prix } = req.body;

    try {
        const updatedExcursions = await excursions.update({
            nom,
            destination,
            date,
            prix
        }, {
            where: {
                id: id
            }
        });
        res.status(200).json({ data: updatedExcursions, message: "Excursion modifié avec succès" });
    } catch (error) {
        res.status(404).json({ error: error.message, message: "Une erreur s'est produite lors de la modification de l'excursion" });
    }

}


//Créer la fonction (controller) pour supprimer une actvite
export const deleteExcursions = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedExcursions = await excursions.destroy({
            where: {
                id: id
            }
        });
        res.status(200).json({ data: deletedExcursions, message: "Excursion supprimé avec succès" });
    } catch (error) {
        res.status(404).json({ error: error.message, message: "Une erreur s'est produite lors de la suppression de l'excursion" });
    }

}


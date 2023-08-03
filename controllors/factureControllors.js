import { validationResult } from "express-validator"
import facture from "../models/Facture.js"

//Créer la fonction (controller) pour retourner tous les factures
export const getAllFacture = async (req, res) => {
    try {
        const result = await facture.findAll()
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


//Créer la fonction (controller) pour insérer une facture
export const getFactureById = async (req, res) => {
    try {
        const getFacture = await facture.findByPk(req.params.id);
        if (!getFacture) throw new Error('Facture non trouvée');
        res.status(200).json({ data: getFacture, message: 'Facture trouvée avec succès' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//Créer la fonction (controller) pour ajouter une facture
export const addFacture = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    try {
        const newFacture = await facture.create({ total: req.body.total });
        res.status(201).json({ data: newFacture, message: 'Facture ajouté avec succès' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}



//Créer la fonction (controller) pour mettre à jour une facture
export const updateFacture = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    try {
        const updatedFacture = await facture.update({ total: req.body.total }, { where: { id: req.params.id } });
        res.status(200).json({ data: updatedFacture, message: 'Facture mise à jour avec succès' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}


//Créer la fonction (controller) pour supprimer une facture
export const deleteFacture = async (req, res) => {
    try {
        const deletedFacture = await facture.destroy({ where: { id: req.params.id } });
        res.status(200).json({ data: deletedFacture, message: 'Facture supprimée avec succès' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}


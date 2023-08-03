import { validationResult } from "express-validator";
import voyage from "../models/Voyage.js"

//Créer la fonction (controller) pour retourner tous les voyage
export const getAllVoyage = async (req, res) => {
    try {
        const getAllVouage = await voyage.findAll();
        if (!getAllVouage) return res.status(404).send("The Voyage is Not Found!!");
        res.status(200).json({ data: getAllVouage })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


//Créer la fonction (controller) pour insérer un voyage
export const getVoyageById = async (req, res) => {
    try {
        const getVoyage = await voyage.findByPk(req.params.id);
        if (!getVoyage) return res.status(404).send("The voyage Not Found")
        res.status(200).json({ data: getVoyage, message: 'Voyage trouvée avec succès' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//Créer la fonction (controller) pour ajouter un voyage
export const addVoyage = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    try {
        const { destination, dateDepart, dateRetour, prix } = req.body;
        const createVoyage = await voyage.create({ destination, dateDepart, dateRetour, prix });
        if (!createVoyage) return res.status(400).send("The Voyage Can't Be Created!!");
        res.status(201).json({ data: createVoyage, message: 'Voyage ajoutée avec succès' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//Créer la fonction (controller) pour mettre à jour un voyage
export const updateVoyage = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    try {
        const { destination, dateDepart, dateRetour, prix } = req.body;
        const updateVoyage = await voyage.findByPk(req.params.id);
        if (!updateVoyage) return res.status(400).send("The Voyage Can't Be Updated!!");
        await updateVoyage.update({ destination, dateDepart, dateRetour, prix });
        res.status(200).json({ data: updateVoyage, message: 'voyage mise à jour avec succès' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


//Créer la fonction (controller) pour supprimer un voyage
export const deleteVoyage = async (req, res) => {
    try {
        const deleteVoyage = await voyage.findByPk(req.params.id);
        if (!deleteVoyage) return res.status(400).send("The Voyage Not Found");
        await deleteVoyage.destroy();
        res.status(200).json({ message: 'succès' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

import { validationResult } from "express-validator"
import reservation from "../models/Reeservation.js"

//Créer la fonction (controller) pour retourner tous les reservations
export const getAllReservation = async (req, res) => {
    try {
        const reservations = await reservation.findAll()
        if (!reservations) return res.status(400).send("The reservation Not Found")
        res.status(200).json({ data: reservations })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//Créer la fonction (controller) pour insérer un reservation
export const getReservationById = async (req, res) => {
    try {
        const getReservation = await reservation.findByPk(req.params.id);
        if (!getReservation) return res.status(404).send("The reservation Not Found")
        res.status(200).json({ data: getReservation, message: 'Reservation trouvée avec succès' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//Créer la fonction (controller) pour ajouter une reservation
export const addReservation = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    try {
        const { dateReservation, nbrPersonne } = req.body;
        const addReservation = await reservation.create({ dateReservation, nbrPersonne });
        if (!addReservation) return res.status(400).send("The reservation Can't Be Created!!");
        res.status(201).json({ data: addReservation, message: 'Reservation ajoutée avec succès' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//Créer la fonction (controller) pour mettre à jour une reservation
export const updateReservation = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    try {
        const { dateReservation, nbrPersonne } = req.body;
        const updateReservation = await reservation.findByPk(req.params.id);
        if (!updateReservation) return res.status(400).send("The reeservation Can't Be Updated")
        await updateReservation.update({ dateReservation, nbrPersonne });
        res.status(200).json({ data: updateReservation, message: 'Reservation mise à jour avec succès' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//Créer la fonction (controller) pour supprimer une reservation
export const deleteReservation = async (req, res) => {
    try {
        const deleteReservation = await reservation.findByPk(req.params.id);
        if (!reservation) return res.status(404).send("The reservation Not Found")
        await deleteReservation.destroy();
        res.status(200).json({ message: 'Reservation supprimée avec succès' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


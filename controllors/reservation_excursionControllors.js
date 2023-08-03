import { validationResult } from "express-validator";
import reservation_excursions from "../models/Reservation_Excursions.js";


//Créer la fonction (controller) pour retourner tous les reservations d'excursions
export const getAllReservationExcursions = async (req, res) => {
    try {
        const getAllReservationExcursion = await reservation_excursions.findAll();
        if (!getAllReservationExcursion) return res.status(400).send("The Reservation-Excursion Not Found")
        res.status(200).json({ data: getAllReservationExcursion })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


//Créer la fonction (controller) pour insérer les reservations d'excursions
export const getReservationExcursionsById = async (req, res) => {
    try {
        const getReservationExcursionsById = await reservation_excursions.findByPk(req.params.id);
        if (!getReservationExcursionsById) return res.status(404).send("The Reservation-Excursion Not Found")
        res.status(200).json({ data: getReservationExcursionsById, message: 'Reservation trouvée avec succès' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//Créer la fonction (controller) pour ajouter les reservations d'excursions
//date	nbrpersonne
export const addReservationExcursions = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    try {
        const { date, nbrpersonne } = req.body;
        const createReservationExcursion = await reservation_excursions.create({ date, nbrpersonne });
        if (!createReservationExcursion) return res.status(400).send("The reservation_excursions Can't Be Created!!");
        res.status(201).json({ data: createReservationExcursion, message: 'Réservation excursion ajoutée avec succès' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//Créer la fonction (controller) pour mettre à jour  les reservations d'excursions
export const updateReservationExcursions = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    try {
        const { date, nbrpersonne } = req.body;
        const updateReservationExcursion = await reservation_excursions.findByPk(req.params.id);
        if (!updateReservationExcursion) throw new Error('Réservation excursion non trouvée');
        await updateReservationExcursion.update({ date, nbrpersonne });
        res.status(200).json({ data: updateReservationExcursion, message: 'Réservation excursion mise à jour avec succès' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


//Créer la fonction (controller) pour supprimer les reservations d'excursions
export const deleteReservationExcursions = async (req, res) => {
    try {
        const deleteReservationExcursion = await reservation_excursions.findByPk(req.params.id);
        if (!deleteReservationExcursion) return res.status(400).send("The Reservation-Excursion Not Found");
        await deleteReservationExcursion.destroy();
        res.status(200).json({ message: 'succès' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


import { validationResult } from "express-validator"
import reservation_hebergement from "../models/Reservation_Hebergement.js"

//Créer la fonction (controller) pour retourner tous les reservations d'hebergements
export const getAllReservationHebergement = async (req, res) => {
    try {
        const reservation_hebergements = await reservation_hebergement.findAll()
        if (!reservation_hebergements) return res.status(404).send("The reservation_hebergement Not Found")
        res.status(200).json({ data: reservation_hebergements })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//Créer la fonction (controller) pour insérer les reservations d'hebergements
export const getReservationHebergementById = async (req, res) => {
    try {
        const getReservationHebergement = await reservation_hebergement.findByPk(req.params.id);
        if (!getReservationHebergement) return res.status(404).send("The Reservation-hebergement Not Found")
        res.status(200).json({ data: getReservationHebergement, message: 'Reservation trouvée avec succès' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//Créer la fonction (controller) pour ajouter les reservations d'hebergements
//date	nbrpersonne
export const addReservationHebergement = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    try {
        const { date_arrive, date_depart, nbrPersonne } = req.body;
        const createReservation_hebergement = await reservation_hebergement.create({ date_arrive, date_depart, nbrPersonne });
        if (!createReservation_hebergement) return res.status(400).send("The reservation_hebergement Can't Be Created!!");
        res.status(201).json({ data: createReservation_hebergement, message: 'Réservation hebergement ajoutée avec succès' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//Créer la fonction (controller) pour mettre à jour  les reservations d'hebergements
export const updateReservationHebergement = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    try {
        const { date_arrive, date_depart, nbrPersonne } = req.body;
        const updateReservationHebergement = await reservation_hebergement.findByPk(req.params.id);
        if (!updateReservationHebergement) return res.status(400).send("The reservation_hebergement Can't Be Updated!!");
        await updateReservationHebergement.update({ date_arrive, date_depart, nbrPersonne });
        res.status(200).json({ data: updateReservationHebergement, message: 'Réservation hebergement mise à jour avec succès' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//Créer la fonction (controller) pour supprimer les reservations d'hebergements
export const deleteReservationHebergement = async (req, res) => {
    try {
        const deleteReservationHebergements = await reservation_hebergement.findByPk(req.params.id);
        if (!deleteReservationHebergements) return res.status(400).send("The Reservation-hebergement Not Found");
        await deleteReservationHebergements.destroy();
        res.status(200).json({ message: 'succès' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
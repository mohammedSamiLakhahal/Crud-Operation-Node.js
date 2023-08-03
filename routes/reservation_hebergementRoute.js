import { Router } from "express";
import {
    addReservationHebergement,
    deleteReservationHebergement,
    getAllReservationHebergement,
    getReservationHebergementById,
    updateReservationHebergement
} from "../controllors/reservation_HebergementControllors.js"
import { body } from "express-validator";


const router = Router()

router
    .get('/', getAllReservationHebergement)
    .post('/',
        body('date_arrive').notEmpty(),
        body('date_depart').notEmpty(),
        body('nbrPersonne').notEmpty(),
        addReservationHebergement)
    .get('/get/:id', getReservationHebergementById)
    .delete('/delete/:id', deleteReservationHebergement)
    .put('/update/:id',
        body('date_arrive').notEmpty(),
        body('date_depart').notEmpty(),
        body('nbrPersonne').notEmpty(),
        updateReservationHebergement)

export default router
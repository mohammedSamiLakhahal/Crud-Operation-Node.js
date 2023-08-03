import { Router } from "express";
import {
    addReservationExcursions,
    deleteReservationExcursions,
    getAllReservationExcursions,
    getReservationExcursionsById,
    updateReservationExcursions
} from "../controllors/reservation_excursionControllors.js"
import { body } from "express-validator";


const router = Router()

router
    .get('/', getAllReservationExcursions)
    .post('/',
        body('date').notEmpty(),
        body('nbrpersonne').notEmpty(),
        addReservationExcursions)
    .get('/get/:id', getReservationExcursionsById)
    .put('/update/:id',
        body('date').notEmpty(),
        body('nbrpersonne').notEmpty(),
        updateReservationExcursions)
    .delete('/delete/:id', deleteReservationExcursions)

export default router
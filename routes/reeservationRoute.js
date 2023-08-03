import { Router } from "express";
import {
    addReservation,
    deleteReservation,
    getAllReservation,
    getReservationById,
    updateReservation
} from "../controllors/ReeservationControllors.js"
import { body } from "express-validator";


const router = Router()

router
    .get('/', getAllReservation)
    .post('/',
        body('nbrPersonne').notEmpty(),
        body('dateReservation').notEmpty(),
        addReservation)
    .get('/get/:id', getReservationById)
    .put('/update/:id',
        body('nbrPersonne').notEmpty(),
        body('dateReservation').notEmpty(),
        updateReservation)
    .delete('/delete/:id', deleteReservation)

export default router
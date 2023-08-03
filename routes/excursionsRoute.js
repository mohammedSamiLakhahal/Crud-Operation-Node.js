import { Router } from "express";
import {
    addExcursions,
    updateExcursions,
    deleteExcursions,
    getAllExcursions,
    getExcursionsById
} from "../controllors/excursionsControllors.js";
import { body } from "express-validator";

const router = Router()

router
    .get('/', getAllExcursions)
    .post('/',
        body('nom').notEmpty(),
        body('destination').notEmpty(),
        body('date').notEmpty(),
        body('prix').notEmpty(),
        addExcursions)
    .get('/get/:id', getExcursionsById)
    .put('/update/:id',
        body('nom').notEmpty(),
        body('destination').notEmpty(),
        body('date').notEmpty(),
        body('prix').notEmpty(),
        updateExcursions)
    .delete('/delete/:id', deleteExcursions)

export default router
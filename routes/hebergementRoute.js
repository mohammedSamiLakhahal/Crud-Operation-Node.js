import { Router } from "express";
import {
    addHebergement,
    deleteHebergement,
    getAllHebergement,
    getHebergementById,
    updateHebergement
} from "../controllors/HebergementControllors.js"
import { body } from "express-validator";


const router = Router()

router
    .get('/', getAllHebergement)
    .post('/',
        body('nom').notEmpty(),
        body('adresse').notEmpty(),
        body('telephone').notEmpty(),
        body('email').notEmpty(),
        addHebergement)
    .get('/get/:id', getHebergementById)
    .put('/update/:id',
        body('nom').notEmpty(),
        body('adresse').notEmpty(),
        body('telephone').notEmpty(),
        body('email').notEmpty(),
        updateHebergement)
    .delete('/delete/:id', deleteHebergement)

export default router
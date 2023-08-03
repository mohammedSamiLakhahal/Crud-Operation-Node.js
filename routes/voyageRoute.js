import { Router } from "express";
import {
    addVoyage,
    deleteVoyage,
    getAllVoyage,
    getVoyageById,
    updateVoyage
} from "../controllors/voyageControllors.js"
import { body } from "express-validator";


const router = Router()

router
    .get('/', getAllVoyage)
    .post('/',
        body('destination').notEmpty(),
        body('dateDepart').notEmpty(),
        body('dateRetour').notEmpty(),
        body('prix').notEmpty(),
        addVoyage)
    .get('/get/:id', getVoyageById)
    .put('/update/:id',
        body('destination').notEmpty(),
        body('dateDepart').notEmpty(),
        body('dateRetour').notEmpty(),
        body('prix').notEmpty(),
        updateVoyage)
    .delete('/delete/:id', deleteVoyage)

export default router
import { Router } from "express";

import {
    addFacture,
    updateFacture,
    deleteFacture,
    getAllFacture,
    getFactureById
} from "../controllors/FactureControllors.js";
import { body } from "express-validator";

const router = Router()

router
    .get('/', getAllFacture)
    .post('/',
        body('total').notEmpty(),
        addFacture)
    .get('/get/:id', getFactureById)
    .put('/update/:id',
        body('total').notEmpty(),
        updateFacture)
    .delete('/delete/:id', deleteFacture)

export default router
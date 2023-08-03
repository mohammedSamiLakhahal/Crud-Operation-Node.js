import { Router } from "express";
import { body } from 'express-validator';
import notreStrategy from '../authentification/strategies.js';
import { verifierToken } from '../authentification/autorisation.js';
import {
    addClient,
    deleteClient,
    getAllClient,
    getClientById,
    updateClient
} from "../controllors/clientControllors.js"


const router = Router()

router
    .post('/',
        body('nom').notEmpty(),
        body('prenom').notEmpty(),
        body('email').notEmpty(),
        body('numertelephone').notEmpty(),
        body('adresse').isLength({ min: 5 }),
        addClient)
    .get('/',
        verifierToken,
        getAllClient
    )
    .get('/get/:id', getClientById)
    .put('/update/:id',
        body('nom').notEmpty(),
        body('prenom').notEmpty(),
        body('email').notEmpty(),
        body('numertelephone').notEmpty(),
        body('adresse').isLength({ min: 5 }),
        updateClient)
    .delete('/delete/:id', deleteClient)

export default router
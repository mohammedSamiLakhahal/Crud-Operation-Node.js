// const db=require('./config/database');
//const client=require('./models/Client');

//db.authenticate();

//.then(());

import express from 'express'
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';


import database from './connexion.js'

import clientRoute from './routes/clientRoute.js'
import excursionsRoute from './routes/excursionsRoute.js'
import factureRoute from './routes/factureRoute.js'
import hebergementRoute from './routes/hebergementRoute.js'
import reeservationRoute from './routes/reeservationRoute.js'
import reservation_excursionRoute from './routes/reservation_excursionRoute.js'
import reservation_hebergementRoute from './routes/reservation_hebergementRoute.js'
import voyageRoute from './routes/voyageRoute.js'
import * as dotenv from 'dotenv'
dotenv.config()

database.sync()
//const PORT = dotenv.config().parsed.PORT
//const PORT = process.env.PORT

//console.log('ENV',dotenv.config().parsed)

const app = express()

// middleware
app.use(helmet())
app.use(compression())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/client', clientRoute)
app.use('/excursions', excursionsRoute)
app.use('/facture', factureRoute)
app.use('/hebergement', hebergementRoute)
app.use('/reeservation', reeservationRoute)
app.use('/reservation_excursion', reservation_excursionRoute)
app.use('/reservation_hebergement', reservation_hebergementRoute)
app.use('/voyage', voyageRoute)


app.listen(process.env.PORT, () => console.log(`Serveur running on port ${process.env.PORT}`));

import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import middlewares from './src/middlewares/middlewares.js'
import Configuration from './config/configuration.js'
import UserRoutes from './src/routes/User.routes.js'

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(helmet())
app.use(morgan('common'))

app.get('/recipe', (req, res) => {
    res.send('Pancakes!')
})

UserRoutes.routes(app)
app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

Configuration.connectToDatabase()
Configuration.connectToPort(app)

export default app

import * as express from 'express'
import * as bodyParser from 'body-parser'
import routeHandler from './routes'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

routeHandler(app)

export default app

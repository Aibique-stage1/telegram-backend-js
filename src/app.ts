import express, {Application} from 'express'
const PORT:number = 3000

// import routes from './network/routes'
import {messageRoute} from './network/routes'

//middleware
const app: Application = express();
app.use(express.json())

//routes
messageRoute(app);

// features
app.use('/app',express.static('public'))
app.listen(PORT, () => {
    console.log(`Listening in port: http://localhost:${PORT}`)
})

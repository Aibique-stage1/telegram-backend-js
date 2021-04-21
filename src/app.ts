import express, {Application} from 'express'
import {ConnectDB} from './db'
import * as dotenv from 'dotenv'

dotenv.config();

if(!process.env.DB_URI){
    process.exit(1)
}
const PORT:number = 3000

// import routes from './network/routes'
import {messageRoute} from './network/routes'

//middleware
ConnectDB(process.env.DB_URI);
const app: Application = express();
app.use(express.json())

//routes
messageRoute(app);

// features
app.use('/app',express.static('public'))
app.listen(PORT, () => {
    console.log(`Listening in port: http://localhost:${PORT}`)
})

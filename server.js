const express = require('express')
const PORT = 3000

const routes = require('./network/routes')

//middleware
const app = express();
app.use(express.json())

//routes
routes.route(app);
// features
app.use('/app',express.static('public'))
app.listen(PORT, console.log(`Listening Port : http://localhost:${PORT}`))

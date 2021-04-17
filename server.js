const express = require('express')

const PORT = 3000
const app = express();

app.use('/', function(req, res){
res.send('Hola mundo nuevo!')
})

app.listen(PORT, console.log(`Listening Port : http://localhost:${PORT}`))

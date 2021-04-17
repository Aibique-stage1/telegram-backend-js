const express = require('express')
const PORT = 3000

const response = require('./network/response')

const app = express();
app.use(express.json())

app.get('/get', function(req, res){
    console.log(req.headers);
    
    res.header({"my-header": "This is my custom header"})
    response.success(req, res, 'I got the body 👀')
})
app.post('/post', function(req, res){
    const {body:{ Hola: theBody }} = req;
    const {query: {age: theQuery}} = req;

    if(theQuery < 21 ){
        response.error(req, res, `${theQuery} years old. You are still underaged`, 501)
    }

    response.success(req, res, `This is the body: ${theBody} this is your age: ${theQuery} 👍`, 201);
})
app.put('/put', function(req, res){
    response.success(req, res, 'You commit a PUT method, Congratulations')
})
app.delete('/delete', function(req,res){
    response.success(req, res, 'Congratulations, you committed a DELETE method')
})

app.use('/app',express.static('public'))
app.listen(PORT, console.log(`Listening Port : http://localhost:${PORT}`))

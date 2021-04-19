// It does match the routes and connects the controllers 
const express = require('express')
const app = express()

const controller = require('./controller')
const response = require('../../network/response')

// routes
app.get('/get', function(req, res){
    console.log(req.headers);
    
    res.header({"my-header": "This is my custom header"})
    response.success(req, res, 'I got the body 👀')
})

app.post('/post', function(req, res){
    const {body:{ user }} = req;
    const {body:{message}} = req;

    controller.addMessage(user, message).then((fullMessage)=> {
        response.success(req, res, fullMessage, 201);
    }).catch(error =>
        {
            response.error(req, res, error.message, 500)
        }
        )

})

app.put('/put', function(req, res){
    response.success(req, res, 'You commit a PUT method, Congratulations')
})

app.delete('/delete', function(req,res){
    response.success(req, res, 'Congratulations, you committed a DELETE method')
})

module.exports = app;
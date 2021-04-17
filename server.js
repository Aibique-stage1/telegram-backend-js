const express = require('express')
const PORT = 3000
const app = express();


app.get('/get', function(req, res){
    res.json({
        "METHOD": "GET",
        "use": "It allows to get information",
        "example": "User info received 👀 "
    })
})
app.post('/post', function(req, res){
    res.json({
        "METHOD": "POST",
        "use": "It creates a new Object in the server",
        "example":"Add a image to the carrousel 👍"
    })
})
app.put('/put', function(req, res){
    res.json({
        "METHOD": "PUT",
        "use": "when big changes on an object are necessary",
        "example": "Edit the user Profile"
    })
})
app.delete('/delete', function(req,res){
    res.json({
        "METHOD": "DELETE",
        "use": "It deletes the requested object",
        "example": "Delete account 🤷‍♂️"
    })
})


app.listen(PORT, console.log(`Listening Port : http://localhost:${PORT}`))

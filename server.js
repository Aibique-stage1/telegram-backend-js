const express = require('express')
const PORT = 3000

const app = express();
app.use(express.json())

app.get('/get', function(req, res){
    res.json({
        "METHOD": "GET",
        "use": "It allows to get information",
        "example": "User info received:  👀 "
    })
})
app.post('/post', function(req, res){
    const {body:{ Hola: theBody }} = req;
    const {query: {age: theQuery}} = req;

    res.json({
        "METHOD": "POST",
        "use": "It creates a new Object in the server",
        "example":`This is the body: ${theBody} and this is the query: ${theQuery} Post status 👍`
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

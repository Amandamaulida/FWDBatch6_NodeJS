var express = require('express')
var app = express()

var data = {}
app.use(express.json());

app.get('/name', function(req,res){
res.send(data)
})

// {
//     "username": "amanda",
//     "password": "123456"
// }

app.post('/name', function(req,res){
    data[req.body.username] = req.body.password
    res.send('account added')
})


app.delete('/name/:username', function(req,res){
    var uname = req.params.username
    delete data[uname]
     res.send('account delete')
 })
 
console.log("runnng a server...")
app.listen(3003)

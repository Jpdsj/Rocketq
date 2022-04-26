const express = require('express');
const route = express.Router();
const questionController = require('./controllers/QuestionController')
const roomController = require('./controllers/roomController')

//Rota para acessar o arquivo index
route.get('/',(req,res) => {
    res.render('index', {page:'enter-room'});
})

//Rota para acessar o arquivo room
route.get('/room/:room',(req,res) => {
    res.render('room');
})

//Rota para acessar o arquivo create-pass
route.get('/create-pass',(req,res) => {
    res.render('index', {page:'create-pass'});
})

//Rota para passar informações via URL
route.post('/question/:room/:question/:action', questionController.index);

route.post('/create-room', roomController.create);

module.exports = route;
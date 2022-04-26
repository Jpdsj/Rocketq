const express = require('express');
const route = require('./route');
const path = require('path');
const server = express();

//Setando o ejs como view engine
server.set('view engine','ejs');

//Usar o conteúdo estático que está na pasta public
server.use(express.static('public'));

//path = caminho do projeto # join = juntando o path com o dirname / dirname é o local onde o arquivo server.js está = src/ # views é o nome da pasta que tem o arquivo index
server.set('views', path.join(__dirname, 'views'));

//Pegar o conteúdo do form, decodificar e passar para o controller -> Foi necessário adicionar por causa do erro do campo password -> "Cannot read properties of undefined (reading 'password')"
server.use(express.urlencoded({extended : true}))

//Usando a rota criada no arquivo route.js
server.use(route);

//Iniciando o server na porta 3000
server.listen(3000, () => {
    console.log('Rodando')
});
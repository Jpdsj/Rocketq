const { client } = require('../db/config')

module.exports = {
    async create(req, res){
        //Abrindo conexão com o banco
        await client.connect();

        //Capturando a senha preenchida no campo
        const pass = req.body.password
        let roomId

        //Criando o ID da sala
        for (var i = 0; i < 6; i++) {
            i == 0 ? roomId = Math.floor(Math.random() * 10).toString() : 
            roomId += Math.floor(Math.random() * 10).toString();            
        }

        console.log(parseInt(roomId));

        //Registrando o número da sala
        await client.query(
             `INSERT INTO rooms (id, pass) VALUES (${parseInt(roomId)}, ${pass})`
        )

        //Fechando a conexão
        await client.end();
        

        res.redirect(`/room/${roomId}`)
    }
}
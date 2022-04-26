const { client } = require('./config.js')

const initDb = {
    async init(){
        await client.connect();

        await client.query(`CREATE TABLE rooms ( 
                            id INTEGER PRIMARY KEY, 
                            pass TEXT)`
        );

        await client.query(`CREATE TABLE questions (
               id INTEGER PRIMARY KEY,
               titulo TEXT,
               read INT)`
        );  
        
        await client.end();
    }
}

initDb.init();
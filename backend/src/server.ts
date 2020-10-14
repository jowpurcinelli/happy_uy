import express from 'express';

import './database/connection';

const app = express ( );


app.use(express.json( ));


app.get('/users', ( request, response) => {
    return response.json({ message: 'Hello World' })
})



app.listen(3333);


/*
Driver nativo:
     permite ejecutar querys del banco de datos diectamente por el node, pero no tiene abstraccion
-----------------
Query builder (knex):
    Permite escribir las querys utilizando syntax javascript
----------------
ORM (Object Relational Mapping):
    Hace un relacionamento de objectos para cada  registro de una tabla (si tengo 3 users, orm vas a representalos como User User User, osea, 3 instancias/objectos de la clase user)


    */
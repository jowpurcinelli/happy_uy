import express from 'express';
import path from 'path';

import './database/connection';
import routes from './routes';

const app = express ( );


app.use(express.json( ));

app.use(routes);
app.use('/uplodas', express.static( path.join( __dirname, ' ..', 'uploads') ))

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